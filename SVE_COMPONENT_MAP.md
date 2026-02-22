# SVE Interior — Complete Website-to-Code Component Map

> **Prepared:** 22 February 2026  
> **Stack:** React 18 + Vite + Tailwind CSS + Framer Motion  
> **Routing:** React Router v6 (`src/App.jsx`)  
> **Backend:** Express.js + SQLite (Railway deployment)

---

## 1. GLOBAL LAYOUT COMPONENTS

These are rendered on **every page** via `src/App.jsx`:

| # | Website Section | Component File | Key Responsibilities |
|---|---|---|---|
| G1 | **Navbar** | `src/components/Navbar.jsx` | Fixed top navigation bar with SVE logo (`src/assets/logo.png`). Contains links: Home, About Us, Our Signature Products, Gallery, Blog, Contact Us. Responsive mobile hamburger menu with full-screen overlay on `#f4e9e2` background. Scroll-aware styling. |
| G2 | **Footer** | `src/components/Footer.jsx` | 4-column grid: Brand info + socials (Instagram, Facebook), Quick Links, Product links, Contact details (address, phone, email). Dark background (`var(--bg-footer) → #333333`). Copyright bar at bottom. |
| G3 | **Back To Top Button** | `src/components/BackToTop.jsx` | Floating scroll-to-top button, appears after scrolling. |
| G4 | **Scroll To Top** | `src/components/ScrollToTop.jsx` | Automatically scrolls to top on route change. |
| G5 | **Smooth Scroll** | `src/components/SmoothScroll.jsx` | Wraps all content for smooth scrolling behavior. |
| G6 | **Noise Overlay** | `src/App.jsx` (inline div) | Fixed full-screen grain texture overlay (`opacity-[0.05]`) for luxury aesthetic. |

---

## 2. HOME PAGE (`/`)

**Page File:** `src/pages/Home.jsx`  
**Lines:** 263 | **Imports:** Stats, BrandTicker, WhyChooseUs, BeforeAfter, ClientShowcase, ShinyText, BlurText, MagneticButton

