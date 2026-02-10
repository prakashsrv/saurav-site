# sauravprakash-site-v2 Static Site

This is a static personal site for Saurav Prakash showcasing live projects, online presence, and contact details.

## Deployment Instructions

1. **Unzip** the contents of `sauravprakash-site-v2.zip` (or this folder) into your web server's document root.
   - Example: `/var/www/html/` or `public_html/` if using shared hosting.
2. **Upload Images**
   - Images are currently **placeholders** (e.g., `images/geoone1.png`, `images/twiliobot.png`, `images/pdfmapper.png`, `images/github.svg`, `images/linkedin.svg`, `images/email.svg`).
   - Place your actual images in the `/images/` folder, keeping the same filenames. Update `index.html` if you want to change image paths or add alt text.
3. **Verify Site**
   - Open `index.html` in a browser to verify layout, links, and mobile/tablet responsiveness.
   - Contact form is **static**; to enable submissions, connect it to a form backend (e.g. Formspree, Netlify Forms, or your own API).
4. **Customization**
   - Edit `index.html`, `style.css`, and `script.js` to customize for your needs.

## Features
- Responsive layout with CSS media queries
- Project cards with hover & tap effects
- Smooth scrolling navigation
- Live application/project showcase
- Links to GitHub, LinkedIn, Email
- Clean, modern look

## Note
- Add or replace images in `images/` before deploying for best results.
- The contact form does not send real messages on its own.
