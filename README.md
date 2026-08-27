# 🚀 AI & MLOps Professional Portfolio

A modern, fully responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Featuring a sleek dark theme with cyan and emerald neon accents—perfect for AI, Machine Learning, and Infrastructure professionals.

## ✨ Features

### 🎨 Design & UX
- **Dark Modern Theme** with cyan (#06b6d4) and emerald green (#10b981) neon accents
- **Fully Responsive** - Works beautifully on mobile, tablet, and desktop
- **Smooth Animations** - Scroll reveals, hover effects, and floating elements
- **Accessibility First** - Focus states, semantic HTML, ARIA labels
- **Performance Optimized** - Lightweight, vanilla JS (no heavy frameworks)

### 📱 Key Sections

1. **Navigation Header**
   - Fixed position with glassmorphism backdrop
   - Mobile hamburger menu toggle
   - Active link highlighting on scroll
   - Smooth navigation links

2. **Hero Section**
   - Compelling headline: "Bridging Machine Learning & Scale"
   - Professional profile image with floating animation
   - Dual CTA buttons ("View Projects" & "Get in Touch")
   - Social media links (GitHub, LinkedIn)
   - Animated scroll indicator

3. **About Me Section**
   - Professional summary highlighting AI/MLOps expertise
   - Badges for quick skill overview
   - Narrative focus on blending ML, DevOps, and software engineering

4. **Technical Skills Section**
   - **Three Organized Categories:**
     - ML & AI (LangChain, Hugging Face, Gradio, RAG, etc.)
     - Infrastructure (Terraform, AWS, Docker, Kubernetes, etc.)
     - Programming Languages (Python, Go, Java Spring Boot, etc.)
   - Interactive hover effects on skill badges
   - Icon-enhanced section headers

5. **Featured Projects Section**
   - **Flexible Card Layout** - Easily add new projects
   - **Pre-loaded with 3 Examples:**
     1. maintainAI (Python, LangChain, Gradio)
     2. Cloud Infrastructure Automation (Terraform, AWS, Docker)
     3. Secure File Storage Service (Go, REST APIs)
   - Project descriptions, tech stacks, and project links
   - Glassmorphic cards with gradient borders
   - Helper tip for adding new projects

6. **Contact / Footer Section**
   - Three contact methods (Email, GitHub, LinkedIn)
   - Primary CTA button for email outreach
   - Footer with credits

---

## 🛠️ Customization Guide

### 1. **Update Personal Information**

**In `index.html`:**

```html
<!-- Navigation Brand -->
<span class="text-white">YourName</span>
<span class="text-cyan-400">.dev</span>

<!-- Hero Section -->
<h1>Your Custom Headline</h1>
<p>Your professional summary...</p>

<!-- Profile Image -->
<img 
    src="YOUR_IMAGE_URL" 
    alt="Your Name Profile"
>

<!-- Contact Links -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://github.com/your-username">github.com/your-username</a>
<a href="https://linkedin.com/in/your-profile">linkedin.com/in/your-profile</a>
```

### 2. **Modify Skills Section**

Simply update the skill badges in the HTML:

```html
<div class="skill-category">
    <div class="flex items-center gap-3 mb-6">
        <i class="fas fa-brain text-2xl text-cyan-400"></i>
        <h3 class="text-2xl font-bold text-white">Your Skill Category</h3>
    </div>
    <div class="space-y-3">
        <span class="skill-badge">Skill 1</span>
        <span class="skill-badge">Skill 2</span>
        <span class="skill-badge">Skill 3</span>
    </div>
</div>
```

### 3. **Add New Project Cards**

To add a new project, copy this template into the `projectsGrid` container:

```html
<div class="project-card">
    <div class="project-header">
        <i class="fas fa-[icon-name] text-2xl text-cyan-400"></i>
        <h3 class="text-xl font-bold">Your Project Title</h3>
    </div>
    <p class="project-description">
        Your project description goes here. Explain what the project does, 
        the problem it solves, and the impact it had.
    </p>
    <div class="flex gap-2 flex-wrap">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
        <span class="tech-tag">Technology 3</span>
    </div>
    <div class="project-footer">
        <a href="https://your-project-link.com" class="project-link">
            View Project <i class="fas fa-arrow-right ml-2"></i>
        </a>
    </div>
</div>
```

The CSS Grid will automatically handle responsive layout for new cards!

### 4. **Update Colors & Theme**

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-primary: #06b6d4;      /* Change to your brand color */
    --color-secondary: #10b981;    /* Change to your accent */
    --color-dark: #0f172a;
    --color-darker: #020617;
    --color-accent: #f59e0b;
}
```

### 5. **Change Fonts**

Modify the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT_1:wght@400;600;700&family=YOUR_FONT_2:wght@400;500;600&display=swap" rel="stylesheet">
```