| # | Website Section | Component / Location | Key Responsibilities |
|---|---|---|---|
| H1 | **Hero Section — "A Legacy of Luxury"** | `src/pages/Home.jsx` Lines 26–93 | Full-viewport hero with parallax background image. **Local high-pixel asset:** `src/assets/home-page-hero.png` (imported as `heroBg` on Line 6, applied via `backgroundImage: url(${heroBg})` on Line 31). Dark gradient overlay for text legibility. Animated text via `BlurText` ("A Legacy of" + "Luxury"). Subtitle: "Defining Jaipur's Skyline Since 2008". CTA button → `/our-products` with `MagneticButton` effect. Shiny badge: "Est. 2008-Jaipur, India". |
| H2 | **Brand Ticker Marquee** | `src/components/BrandTicker.jsx` | Infinite horizontal scroll of 25 premium brand names (D'Decor, Versace, DuPont, Somfy, etc.) in large serif font. Faded edges for depth. Called on Line 96 of Home.jsx. |
| H3 | **Stats Section — Triple-Box Layout** | `src/components/Stats.jsx` | **15+ Years · 15,000+ Projects · 500+ Clients** in a `grid-cols-3` layout. Each box has: animated counter (spring physics), `bg-[#f4e9e2]` parchment background, `border border-[#5a3e3e]/15` burgundy border, serif number + uppercase label. Counter animates on scroll into view (`useInView`). Called on Line 99 of Home.jsx. |
| H4 | **Why Choose Us — "The SVE Standard"** | `src/components/WhyChooseUs.jsx` | Dark rose background (`bg-rose` → `#8C5E5A`). 8 feature cards in 4-column grid (Personal Designer, VR Experience, Impeccable Implementation, Reputed Partners, Built to Last, Transparent Prices, Professional Installation, Timely Accomplishments). Each card uses `SpotlightCard` component with gold spotlight hover effect. Called on Line 102 of Home.jsx. |
| H5 | **Signature Product Grid — Bento Layout** | `src/pages/Home.jsx` Lines 104–174 | "Our Signature Products" heading. 2×2 asymmetric bento grid (tall + short items). Each card: product image from `src/data/products.js`, hover zoom, gradient overlay, **parchment pill label** (`.product-label` class → `bg: #f4e9e2`, black text, rounded-full, black border). Links to `/collections/:id`. Products displayed: `products[1]` (Wooden Flooring), `products[5]` (Curtains), `products[2]` (Stretch Ceilings), `products[6]` (Blinds). |
| H6 | **Turnkey Services — "Full-Stack Interiors"** | `src/pages/Home.jsx` Lines 176–202 | 3-column grid: Architectural Consulting (Ruler icon), Civil Contracting (HardHat icon), Turnkey Execution (Hammer icon). Each card: parchment bg, hover shadow, border transitions. "Beyond Decor" gold label. |
| H7 | **Before/After Transformation Slider** | `src/components/BeforeAfter.jsx` | Interactive drag slider comparing before/after images. Called on Line 206–209 with `/before-after-before.jpeg` and `/before-after-after.jpeg` (public folder). Gold handle with arrow icon. "The SVE Difference" heading. |
| H8 | **Testimonials — "What Our Clients Say"** | `src/pages/Home.jsx` Lines 211–248 | 3-column testimonial cards: Vipul Gupta, Anjali Sharma, Rahul Verma. Each: circular avatar (grayscale → color on hover), quoted review text, name + role. |
| H9 | **Client Showcase — Corporate Logo Grid** | `src/components/ClientShowcase.jsx` | "Trusted by the Best" heading. 6-column grid of 21 corporate client logos (Radisson, SBI, KIA, Honda, Audi, NEXA, Adani, etc.). All logos are **local assets** imported from `src/assets/companyphotos/`. White card backgrounds with gray borders. |

---

## 3. ABOUT US PAGE (`/about-us`)

**Page File:** `src/pages/About.jsx`  
**Lines:** 188 | **Background:** `style={{ backgroundColor: '#F1DDDA' }}` (Line 6)

| # | Website Section | Component / Location | Key Responsibilities |
|---|---|---|---|
| A1 | **About Hero — "Complete Interior Solutions"** | `src/pages/About.jsx` Lines 8–46 | Two-column layout: Left = H1 "Complete Interior Solutions in Jaipur", brand story paragraph, founded by Yash & Nidhi Mamoria. Right = large hero image (Unsplash) with decorative gold border and floating "Design is our Passion" rose badge. |
| A2 | **"Design is Our Passion" Section** | `src/pages/About.jsx` Lines 48–97 | **Background:** `bg-[#F1DDDA]`. Two-column: Left = interior image, Right = H2 "Design is Our Passion", paragraphs about philosophy (15,000+ projects, 500+ corporate clients), italicized pull-quote with CTA border. Decorative vertical gradient lines. |
| A3 | **Founders Section — Yash & Nidhi Mamoria** ⚠️ **DO NOT MODIFY** | `src/pages/About.jsx` Lines 99–143 | "Meet the Founders" heading with gold label. **Two founder cards** in 2-column grid: **Yash Mamoria** (Co-Founder & Design Director) — bio about design philosophy, eye for detail, long-term value. **Nidhi Mamoria** (Co-Founder & Operations Head) — bio about operational excellence, customer experience. Both use Unsplash placeholder photos (Lines 111, 117). Grayscale → color hover effect on images. |
| A4 | **"Now We Have" / Evolution Section** | `src/pages/About.jsx` Lines 145–181 | **Background:** `style={{ backgroundColor: '#F1DDDA' }}` (Line 146). H2: "15 Years of Living Art". Two paragraphs about SVE's evolution from passion project to Rajasthan's curator. **Stat pills (2×2 grid):** "15+ Years of Design Excellence", "15,000+ Completed Projects", "Rajasthan's Curator of Living Art", "Trusted by 500+ Corporates". Each pill: `border border-black/10`, `bg-[#F1DDDA]/40`, CTA dot. Right column: interior detail image with tilted gold backdrop. |
| A5 | **Premium Partners** | `src/components/BrandPartners.jsx` | Grid of brand partner logos (D'Decor, Versace, DuPont, Nilaya, Somfy, etc.) with logo images from URLs. Animated entrance with staggered delays. Called on Line 184 of About.jsx. |

---

## 4. PRODUCTS PAGE (`/our-products`)

**Page File:** `src/pages/Products.jsx`  
**Lines:** 54 | **Data Source:** `src/data/products.js`

| # | Website Section | Component / Location | Key Responsibilities |
|---|---|---|---|
| P1 | **Products Header** | `src/pages/Products.jsx` Lines 15–22 | H1: "Our Signature Products". Subtitle about curated premium interior finishes. |
| P2 | **Product Masonry Grid** | `src/pages/Products.jsx` Lines 24–46 | CSS `columns-3` masonry layout. Each product card: image, gradient overlay, **parchment pill label** (`.product-label` class). Links to `/collections/:id`. All 11 products from `products.js`. |

### Product Data File: `src/data/products.js`

| Product ID | Title | Hero Image Source | Gallery Images |
|---|---|---|---|
| `wallpaper` | Wallpaper | `src/assets/products/wallpaper-1.png` | wallpaper-1/2/3.png |
| `wooden-flooring` | Wooden Flooring | `src/assets/products/wooden-flooring-1.png` | wooden-flooring-1/2/3.png |
| `stretch-ceiling` | Stretch Ceilings | `src/assets/products/stretch-ceiling-1.png` | stretch-ceiling-1/2/3.png |
| `sofa-upholstery` | Sofa & Upholstery | Unsplash URL | 3 Unsplash URLs |
| `decking-cladding` | Decking & Cladding | `src/assets/products/cladding-1.png` | cladding-1/2/3.png |
| `curtains` | Curtains | `src/assets/products/curtains-1.png` | curtains-1/2/3.png |
| `blinds` | Blinds | `src/assets/products/blinds-1.png` | blinds-1/2/3.png |
| `acoustic-panels` | Acoustic Panels | `src/assets/products/acoustic-panel-1.png` | acoustic-panel-1/2/3.png |
| `pergolas-gazebos` | Pergolas & Gazebos | `src/assets/products/pergolas-1.png` | pergolas-1/2/3.png |
| `wall-to-wall-carpets` | Carpet & Rugs | `src/assets/products/carpets-1.png` | carpets-1/2/3.png |
| `vertical-garden` | Vertical Garden | `src/assets/products/vertical-garden-1.png` | vertical-garden-1/2/3.png |

---

## 5. PRODUCT DETAIL PAGE (`/collections/:id` and `/product/:id`)

**Page File:** `src/pages/ProductDetail.jsx`  
**Lines:** 273

| # | Website Section | Component / Location | Key Responsibilities |
|---|---|---|---|
| PD1 | **Hero Split (60/40)** | Lines 78–213 | Left 60%: full-bleed Ken Burns animated image with gallery dot navigation. Right 40%: product dossier panel on `#f4e9e2` background — title, category tag, design intent description, "Best Use" pills, design philosophy quote card, CTA "Request a Consultation" → `/contact-us`. |
| PD2 | **Gallery Strip** | Lines 215–242 | 3-column grid of all product gallery images. Click to change hero image. |
| PD3 | **Related Products** | Lines 244–269 | "Continue Exploring" section with 3 related product cards on blush background. |

---

## 6. GALLERY PAGE (`/our-gallery`)

**Page File:** `src/pages/Gallery.jsx`  
**Lines:** 47 | **Data Source:** `src/data/gallery.js`

| # | Website Section | Component / Location | Key Responsibilities |
|---|---|---|---|
| GL1 | **Gallery Header** | Lines 19–32 | `BlurText` animated "Our Gallery" heading. Subtitle with "Drag to Explore" instruction. |
| GL2 | **Circular Gallery** | `src/components/react-bits/CircularGallery.jsx` | 3D interactive circular gallery (WebGL/Canvas). Displays 15 gallery images (residential + commercial projects). Data from `src/data/gallery.js`. |

---

## 7. BLOG PAGE (`/blog`)

**Page File:** `src/pages/Blog.jsx`  
**Lines:** 122 | **Data Source:** `src/data/posts.js` (11 blog posts)

| # | Website Section | Component / Location | Key Responsibilities |
|---|---|---|---|
| B1 | **Blog Header** | Lines 9–34 | "The Design Blog" heading. "Insights & Inspiration" label. Subtitle about luxury and innovation. |
| B2 | **Blog Article Rows** | Lines 36–118 | Alternating left/right 50-50 layout (image + text). Each card: category tag, serif title, divider, excerpt, SEO keyword tags (pills), "Read More →" button. Data from `posts.js`. |

---

## 8. BLOG POST PAGE (`/blog/:id`)

**Page File:** `src/pages/BlogPost.jsx`  
**Lines:** 132

| # | Website Section | Component / Location | Key Responsibilities |
|---|---|---|---|
| BP1 | **Hero Image Banner** | Lines 32–59 | Full-width 60vh hero image with gradient overlay. Post title (H1), category badge, date + tag metadata. |
| BP2 | **Article Content** | Lines 66–103 | Lead excerpt with italic serif border-left quote. Full HTML article content rendered via `dangerouslySetInnerHTML`. SEO keyword tags at bottom. Prose typography via `@tailwindcss/typography`. |
| BP3 | **Related Posts** | Lines 105–127 | "More from the Journal" — 3 random related posts in alternating layout cards. |

---

## 9. CONTACT US PAGE (`/contact-us`)

**Page File:** `src/pages/Contact.jsx`  
**Lines:** 197

| # | Website Section | Component / Location | Key Responsibilities |
|---|---|---|---|
| C1 | **Contact Header** | Lines 50–53 | H1: "Get In Touch". Subtitle about 24-hour response time. |
| C2 | **Contact Info Cards** | Lines 56–104 | 3 cards: Visit Our Showroom (address), Call Us (2 phone numbers), Email Us (sveinterior@yahoo.com). Each with rose icon circles and parchment `#f4e9e2` background. |
| C3 | **Contact Form** ⭐ | Lines 106–178 | **Backend Connection:** `VITE_API_URL` environment variable (Line 23). Submits to `${API_BASE}/api/save-contact` via POST. Fields: First Name, Last Name, Email, Message. Success/error status display. White card with CTA submit button. **⚠️ This is the primary lead capture form connecting to the Railway backend.** |
| C4 | **Google Map Embed** | Lines 181–191 | Embedded Google Maps iframe for "SVE INTERIOR, Raja Park, Jaipur". Full-width rounded container. |

---

## 10. ADMIN DASHBOARD (`/admin/leads`)

**Page File:** `src/pages/AdminLeads.jsx`  
**Lines:** 304 | **Access:** Password-protected (password: `SVE2026`)

| # | Website Section | Component / Location | Key Responsibilities |
|---|---|---|---|
| AD1 | **Login Gate** | Lines 69–107 | Password input form. Session-based auth via `sessionStorage`. |
| AD2 | **Stats Bar** | Lines 139–170 | 4 metric cards: Total Leads, Unique Emails, With Messages, Latest Lead date. |
| AD3 | **Leads Table** | Lines 179–236 | Sortable table: #, Name, Email (with copy button), Message Preview, Date. Click row → detail modal. Fetches from `${API_BASE}/api/leads`. |
| AD4 | **Lead Detail Modal** | Lines 239–300 | Full lead details. "Reply via Email" mailto link. |

---

## 11. BACKEND & INTEGRATION MAPPING

| Component | File Path | Key Details |
|---|---|---|
| **Express Server** | `backend/server.js` | Runs on port `3001`. CORS configured for localhost:5173 and `.vercel.app`. |
| **API: Save Contact** | `backend/server.js` Line 47 | `POST /api/save-contact` — validates email, inserts into SQLite `submissions` table, triggers auto-response email. |
| **API: Get Leads** | `backend/server.js` Line 107 | `GET /api/leads` — returns all submissions ordered by timestamp DESC. |
| **Auto-Response Email** | `backend/server.js` Lines 76–101 | Nodemailer + Gmail transport. Uses `EMAIL_USER` and `EMAIL_PASS` env vars. SVE signature template mentioning Yash & Nidhi Mamoria. |
| **Database** | `backend/database.js` | SQLite database. Table: `submissions` (id, first_name, last_name, email, message, timestamp). |
| **Frontend API URL** | `Contact.jsx` Line 23 / `AdminLeads.jsx` Line 38 | `import.meta.env.VITE_API_URL` — set in `.env` for Railway backend URL. |

---

## 12. ASSET FOLDER STRUCTURE (`src/assets/`)

| Asset Category | Path | Contents |
|---|---|---|
| **Home Hero Image** | `src/assets/home-page-hero.png` | High-resolution hero background (2.5 MB) |
| **Company Logo** | `src/assets/logo.png` | SVE Interior brand logo |
| **Product Images** | `src/assets/products/` | 33 local `.png` files (3 per product × 11 products) |
| **Client Logos** | `src/assets/companyphotos/` | 21 `.png` files (Radisson, SBI, KIA, Honda, Audi, etc.) |
| **Before/After Photos** | `/public/before-after-before.jpeg`, `/public/before-after-after.jpeg` | Transformation showcase images (served from public folder) |
| **Gallery Photos** | `/public/*.jpg` | Gallery page images (designer-curtains, premium-wooden-flooring, etc.) |
| **Misc Brand Images** | `src/assets/` root | Blinds.jpg, Curtains.jpg, Stretch Ceiling.jpg, wooden flooring.jpg, WhatsApp images |
| **Product Subfolder Photos** | `src/assets/wooden flooring/`, `src/assets/blinds/`, `src/assets/acoustic panel/`, etc. | Additional product-specific photography folders (13 subdirectories) |

---

## 13. STYLE & DESIGN SYSTEM

### Color Variables — Defined in `src/index.css` (Lines 8–27)

| Variable | Hex | Tailwind Alias | Usage |
|---|---|---|---|
| `--bg-primary` | `#f4e9e2` | `bg-primary` | **SVE Signature Parchment** — site-wide default background, product cards, stat boxes |
| `--bg-secondary` | `#ecdccf` | `bg-secondary` | Blog card backgrounds, secondary surfaces |
| `--bg-blush` | `#F1DDDA` | `bg-blush` | **About page background**, Contact/Products/Gallery page backgrounds |
| `--bg-rose` | `#8C5E5A` | `bg-rose` | "Why Choose Us" section dark background, accent circles |
| `--bg-footer` | `#333333` | `bg-footer` | Footer dark background |
| `--text-heading` | **`#5a3e3e`** | `text-heading` | **SVE Burgundy** — all headings, serif text, primary brand color |
| `--text-body` | `#555555` | `text-body` | Body paragraphs, descriptions |
| `--accent-gold` | `#D4AF37` | `text-gold` | Section labels, decorative accents, gold badges |
| `--accent-cta` | `#C08A7A` | `text-cta` / `bg-cta` | Call-to-action buttons, active nav links, hover states |
| `--border-soft` | `#E6D3CF` | `border-soft-border` | Card borders, dividers |

### Parchment Pill Label — Defined in `src/index.css` (Lines 60–84)

```css
.product-label {
    background-color: #f4e9e2 !important;   /* Parchment */
    color: #000000 !important;
    border: 1px solid #000000;
    border-radius: 50px;                     /* Pill shape */
    font-family: 'Playfair Display', serif;
    font-weight: 700;
}
```

### Typography — Defined in `src/index.css` + `tailwind.config.js`

| Font | Usage |
|---|---|
| **Playfair Display** (serif) | All headings (H1–H6), product labels, stat numbers, quotes |
| **Montserrat** (sans-serif) | Body text, navigation labels, buttons, metadata |

### Tailwind Config — `tailwind.config.js`

Maps CSS variables to Tailwind utility classes. Includes backward-compatibility aliases for legacy color names (dusty-rose → blush, warm-mocha → heading, etc.). Uses `@tailwindcss/typography` plugin for blog post prose styling.

---

## 14. SEO & META CONTENT

| File | SEO Elements |
|---|---|
| `index.html` | `<title>SVE Interior</title>`. Base meta viewport tag. |
| `src/pages/Home.jsx` | H1: "A Legacy of Luxury" (via BlurText animation). H2s: "Our Signature Products", "Full-Stack Interiors", "What Our Clients Say". Storytelling copy mentioning: "Founded by Yash & Nidhi Mamoria", "15+ years", "15,000+ projects", "design integrity and honest craftsmanship". |
| `src/pages/About.jsx` | H1: "Complete Interior Solutions in Jaipur" (GEO-optimized). H2s: "Design is Our Passion", "Meet the Founders", "15 Years of Living Art". Content rich with location keywords (Jaipur, Rajasthan, Raja Park). |
| `src/pages/Products.jsx` | H1: "Our Signature Products". |
| `src/pages/Contact.jsx` | H1: "Get In Touch". Full address with locality keywords. |
| `src/pages/Blog.jsx` | H1: "The Design Blog". |
| `src/data/posts.js` | 11 blog posts with SEO keyword `tags` arrays (e.g., "Wooden Flooring Dealer in Jaipur", "Stretch Ceiling Supplier in Jaipur", "Home Furnishing Showroom in Raja Park"). Long-form content with proper H2/H3 hierarchy. |

---

## 15. REACT-BITS UI LIBRARY (`src/components/react-bits/`)

| Component | File | Usage |
|---|---|---|
| `BlurText` | `BlurText.jsx` | Text reveal animation (used in Home hero, Gallery heading) |
| `ShinyText` | `ShinyText.jsx` | Shimmer/shine text effect (used in Home hero badge) |
| `MagneticButton` | `MagneticButton.jsx` | Mouse-follow magnetic hover effect (used on Home CTA) |
| `SpotlightCard` | `SpotlightCard.jsx` | Gold spotlight hover effect on cards (used in WhyChooseUs) |
| `CircularGallery` | `CircularGallery.jsx` + `.css` | 3D WebGL circular gallery (used on Gallery page) |

---

## 16. DATA FILES (`src/data/`)

| File | Records | Used By |
|---|---|---|
| `products.js` | 11 products | Home.jsx, Products.jsx, ProductDetail.jsx |
| `gallery.js` | 15 gallery images | Gallery.jsx |
| `posts.js` | 11 blog posts | Blog.jsx, BlogPost.jsx |

---

## 17. ROUTING MAP (`src/App.jsx`)

| Route | Page Component | Description |
|---|---|---|
| `/` | `Home` | Home page |
| `/about-us` | `About` | About us page |
| `/our-products` | `Products` | Products listing |
| `/collections/:id` | `ProductDetail` | Individual product page |
| `/product/:id` | `ProductDetail` | Alternate product route |
| `/our-gallery` | `Gallery` | Gallery page |
| `/contact-us` | `Contact` | Contact + form page |
| `/blog` | `Blog` | Blog index |
| `/blog/:id` | `BlogPost` | Individual blog post |
| `/admin/leads` | `AdminLeads` | Password-protected admin dashboard |

---

> **Note:** Browser-based visual verification was attempted but could not complete due to an environment limitation (Playwright not available). This mapping is produced from a **complete code audit** of every file in `src/components/`, `src/pages/`, `src/data/`, `src/assets/`, `src/index.css`, `tailwind.config.js`, `index.html`, and `backend/server.js`. Every section, import, image reference, color value, and API endpoint has been verified against the source code.
