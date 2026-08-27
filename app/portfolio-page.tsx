'use client';

export default function PortfolioPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Adewale Afolabi Adeniyi - DevOps & Cloud Infrastructure Engineer">
        <title>Adewale Afolabi Adeniyi | DevOps Engineer</title>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body.light-mode {
            background-color: #ffffff;
            color: #1a1a1a;
        }

        body.dark-mode {
            background-color: #0a0a0a;
            color: #e5e7eb;
        }

        body {
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
            transition: background-color 0.3s ease, color 0.3s ease;
            background-color: #0a0a0a;
            color: #e5e7eb;
        }

        /* ============================================
           THEME TOGGLE
           ============================================ */
        .theme-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: none;
            border: 2px solid #1a1a1a;
            color: #1a1a1a;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            transition: all 0.3s ease;
        }

        body.dark-mode .theme-toggle {
            border-color: #ffffff;
            color: #ffffff;
        }

        .theme-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        }

        body.dark-mode .theme-toggle:hover {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
        }

        /* ============================================
           NAVIGATION
           ============================================ */
        nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            padding: 20px 40px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            z-index: 999;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e5e7eb;
        }

        body.dark-mode nav {
            background: rgba(10, 10, 10, 0.95);
            border-bottom-color: #333;
        }

        nav .logo {
            font-size: 20px;
            font-weight: 700;
            color: #1a1a1a;
        }

        body.dark-mode nav .logo {
            color: #ffffff;
        }

        nav ul {
            display: flex;
            gap: 30px;
            list-style: none;
        }

        nav a {
            text-decoration: none;
            color: #1a1a1a;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        body.dark-mode nav a {
            color: #e5e7eb;
        }

        nav a:hover, nav a.active {
            color: #000;
        }

        body.dark-mode nav a:hover, body.dark-mode nav a.active {
            color: #ffffff;
        }

        @media (max-width: 768px) {
            nav {
                padding: 15px 20px;
            }

            nav ul {
                gap: 15px;
                font-size: 14px;
            }
        }

        /* ============================================
           HERO SECTION
           ============================================ */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 120px 40px 60px;
            background: #ffffff;
        }

        body.dark-mode .hero {
            background: #0a0a0a;
        }

        .hero-content {
            max-width: 1200px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }

        .hero-text h1 {
            font-size: 56px;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 20px;
            color: #1a1a1a;
        }

        body.dark-mode .hero-text h1 {
            color: #ffffff;
        }

        .hero-text p {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 30px;
            color: #666;
        }

        body.dark-mode .hero-text p {
            color: #bfbfbf;
        }

        .cta-buttons {
            display: flex;
            gap: 15px;
            margin-bottom: 40px;
            flex-wrap: wrap;
        }

        .btn {
            padding: 12px 28px;
            border: 2px solid #1a1a1a;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            background: #1a1a1a;
            color: #ffffff;
            font-size: 14px;
        }

        body.dark-mode .btn {
            border-color: #ffffff;
            background: #ffffff;
            color: #0a0a0a;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        body.dark-mode .btn:hover {
            box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
        }

        .btn-outline {
            background: transparent;
            color: #1a1a1a;
        }

        body.dark-mode .btn-outline {
            color: #1a1a1a;
        }

        .hero-image {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .hero-image img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        @media (max-width: 1024px) {
            .hero-content {
                grid-template-columns: 1fr;
            }

            .hero-text h1 {
                font-size: 44px;
            }
        }

        @media (max-width: 768px) {
            .hero {
                padding: 100px 20px 40px;
                min-height: auto;
            }

            .hero-text h1 {
                font-size: 32px;
            }

            .cta-buttons {
                flex-direction: column;
            }

            .btn {
                width: 100%;
                text-align: center;
            }
        }

        /* ============================================
           PROFESSIONAL PHOTO SECTION
           ============================================ */
        .photo-section {
            padding: 80px 40px;
            background: #f5f5f5;
        }

        body.dark-mode .photo-section {
            background: #111;
        }

        .photo-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }

        .photo-box {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .photo-circle {
            width: 320px;
            height: 320px;
            border-radius: 50%;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
            flex-shrink: 0;
        }

        body.dark-mode .photo-circle {
            box-shadow: 0 20px 50px rgba(255, 255, 255, 0.1);
        }

        .photo-box img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
            display: block;
        }

        .photo-text h2 {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 20px;
            color: #1a1a1a;
        }

        body.dark-mode .photo-text h2 {
            color: #ffffff;
        }

        .photo-text p {
            font-size: 16px;
            line-height: 1.8;
            color: #666;
            margin-bottom: 15px;
        }

        body.dark-mode .photo-text p {
            color: #bfbfbf;
        }

        .photo-text h3 {
            font-size: 18px;
            font-weight: 600;
            margin-top: 25px;
            margin-bottom: 12px;
            color: #1a1a1a;
        }

        body.dark-mode .photo-text h3 {
            color: #ffffff;
        }

        .stats-divider {
            margin-top: 30px;
            padding-top: 25px;
            border-top: 1px solid #e5e7eb;
        }

        body.dark-mode .stats-divider {
            border-top-color: #333;
        }

        .stats {
            display: flex;
            gap: 30px;
            margin-top: 25px;
            flex-wrap: wrap;
        }

        .stat-item {
            flex: 1;
            min-width: 120px;
        }

        .stat-number {
            font-size: 24px;
            font-weight: 700;
            color: #1a1a1a;
        }

        body.dark-mode .stat-number {
            color: #ffffff;
        }

        .stat-label {
            font-size: 13px;
            color: #999;
            margin-top: 5px;
        }

        @media (max-width: 1024px) {
            .photo-container {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .photo-section {
                padding: 60px 20px;
            }

            .photo-text h2 {
                font-size: 24px;
            }
        }

        /* ============================================
           AVATAR SECTION (Why I Love What I Do)
           ============================================ */
        .avatar-section {
            padding: 80px 40px;
            background: #ffffff;
        }

        body.dark-mode .avatar-section {
            background: #1a1a1a;
        }

        .avatar-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }

        .avatar-text h2 {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 20px;
            color: #1a1a1a;
        }

        body.dark-mode .avatar-text h2 {
            color: #ffffff;
        }

        .avatar-text p {
            font-size: 16px;
            line-height: 1.6;
            color: #666;
            margin-bottom: 16px;
        }

        body.dark-mode .avatar-text p {
            color: #bfbfbf;
        }

        .avatar-image {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        @media (max-width: 768px) {
            .avatar-container {
                grid-template-columns: 1fr;
                gap: 40px;
            }

            .avatar-section {
                padding: 60px 20px;
            }
        }

        /* ============================================
           ABOUT SECTION
           ============================================ */
        .about {
            padding: 80px 40px;
            background: #ffffff;
        }

        body.dark-mode .about {
            background: #0a0a0a;
        }

        .about-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            font-size: 40px;
            font-weight: 800;
            margin-bottom: 40px;
            text-align: center;
            color: #1a1a1a;
        }

        body.dark-mode .section-title {
            color: #ffffff;
        }

        .about-text {
            font-size: 16px;
            line-height: 1.8;
            max-width: 900px;
            margin: 0 auto;
            color: #666;
        }

        body.dark-mode .about-text {
            color: #bfbfbf;
        }

        /* ============================================
           SKILLS SECTION
           ============================================ */
        .skills {
            padding: 80px 40px;
            background: #f5f5f5;
        }

        body.dark-mode .skills {
            background: #111;
        }

        .skills-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .skill-category {
            margin-bottom: 50px;
        }

        .skill-category-title {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 20px;
            color: #1a1a1a;
        }

        body.dark-mode .skill-category-title {
            color: #ffffff;
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .skill-tag {
            padding: 8px 16px;
            background: #1a1a1a;
            color: #ffffff;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;
        }

        body.dark-mode .skill-tag {
            background: #ffffff;
            color: #0a0a0a;
        }

        @media (max-width: 768px) {
            .skills {
                padding: 60px 20px;
            }

            .skill-category-title {
                font-size: 18px;
            }
        }

        /* ============================================
           PROJECTS SECTION
           ============================================ */
        .projects {
            padding: 80px 40px;
            background: #ffffff;
        }

        body.dark-mode .projects {
            background: #0a0a0a;
        }

        .projects-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }

        .project-card {
            background: #f5f5f5;
            padding: 30px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            transition: all 0.3s ease;
        }

        body.dark-mode .project-card {
            background: #111;
            border-color: #333;
        }

        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        body.dark-mode .project-card:hover {
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
        }

        .project-card h3 {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 12px;
            color: #1a1a1a;
        }

        body.dark-mode .project-card h3 {
            color: #ffffff;
        }

        .project-card p {
            font-size: 14px;
            line-height: 1.6;
            color: #666;
            margin-bottom: 15px;
        }

        body.dark-mode .project-card p {
            color: #bfbfbf;
        }

        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .project-tag {
            display: inline-block;
            padding: 4px 12px;
            background: #1a1a1a;
            color: #ffffff;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
        }

        body.dark-mode .project-tag {
            background: #ffffff;
            color: #0a0a0a;
        }

        @media (max-width: 768px) {
            .projects {
                padding: 60px 20px;
            }

            .project-grid {
                grid-template-columns: 1fr;
            }
        }

        /* ============================================
           EXPERIENCE SECTION
           ============================================ */
        .experience {
            padding: 80px 40px;
            background: #f5f5f5;
        }

        body.dark-mode .experience {
            background: #111;
        }

        .experience-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .experience-item {
            margin-bottom: 50px;
            padding-bottom: 30px;
            border-bottom: 1px solid #e5e7eb;
        }

        body.dark-mode .experience-item {
            border-bottom-color: #333;
        }

        .experience-item:last-child {
            border-bottom: none;
        }

        .exp-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 10px;
            flex-wrap: wrap;
            gap: 10px;
        }

        .exp-title {
            font-size: 18px;
            font-weight: 700;
            color: #1a1a1a;
        }

        body.dark-mode .exp-title {
            color: #ffffff;
        }

        .exp-date {
            font-size: 14px;
            color: #999;
        }

        .exp-company {
            font-size: 14px;
            color: #666;
            margin-bottom: 12px;
        }

        body.dark-mode .exp-company {
            color: #bfbfbf;
        }

        .exp-description {
            font-size: 14px;
            line-height: 1.7;
            color: #666;
            margin-left: 20px;
        }

        body.dark-mode .exp-description {
            color: #bfbfbf;
        }

        @media (max-width: 768px) {
            .experience {
                padding: 60px 20px;
            }

            .exp-header {
                flex-direction: column;
            }
        }

        /* ============================================
           EDUCATION SECTION
           ============================================ */
        .education {
            padding: 80px 40px;
            background: #ffffff;
        }

        body.dark-mode .education {
            background: #0a0a0a;
        }

        .education-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .education-item {
            margin-bottom: 40px;
            padding: 30px;
            background: #f5f5f5;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
        }

        body.dark-mode .education-item {
            background: #111;
            border-color: #333;
        }

        .education-item h3 {
            font-size: 18px;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 8px;
        }

        body.dark-mode .education-item h3 {
            color: #ffffff;
        }

        .education-item p {
            font-size: 14px;
            color: #666;
            margin-bottom: 8px;
        }

        body.dark-mode .education-item p {
            color: #bfbfbf;
        }

        /* ============================================
           COMMUNITIES SECTION
           ============================================ */
        .communities {
            padding: 80px 40px;
            background: #f5f5f5;
        }

        body.dark-mode .communities {
            background: #111;
        }

        .communities-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .community-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 40px;
        }

        .community-item {
            padding: 20px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            text-align: center;
        }

        body.dark-mode .community-item {
            background: #0a0a0a;
            border-color: #333;
        }

        .community-item h4 {
            font-size: 16px;
            font-weight: 700;
            color: #1a1a1a;
        }

        body.dark-mode .community-item h4 {
            color: #ffffff;
        }

        .community-item p {
            font-size: 13px;
            color: #666;
            margin-top: 8px;
        }

        body.dark-mode .community-item p {
            color: #bfbfbf;
        }

        /* ============================================
           CONTACT SECTION
           ============================================ */
        .contact {
            padding: 80px 40px;
            background: #1a1a1a;
            color: #ffffff;
            text-align: center;
        }

        body.dark-mode .contact {
            background: #ffffff;
            color: #1a1a1a;
        }

        .contact-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .contact h2 {
            font-size: 40px;
            font-weight: 800;
            margin-bottom: 20px;
        }

        .contact p {
            font-size: 16px;
            margin-bottom: 30px;
            opacity: 0.8;
        }

        .contact-links {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 40px;
        }

        .contact-link {
            padding: 12px 24px;
            background: #ffffff;
            color: #1a1a1a;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 2px solid #ffffff;
        }

        body.dark-mode .contact-link {
            background: #1a1a1a;
            color: #ffffff;
            border-color: #1a1a1a;
        }

        .contact-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
        }

        body.dark-mode .contact-link:hover {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .copy-btn {
            cursor: pointer;
            background: transparent;
            border: 2px solid #ffffff;
            padding: 12px 24px;
            color: #ffffff;
            border-radius: 4px;
            font-weight: 600;
            font-size: 16px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
        }

        body.dark-mode .copy-btn {
            border-color: #ffffff;
            color: #ffffff;
        }

        .copy-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
        }

        body.dark-mode .copy-btn:hover {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .toast {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #10b981;
            color: #ffffff;
            padding: 16px 24px;
            border-radius: 4px;
            font-weight: 600;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease, slideOut 0.3s ease 2.7s;
            z-index: 2000;
        }

        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }

        /* ============================================
           FOOTER
           ============================================ */
        footer {
            padding: 30px 40px;
            text-align: center;
            background: #0a0a0a;
            color: #999;
            border-top: 1px solid #333;
        }

        body.light-mode footer {
            background: #f5f5f5;
            color: #666;
            border-top-color: #e5e7eb;
        }

        @media (max-width: 768px) {
            .section-title {
                font-size: 28px;
            }

            footer {
                font-size: 12px;
            }
        }

        /* ============================================
           ANIMATIONS
           ============================================ */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in {
            animation: fadeIn 0.6s ease-out;
        }

        </style>
    </head>
    <body class="dark-mode">
        <!-- Theme Toggle -->
        <button class="theme-toggle" id="themeToggle" title="Toggle dark/light mode">
            <i class="fas fa-moon"></i>
        </button>

        <!-- Navigation -->
        <nav>
            <div class="logo">AA</div>
            <ul>
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#experience" class="nav-link">Experience</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </nav>

        <!-- Hero Section -->
        <section class="hero" id="home">
            <div class="hero-content">
                <div class="hero-text">
                    <h1>High-Performance DevOps & Cloud Infrastructure Engineer</h1>
                    <p>Building scalable, secure, and reliable cloud-native systems. Selected as a top 2.8% fellow from 26,000+ applicants at Learn2Earn.</p>
                    <div class="cta-buttons">
                        <a href="#projects" class="btn">View Projects</a>
                        <a href="#contact" class="btn btn-outline">Get in Touch</a>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/E39FA9D3-A7FE-4594-8A0A-2C1B0A9D3030-udXJMA2DLetk5vCRYMI03Is8AL5YnQ.png" alt="Adewale Afolabi Adeniyi">
                </div>
            </div>
        </section>

        <!-- Professional Photo Section -->
        <section class="photo-section">
            <div class="photo-container">
                <div class="photo-box">
                    <div class="photo-circle">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202026-07-31%2012-27-48-pNJF5qSmfd0hMK7Qm6hnjLqnfizZOq.png" alt="Adewale Afolabi Adeniyi - Professional">
                    </div>
                </div>
                <div class="photo-text">
                    <h2>About Me</h2>
                    <p>I'm Adewale Afolabi Adeniyi, a <strong>High-Performance Engineering Fellow</strong> selected from the top 2.8% of 26,000+ applicants, specializing in DevOps, cloud infrastructure, and scalable systems architecture.</p>
                    
                    <h3>What I Do</h3>
                    <p>Currently contributing to production-grade systems at <strong>Learn2Earn</strong>, where I focus on building robust CI/CD pipelines, automating infrastructure with IaC, implementing secure backend services, and optimizing system reliability at scale.</p>
                    
                    <div class="stats-divider"></div>
                    <div class="stats">
                        <div class="stat-item">
                            <div class="stat-number">6+</div>
                            <div class="stat-label">Projects Completed</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">3+</div>
                            <div class="stat-label">Years Experience</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">2.8%</div>
                            <div class="stat-label">Top Percentile</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="about" id="about">
            <div class="about-container">
                <h2 class="section-title">Professional Summary</h2>
                <p class="about-text">
                    I'm a High-Performance Engineering Fellow selected from the top 2.8% of 26,000+ applicants for an elite residency founded by industry pioneers (Andela/Flutterwave). 
                    With deep expertise in DevOps, Cloud Infrastructure, and Platform Engineering, I specialize in architecting scalable cloud-native systems, building robust CI/CD pipelines, 
                    automating infrastructure with IaC, and implementing secure backend services. My proven ability to translate complex technical requirements into production-ready systems 
                    spans Go, Python, AWS, Terraform, and modern DevOps practices. I'm passionate about system reliability, cloud systems, and building infrastructure that scales.
                </p>
            </div>
        </section>

        <!-- Sitting Avatar Section -->
        <section class="avatar-section">
            <div class="avatar-container">
                <div class="avatar-text">
                    <h2>Why I Love What I Do</h2>
                    <p>Building infrastructure that scales and serves millions is not just my job—it's my passion. I thrive on solving complex DevOps challenges, optimizing CI/CD pipelines, and creating systems that developers trust and rely on.</p>
                    <p>Every challenge is an opportunity to learn, improve, and push the boundaries of what's possible in cloud infrastructure and platform engineering. I'm committed to excellence and continuous improvement in everything I build.</p>
                </div>
                <div class="avatar-image">
                    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0AFC655A-B267-4E69-8703-48317E0449A4-m3ZxRFCygJQ0TUAsvKnJ4GjDb21PGe.png" alt="Adewale Avatar" style="max-width: 300px; height: auto; border-radius: 12px;">
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section class="skills" id="skills">
            <div class="skills-container">
                <h2 class="section-title">Technical Skills</h2>
                
                <div class="skill-category">
                    <h3 class="skill-category-title">Programming Languages</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Golang</span>
                        <span class="skill-tag">Python</span>
                        <span class="skill-tag">Rust</span>
                        <span class="skill-tag">Java</span>
                        <span class="skill-tag">PowerShell</span>
                        <span class="skill-tag">Bash</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h3 class="skill-category-title">Cloud & Infrastructure</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">AWS (EC2, S3, RDS, IAM, VPC, ECS, EKS)</span>
                        <span class="skill-tag">Azure (Basic)</span>
                        <span class="skill-tag">GCP (Basic)</span>
                        <span class="skill-tag">Terraform</span>
                        <span class="skill-tag">Ansible</span>
                        <span class="skill-tag">Docker</span>
                        <span class="skill-tag">Kubernetes</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h3 class="skill-category-title">DevOps & Tools</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">CI/CD (GitHub Actions)</span>
                        <span class="skill-tag">Git/GitHub</span>
                        <span class="skill-tag">Linux Administration</span>
                        <span class="skill-tag">Networking (TCP/IP, DNS, SSL/TLS)</span>
                        <span class="skill-tag">SonarQube</span>
                        <span class="skill-tag">Trivy</span>
                        <span class="skill-tag">Prometheus & Grafana</span>
                        <span class="skill-tag">Postman</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h3 class="skill-category-title">Databases</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">PostgreSQL</span>
                        <span class="skill-tag">MySQL</span>
                        <span class="skill-tag">SQLite</span>
                        <span class="skill-tag">DynamoDB</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h3 class="skill-category-title">Core Competencies</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Infrastructure as Code</span>
                        <span class="skill-tag">Containerization</span>
                        <span class="skill-tag">Microservices</span>
                        <span class="skill-tag">Blue-Green Deployment</span>
                        <span class="skill-tag">Canary Deployment</span>
                        <span class="skill-tag">GitOps</span>
                        <span class="skill-tag">Secrets Management</span>
                        <span class="skill-tag">High Availability</span>
                        <span class="skill-tag">Scalability & Reliability</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section class="projects" id="projects">
            <div class="projects-container">
                <h2 class="section-title">Featured Projects</h2>
                <div class="project-grid">
                    <div class="project-card">
                        <h3>Platform Infrastructure & Security</h3>
                        <p>Implemented encrypted S3 storage with automated virus scanning and MIME validation. Hardened backend services against path-traversal attacks and cross-tenant data access vulnerabilities.</p>
                        <div class="project-tags">
                            <span class="project-tag">AWS S3</span>
                            <span class="project-tag">Security</span>
                            <span class="project-tag">Infrastructure</span>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>Local Node Setup & CI/CD</h3>
                        <p>Automated developer environment setup with comprehensive CI/CD workflows using GitHub Actions. Authored test suites maintaining 95%+ code coverage on infrastructure-critical logic.</p>
                        <div class="project-tags">
                            <span class="project-tag">GitHub Actions</span>
                            <span class="project-tag">CI/CD</span>
                            <span class="project-tag">Testing</span>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>Cloud Cost Observability & Billing</h3>
                        <p>Architected multi-source cost aggregation pipeline normalizing telemetry from cloud providers. Engineered pluggable alerting engine with threshold-based evaluation and webhook notifications.</p>
                        <div class="project-tags">
                            <span class="project-tag">AWS</span>
                            <span class="project-tag">Cost Management</span>
                            <span class="project-tag">Python</span>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>Infrastructure as Code (IaC)</h3>
                        <p>Developed modular Terraform configurations for EC2 and S3 deployment. Architecting highly available 3-Tier AWS Network with VPC, RDS, and ALB for enterprise production infrastructure.</p>
                        <div class="project-tags">
                            <span class="project-tag">Terraform</span>
                            <span class="project-tag">AWS</span>
                            <span class="project-tag">IaC</span>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>LLMOps & AI Support Systems</h3>
                        <p>Building scalable LLMOps pipeline for automated technical support. Containerized architecture using Docker with Kubernetes orchestration, integrating monitoring patterns for high availability.</p>
                        <div class="project-tags">
                            <span class="project-tag">Docker</span>
                            <span class="project-tag">Kubernetes</span>
                            <span class="project-tag">Python</span>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>Industrial ERP Optimization</h3>
                        <p>Architected mechanical ERP solution optimizing plant job planning, part tracking, and assembly performance. Key selection criterion for competitive AI residency (Top 2.7% from 18,000+ applicants).</p>
                        <div class="project-tags">
                            <span class="project-tag">ERP</span>
                            <span class="project-tag">Python</span>
                            <span class="project-tag">Optimization</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section class="experience" id="experience">
            <div class="experience-container">
                <h2 class="section-title">Professional Experience</h2>

                <div class="experience-item">
                    <div class="exp-header">
                        <h3 class="exp-title">Software Engineering Fellow</h3>
                        <span class="exp-date">Feb 2026 – Present</span>
                    </div>
                    <p class="exp-company">Learn2Earn | Lagos, Nigeria</p>
                    <ul class="exp-description">
                        <li>Selected via competitive intake: Top 2.8% (750 out of 26,000+ applicants)</li>
                        <li>Engineering scalable solutions using Go, Rust, and JavaScript</li>
                        <li>Implementing DevOps and Cloud infrastructure with Linux, Docker, and AWS</li>
                        <li>Building automated deployment pipelines and system reliability</li>
                        <li>Contributing to production-grade open-source codebases</li>
                    </ul>
                </div>

                <div class="experience-item">
                    <div class="exp-header">
                        <h3 class="exp-title">AI Engineering Intern</h3>
                        <span class="exp-date">Nov 2025 – Jan 2026</span>
                    </div>
                    <p class="exp-company">Incubator Hub | Lagos, Nigeria</p>
                    <ul class="exp-description">
                        <li>Selected for competitive AI residency: Top 2.7% (500 from 18,000+ applicants)</li>
                        <li>Architected Industrial ERP solution for plant optimization</li>
                        <li>GenAI & LLM specialization with production-ready implementations</li>
                        <li>Full-stack AI integration and performance optimization</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Education Section -->
        <section class="education" id="education">
            <div class="education-container">
                <h2 class="section-title">Education</h2>

                <div class="education-item">
                    <h3>Bachelor of Mechanical Engineering (First Class Honors)</h3>
                    <p><strong>Lagos State University, Ojo</strong> | Feb 2018 - Feb 2024</p>
                    <p>CGPA: 4.53/5.00 | Class Rank: 3/75</p>
                    <p><strong>Relevant Coursework:</strong> Computer Science, Programming (Python), Technical Communications, Project Management, Operational Research</p>
                </div>
            </div>
        </section>

        <!-- Communities Section -->
        <section class="communities" id="communities">
            <div class="communities-container">
                <h2 class="section-title">Professional Communities</h2>
                <div class="community-list">
                    <div class="community-item">
                        <h4>NVIDIA Developer Community</h4>
                        <p>Active member engaging with high-performance computing and AI/LLM deployment pipelines</p>
                    </div>
                    <div class="community-item">
                        <h4>IBM Developers Community</h4>
                        <p>Enterprise cloud architecture and hybrid-cloud solutions</p>
                    </div>
                    <div class="community-item">
                        <h4>Google Developer Groups (GDG)</h4>
                        <p>Cloud Platform and modern infrastructure patterns</p>
                    </div>
                    <div class="community-item">
                        <h4>Postman Community</h4>
                        <p>API testing, documentation, and automation workflows</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="contact" id="contact">
            <div class="contact-container">
                <h2>Let's Connect</h2>
                <p>Open to exciting DevOps, Cloud Infrastructure, and Platform Engineering opportunities</p>
                <div class="contact-links">
                    <button class="contact-link copy-btn" onclick="copyToClipboard('afolabiwale262@gmail.com', event)">
                        <i class="fas fa-envelope"></i> Email
                    </button>
                    <button class="contact-link copy-btn" onclick="copyToClipboard('07015537628', event)">
                        <i class="fas fa-phone"></i> Phone
                    </button>
                    <a href="https://github.com/HademiData" target="_blank" class="contact-link">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/afadewale/" target="_blank" class="contact-link">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://medium.com/@Hademi_loyin" target="_blank" class="contact-link">
                        <i class="fab fa-medium"></i> Medium
                    </a>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <p>&copy; 2024 Adewale Afolabi Adeniyi | DevOps & Cloud Infrastructure Engineer. Built for scale, designed for excellence.</p>
        </footer>

        <script>
        // Theme Toggle Function
        function updateThemeIcon() {
            const themeToggle = document.getElementById('themeToggle');
            const body = document.body;
            const icon = themeToggle.querySelector('i');
            if (body.classList.contains('dark-mode')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }

        // Initialize theme on page load
        document.addEventListener('DOMContentLoaded', () => {
            const themeToggle = document.getElementById('themeToggle');
            const body = document.body;

            // Check for saved theme preference or default to dark mode
            const savedTheme = localStorage.getItem('theme') || 'dark-mode';
            body.className = savedTheme;
            updateThemeIcon();

            // Add click listener
            themeToggle.addEventListener('click', () => {
                if (body.classList.contains('dark-mode')) {
                    body.classList.remove('dark-mode');
                    body.classList.add('light-mode');
                    localStorage.setItem('theme', 'light-mode');
                } else {
                    body.classList.remove('light-mode');
                    body.classList.add('dark-mode');
                    localStorage.setItem('theme', 'dark-mode');
                }
                updateThemeIcon();
            });
        });

        // Navigation active link
        const navLinks = document.querySelectorAll('.nav-link');
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === \`#\${current}\`) {
                    link.classList.add('active');
                }
            });
        });

        // Smooth scroll for nav links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Copy to Clipboard Function
        function copyToClipboard(text, event) {
            event.preventDefault();
            navigator.clipboard.writeText(text).then(() => {
                // Show toast notification
                const toast = document.createElement('div');
                toast.className = 'toast';
                let displayText = text;
                if (text.includes('@')) {
                    displayText = 'Email copied!';
                } else {
                    displayText = 'Phone copied!';
                }
                toast.textContent = displayText;
                document.body.appendChild(toast);
                
                // Remove toast after animation
                setTimeout(() => {
                    toast.remove();
                }, 3000);
            }).catch(() => {
                alert('Failed to copy. Please try again.');
            });
        }

        // Console greeting
        console.log('%c Welcome to Adewale\\'s Portfolio! 👋', 'font-size: 20px; font-weight: bold; color: #ffffff;');
        console.log('%c DevOps | Cloud Infrastructure | Platform Engineering', 'font-size: 14px; color: #e5e7eb;');
        </script>
    </body>
    </html>
    `}} />
  );
}
