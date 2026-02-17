const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(bodyParser.json());

// Configure Environment
require('dotenv').config();
const nodemailer = require("nodemailer");

// Initialize Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Check for missing credentials at startup
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('\n⚠️  Gmail credentials missing in .env. Skipping email dispatch.');
    console.warn('   To enable auto-response emails, set EMAIL_USER and EMAIL_PASS in backend/.env\n');
}

// Routes
app.post('/api/save-contact', (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    // Basic Validation
    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    const sql = `INSERT INTO submissions (first_name, last_name, email, message) VALUES (?, ?, ?, ?)`;
    const params = [firstName, lastName, email, message];

    db.run(sql, params, async function (err) {
        if (err) {
            console.error('Error inserting data:', err.message);
            return res.status(500).json({ error: 'Database error' });
        }
        
        // Send success response immediately so the user isn't kept waiting
        res.status(201).json({
            message: 'Contact saved successfully',
            id: this.lastID
        });

        // Send Auto-Response Email (SVE Signature Template)
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.log('Gmail credentials not configured — skipping auto-response email.');
            return;
        }

        try {
            const emailContent = `Dear ${firstName},

Thank you for reaching out to SVE Interior. We have received your message and our design team—led by Yash and Nidhi Mamoria—will review your requirements shortly.

With over 15 years of experience and 15,000+ completed projects, we are committed to delivering excellence. A consultant will contact you within 24 hours.

Best regards,
The SVE Team`;

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: "We've received your inquiry — SVE Interior",
                text: emailContent
            });

            console.log(`✅ Auto-response sent to ${email}`);

        } catch (error) {
            console.error('Auto-response failed:', error.message);
            console.log('--- FAILED EMAIL CONTENT LOG ---');
            console.log(`To: ${email}`);
            console.log(`Subject: We've received your inquiry — SVE Interior`);
            console.log(`Dear ${firstName}, ... [SVE Signature Template] ...`);
            console.log('--------------------------------');
        }
    });
});

// Get all leads
app.get('/api/leads', (req, res) => {
    const sql = `SELECT * FROM submissions ORDER BY timestamp DESC`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Error fetching leads:', err.message);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(rows);
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