Then update the font stacks in `styles.css`:

```css
body {
    font-family: 'Your Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

---

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles & animations
├── script.js           # Interactive JavaScript features
└── README.md           # This file
```

---

## 🎯 JavaScript Features

### 1. **Smooth Scrolling**
- All navigation links smoothly scroll to sections
- Respects navbar height for proper offset

### 2. **Mobile Menu Toggle**
- Hamburger menu for mobile/tablet devices
- Auto-closes when a link is clicked
- Icon animation (bars ↔ times)

### 3. **Active Navigation Highlighting**
- Current section is highlighted in the navbar
- Updates automatically on scroll

### 4. **Scroll-based Animations**
- Intersection Observer for fade-in effects
- Smooth entrance animations as sections come into view

### 5. **Dynamic Greeting**
- Time-based greeting in console (fun Easter egg!)
- Displays in console on page load

### 6. **Bonus Functions** (Ready to use)
- `filterProjectsByTech(tech)` - Filter projects by technology
- `resetProjectFilter()` - Reset project filter
- Performance metrics logging

---

## 🎨 Color Palette Reference

| Token | Hex | Usage |
|-------|-----|-------|
| Primary (Cyan) | #06b6d4 | Buttons, links, accents |
| Secondary (Emerald) | #10b981 | Gradients, secondary accents |
| Dark Background | #0f172a | Main background |
| Darker | #020617 | Near-black sections |
| Accent (Amber) | #f59e0b | Optional highlights |

---

## 🚀 Deployment Options

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify
Simply drag & drop the entire folder to Netlify.

### Self-Hosted
Upload all files to your web server:
- HTML, CSS, JS files
- Ensure all external CDN links are accessible

---

## 📚 Icon Library

This portfolio uses **Font Awesome 6.4.0** for icons. Browse available icons at:
https://fontawesome.com/search

Change icons by updating the `<i class="fas fa-..."></i>` elements.

---

## ✅ Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔧 Customization Tips

### Add Dark Mode Toggle
The JavaScript includes a `initThemeToggle()` function (commented out). Uncomment to add theme switching.

### Add Contact Form
Replace the contact section with a form service like Formspree, Basin, or EmailJS.

### Add Blog Section
Add a new section with blog post cards following the same card pattern.

### Analytics
Add Google Analytics or Vercel Analytics by including tracking code in `<head>`.

---

## 📝 Best Practices

1. **Keep It Updated** - Update projects and skills regularly
2. **Use Real Images** - Replace placeholder with professional headshot
3. **Add Project Links** - Link to GitHub repos or live demos
4. **Optimize Images** - Compress images to reduce load time
5. **Test Responsiveness** - Check on multiple devices/screen sizes
6. **SEO** - Update meta description, title, and add schema markup

---

## 💡 Pro Tips

- The portfolio uses **Tailwind CSS via CDN** for rapid styling
- **Vanilla JS** = no dependencies, fast loading
- **CSS Grid & Flexbox** for perfect responsive layout
- **Intersection Observer** for performant scroll animations
- **Glassmorphism effects** for modern aesthetic

---

## 📧 Need Help?

Review the comments in each file:
- `index.html` - HTML structure & section explanations
- `styles.css` - CSS organization by component
- `script.js` - JavaScript feature documentation

---

## 📄 License

Free to use and modify for your personal portfolio!

---

## 🎉 Ready to Customize?

1. Update your personal info in HTML
2. Add your projects to the projects grid
3. Customize colors in `styles.css` if desired
4. Deploy to Vercel/Netlify
5. Share with the world! 🚀

Happy building! ✨
