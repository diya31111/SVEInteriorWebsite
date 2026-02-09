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

// Routes
app.post('/api/save-contact', (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    // Basic Validation
    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    const sql = `INSERT INTO submissions (first_name, last_name, email, message) VALUES (?, ?, ?, ?)`;
    const params = [firstName, lastName, email, message];

    db.run(sql, params, function (err) {
        if (err) {
            console.error('Error inserting data:', err.message);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({
            message: 'Contact saved successfully',
            id: this.lastID
        });
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
