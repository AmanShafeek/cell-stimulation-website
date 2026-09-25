# Cell Stimulation — Official Website & App Store Documentation

Welcome to the official public web repository for **Cell Stimulation**, a personalized wellness coaching and member support platform.

This website is designed for production deployment on **GitHub Pages** (or any static web host) and provides the official **Privacy Policy** and **Support** pages required for **Apple App Store** submission.

---

## 🌿 Brand Overview

- **Name:** Cell Stimulation
- **Category:** Personalized wellness coaching and member support platform
- **Positioning:** A private digital platform connecting members with their wellness coaching team to follow personalized plans, complete daily check-ins, track goals, journal, and communicate directly with their coaches.
- **Tone:** Calm, Warm, Professional, Trustworthy, Human, Premium, Simple, Privacy-Conscious.

---

## 📁 Project Structure

```text
cell-stimulation-website/
├── index.html                   # Home Landing Page
├── about/
│   └── index.html               # About Page (Mission, Members & Coaches)
├── support/
│   └── index.html               # Apple App Store Support Page (FAQ, Contact)
├── privacy-policy/
│   └── index.html               # Apple App Store Privacy Policy (20 Sections)
├── terms/
│   └── index.html               # Terms of Use
├── 404.html                     # Custom 404 Not Found Page
├── .nojekyll                    # Disables Jekyll processing on GitHub Pages
├── robots.txt                   # Search Engine Index Directives
├── assets/
│   ├── css/
│   │   └── main.css             # Unified Design System & Typography
│   ├── js/
│   │   └── main.js              # Interactivity, Mobile Nav, Email Builder
│   └── images/
│       ├── favicon.svg          # Botanical Cell Mark Favicon
│       └── apple-badge.svg      # Apple App Store Download Badge
└── README.md                    # Setup & Deployment Guide
```

---

## 🚀 GitHub Pages Deployment Guide

This project is built using pure, standard, framework-free semantic HTML5, modern CSS, and Vanilla JavaScript. It requires **no build step, no npm install, and no compilation**.

### Option A: Deploying from a GitHub Repository

1. **Create a GitHub repository** (e.g., `cell-stimulation-website` or `cell-stimulation`).
2. **Push the files** from this folder to your repository `main` (or `master`) branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Cell Stimulation website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/cell-stimulation-website.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment**:
     - Source: **Deploy from a branch**
     - Branch: **main** / folder: **/ (root)**
   - Click **Save**.
4. Within 1–2 minutes, your site will be live at:
   - **Home:** `https://YOUR-USERNAME.github.io/cell-stimulation-website/`
   - **Support URL:** `https://YOUR-USERNAME.github.io/cell-stimulation-website/support/`
   - **Privacy Policy URL:** `https://YOUR-USERNAME.github.io/cell-stimulation-website/privacy-policy/`
   - **About:** `https://YOUR-USERNAME.github.io/cell-stimulation-website/about/`
   - **Terms:** `https://YOUR-USERNAME.github.io/cell-stimulation-website/terms/`

### Option B: Custom Domain (e.g., `https://cellstimulation.com`)

1. Add your custom domain under **Settings > Pages > Custom domain**.
2. Add a `CNAME` record in your DNS provider pointing to `YOUR-USERNAME.github.io`.
3. Check **Enforce HTTPS**.
4. The URLs will map directly to:
   - Support: `https://cellstimulation.com/support/`
   - Privacy Policy: `https://cellstimulation.com/privacy-policy/`

---

## 🍎 Apple App Store Submission URLs

When filling in your app information in **App Store Connect**:

| App Store Connect Field | Target URL |
| :--- | :--- |
| **Support URL** *(Required)* | `https://YOUR-USERNAME.github.io/cell-stimulation-website/support/` |
| **Privacy Policy URL** *(Required)* | `https://YOUR-USERNAME.github.io/cell-stimulation-website/privacy-policy/` |
| **Marketing URL** *(Optional)* | `https://YOUR-USERNAME.github.io/cell-stimulation-website/` |

---

## ⚙️ Configuration & Placeholders

All global settings and placeholders are centralized in [`assets/js/main.js`](assets/js/main.js):

```javascript
const APP_CONFIG = {
  appName: 'Cell Stimulation',
  supportEmail: 'support@cellstimulation.com', // Replace with your support inbox
  appStoreUrl: '#app-download',               // Replace with live App Store URL when published
  copyrightYear: 2026
};
```

### Placeholders in HTML files:
- `support@cellstimulation.com` or `[SUPPORT EMAIL]`
- `[COMPANY NAME]` (in `privacy-policy/index.html` and `terms/index.html`)
- `[LEGAL ADDRESS]` (in `privacy-policy/index.html` and `terms/index.html`)

---

## 🛡️ Privacy & Compliance Highlights

- **Zero Third-Party Trackers:** No Google Analytics, Facebook Pixel, or tracking cookies are included by default.
- **No Claims of Diagnosis/Treatment:** Complies with healthcare regulations by focusing strictly on wellness coaching, personal lifestyle awareness, and coach connection.
- **Apple Guidelines Compliant:** Includes explicit account deletion instructions and contact points.
- **Fast & Responsive:** Designed to load in under 1 second on mobile and desktop devices.
