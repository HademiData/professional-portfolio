'use client';

export default function PortfolioPage() {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Adewale Afolabi Adeniyi - AI Engineer, Software Engineer and Engineering Graduate">
        <title>Adewale Afolabi Adeniyi | AI Engineer</title>

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

        nav a:hover,
        nav a.active {
            color: #000;
        }

        body.dark-mode nav a:hover,
        body.dark-mode nav a.active {
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
            color: #ffffff;
            background: transparent;
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
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
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
           AVATAR SECTION
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
            line-height: 1.7;
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

        .project-links {
            display: flex;
            gap: 15px;
            margin-bottom: 18px;
            flex-wrap: wrap;
        }

        .project-link {
            font-size: 13px;
            font-weight: 600;
            color: #1a1a1a;
            text-decoration: none;
            border-bottom: 1px solid #1a1a1a;
        }

        body.dark-mode .project-link {
            color: #ffffff;
            border-bottom-color: #ffffff;
        }

        .project-link:hover {
            opacity: 0.65;
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

        .exp-description li {
            margin-bottom: 8px;
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
            <div class="logo">HademiData</div>
            <ul>
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#research" class="nav-link">Research</a></li>
                <li><a href="#experience" class="nav-link">Experience</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </nav>

        <!-- Hero Section -->
        <section class="hero" id="home">
            <div class="hero-content">
                <div class="hero-text">
                    <h1>AI Engineer Building Practical Intelligent Systems</h1>

                    <p>
                        AI-focused software engineer developing intelligent software systems across machine learning, 
                        Generative AI, RAG, backend engineering, and cloud technologies. I apply engineering principles 
                        and software architecture to build reliable, data-driven solutions for complex operational and technical problems.

                    </p>

                    <div class="cta-buttons">
                        <a href="#projects" class="btn">View Projects</a>
                        <a href="#contact" class="btn btn-outline">Get in Touch</a>
                    </div>
                </div>

                <div class="hero-image">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/E39FA9D3-A7FE-4594-8A0A-2C1B0A9D3030-udXJMA2DLetk5vCRYMI03Is8AL5YnQ.png"
                        alt="Adewale Afolabi Adeniyi"
                    >
                </div>
            </div>
        </section>

        <!-- Professional Photo Section -->
        <section class="photo-section">
            <div class="photo-container">

                <div class="photo-box">
                    <div class="photo-circle">
                    <img
                        src="/about-image.png"
                        alt="Adewale Afolabi Adeniyi"
                    >
                        
                    </div>
                </div>

                <div class="photo-text">
                    <h2>About Me</h2>

                    <p>
                        I’m Adewale Afolabi Adeniyi, an AI-focused software engineer with a <strong>First Class degree in Mechanical Engineering</strong>.
                         My background combines engineering, artificial intelligence, and software development, giving me a 
                         systems-oriented approach to solving technical problems.
                        I’m continuously developing my skills across AI/ML, software engineering, 
                        and cloud technologies, with a particular interest in applying these areas to 
                        real-world engineering and operational challenges. I enjoy learning new technologies, 
                        working on challenging problems, and turning what I learn into practical solutions.

                    </p>

                    <h3>What I Build</h3>

                    <p>
                        I build AI applications that solve practical problems, from
                        Retrieval-Augmented Generation systems for industrial maintenance
                        to AI-powered learning and energy management platforms.
                        I also work across backend development, APIs, databases,
                        containerization, CI/CD, and cloud deployment.
                    </p>

                    <div class="stats-divider"></div>

                    <div class="stats">
                    <div class="stat-item">
                            <div class="stat-number">4+</div>
                            <div class="stat-label">years of AI/ML Research and Development Experience</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">3+</div>
                            <div class="stat-label">Featured AI Projects</div>
                        </div>

                        <div class="stat-item">
                            <div class="stat-number">AI/ML</div>
                            <div class="stat-label">Core Focus</div>
                        </div>

                                                
                        <div class="stat-item">
                            <div class="stat-number">3+</div>
                            <div class="stat-label">Cloud Technologies</div>
                        </div>

                        <div class="stat-item">
                            <div class="stat-number">10+</div>
                            <div class="stat-label">Open Source Contributions</div>
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
                    I started with engineering, where I learned to think in systems, understand how different parts work together, and solve problems when things do not go as planned. <br><br>
When I discovered software and AI, I found another way to approach the same kind of problems, with the ability to make complex systems more intelligent, adaptive, and useful. <br><br>
Today, I am an AI-focused software engineer building intelligent applications, backend systems, and cloud-deployed software. I work across machine learning, Generative AI, RAG, APIs, databases, Docker, and CI/CD, using technologies such as Python, Go, and JavaScript. <br><br>
I enjoy taking messy, real-world problems and finding where software and AI can genuinely make them better. This has led me to build solutions across industrial maintenance, education, and energy management, combining engineering knowledge with modern AI and software engineering. <br><br>
I am particularly interested in AI/ML for engineering systems, trustworthy AI, scientific machine learning, optimization, reliability, and intelligent decision-support systems. Ultimately, I want to build AI that is not just impressive, but useful, reliable, and built to solve problems that matter.

                </p>

            </div>
        </section>

        <!-- Avatar Section -->
        <section class="avatar-section">

            <div class="avatar-container">

                <div class="avatar-text">

                    <h2>Software Engineering First. AI Where It Helps.</h2>

                    <p>
                        My engineering background taught me to start with the problem,
                        understand the system, and then choose the right technical approach.
                        I bring the same mindset to AI engineering.
                    </p>

                    <p>
                        Whether I am building a maintenance assistant, an educational
                        platform, or an energy management system, I care about reliable
                        data, useful outputs, system architecture, and making sure the
                        technology actually solves the problem it was built for.
                    </p>

                </div>

                <div class="avatar-image">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0AFC655A-B267-4E69-8703-48317E0449A4-m3ZxRFCygJQ0TUAsvKnJ4GjDb21PGe.png"
                        alt="Adewale Avatar"
                        style="max-width: 300px; height: auto; border-radius: 12px;"
                    >
                </div>

            </div>

        </section>

        <!-- Skills Section -->
        <section class="skills" id="skills">

            <div class="skills-container">

                <h2 class="section-title">Technical Skills</h2>

                <div class="skill-category">
                    <h3 class="skill-category-title">AI & Machine Learning</h3>

                    <div class="skill-tags">
                        <span class="skill-tag">Generative AI</span>
<span class="skill-tag">LLMs</span>
<span class="skill-tag">RAG</span>
<span class="skill-tag">Machine Learning</span>
<span class="skill-tag">Natural Language Processing</span>
<span class="skill-tag">Statistical Thinking</span>
<span class="skill-tag">Semantic Search</span>
<span class="skill-tag">Prompt Engineering</span>
<span class="skill-tag">Hallucination Mitigation</span>
<span class="skill-tag">Vector Databases</span>
<span class="skill-tag">Scientific ML</span>
<span class="skill-tag">Deep Learning</span>
<span class="skill-tag">Neural Networks</span>
<span class="skill-tag">Supervised Learning</span>
<span class="skill-tag">Model Evaluation</span>
<span class="skill-tag">Feature Engineering</span>
<span class="skill-tag">Data Analysis</span>
<span class="skill-tag">REST APIs</span>
<span class="skill-tag">Firebase</span>
<span class="skill-tag">Terraform</span>
<span class="skill-tag">Linux</span>
<span class="skill-tag">Git</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h3 class="skill-category-title">Programming & Frameworks</h3>

                    <div class="skill-tags">

                        <span class="skill-tag">HTML</span>
                        <span class="skill-tag">CSS</span>
                        <span class="skill-tag">Python</span>
                        <span class="skill-tag">Golang</span>
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">TypeScript</span>
                        <span class="skill-tag">Java</span>
                        <span class="skill-tag">R</span>
                        <span class="skill-tag">FastAPI</span>
                        <span class="skill-tag">React</span>
                        <span class="skill-tag">Node.js</span>
                        <span class="skill-tag">Django</span>
                        <span class="skill-tag">NestJS</span>
                     
                    </div>
                </div>

                <div class="skill-category">
                    <h3 class="skill-category-title">AI & Data Tools</h3>

                    <div class="skill-tags">
                        <span class="skill-tag">Hugging Face</span>
                        <span class="skill-tag">Transformers</span>
                        <span class="skill-tag">LangChain</span>
                        <span class="skill-tag">LangGraph</span>
                        <span class="skill-tag">ChromaDB</span>
                        <span class="skill-tag">Pandas</span>
                        <span class="skill-tag">NumPy</span>
                        <span class="skill-tag">SciPy</span>
                        <span class="skill-tag">Scikit-learn</span>
                        <span class="skill-tag">PyTorch</span>
                        <span class="skill-tag">TensorFlow</span>
                        <span class="skill-tag">Keras</span>
                        <span class="skill-tag">Matplotlib</span>
                        <span class="skill-tag">Seaborn</span>

                    </div>
                </div>

                <div class="skill-category">
                    <h3 class="skill-category-title">Backend, Databases & APIs</h3>

                    <div class="skill-tags">
                        <span class="skill-tag">PostgreSQL</span>
                        <span class="skill-tag">MySQL</span>
                        <span class="skill-tag">SQLite</span>
                        <span class="skill-tag">REST APIs</span>
                        <span class="skill-tag">API Integration</span>
                        <span class="skill-tag">Postman</span>
                        <span class="skill-tag">Git</span>
                        <span class="skill-tag">GitHub</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h3 class="skill-category-title">Cloud & DevOps</h3>

                    <div class="skill-tags">
                        <span class="skill-tag">AWS</span>
                        <span class="skill-tag">Docker</span>
                        <span class="skill-tag">Terraform</span>
                        <span class="skill-tag">GitHub Actions</span>
                        <span class="skill-tag">Linux</span>
                        <span class="skill-tag">Bash</span>
                        <span class="skill-tag">Render</span>
                        <span class="skill-tag">Vercel</span>
                        <span class="skill-tag">CI/CD</span>
                        <span class="skill-tag">AWS</span>
                        <span class="skill-tag">Render</span>
                        <span class="skill-tag">Vercel</span>
                        <span class="skill-tag">Infrastructure as Code</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h3 class="skill-category-title">Engineering & Reliability</h3>

                    <div class="skill-tags">
                        <span class="skill-tag">Reliability Engineering</span>
                        <span class="skill-tag">Vibrational Analysis</span>
                        <span class="skill-tag">Fault Diagnosis</span>
                        <span class="skill-tag">Root Cause Analysis</span>
                        <span class="skill-tag">Maintenance Planning</span>
                        <span class="skill-tag">Statistical Analysis</span>
                        <span class="skill-tag">Optimization</span>
                    </div>
                </div>

            </div>

        </section>

        <!-- Projects Section -->
        <section class="projects" id="projects">

            <div class="projects-container">

                <h2 class="section-title">Featured Projects</h2>

                <div class="project-grid">

                    <!-- MaintainAI -->
                    <div class="project-card">
                    

                        <h3>MaintainAI</h3>

                        <p>
                            A RAG-powered maintenance assistant designed to help maintenance
                            teams retrieve information from historical work orders and inventory
                            data. The system combines semantic retrieval with structured inventory
                            lookup to reduce unsupported AI responses.
                        </p>

                        <div class="project-links">
                            <a
                                href="https://github.com/HademiData/maintain-ai"
                                target="_blank"
                                class="project-link"
                            >
                                <i class="fab fa-github"></i> GitHub
                            </a>
                        </div>

                        <div class="project-tags">
                            <span class="project-tag">Python</span>
                            <span class="project-tag">RAG</span>
                            <span class="project-tag">Qwen</span>
                            <span class="project-tag">ChromaDB</span>
                            <span class="project-tag">Hugging Face</span>
                        </div>

                    </div>

                    <!-- IntelliAI -->
                    <div class="project-card">


                        <h3>IntelliAI (SABIFY)</h3>

                        <p>
                            An AI-powered learning management system that automates assessment
                            generation and grading while helping students identify knowledge gaps.
                            The platform separates its Go LMS backend from a Python AI service
                            through REST APIs.
                        </p>

                        <div class="project-links">
                            <a
                                href="https://github.com/HademiData/sabify"
                                target="_blank"
                                class="project-link"
                            >
                                <i class="fab fa-github"></i> GitHub
                            </a>

                            <a
                                href="https://sabify.onrender.com/"
                                target="_blank"
                                class="project-link"
                            >
                                <i class="fas fa-external-link-alt"></i> Demo
                            </a>
                        </div>

                        <div class="project-tags">
                            <span class="project-tag">Go</span>
                            <span class="project-tag">Python</span>
                            <span class="project-tag">PostgreSQL</span>
                            <span class="project-tag">FastAPI</span>
                            <span class="project-tag">LLM</span>
                        </div>

                    </div>

                    <!-- WattSmart -->
                    <div class="project-card">

                        <h3>WattSmart Naija</h3>

                        <p>
                            An AI-powered energy management platform for Nigerian households
                            and SMEs. It combines deterministic energy calculations with Gemini
                            to generate personalized energy audits, cost analysis, and
                            solar investment recommendations.
                        </p>

                        <div class="project-links">
                            <a
                                href="https://github.com/abubakarotun/WattSmart-Naija"
                                target="_blank"
                                class="project-link"
                            >
                                <i class="fab fa-github"></i> GitHub
                            </a>

                            <a
                                href="https://wattsmart-naija.ai.studio/"
                                target="_blank"
                                class="project-link"
                            >
                                <i class="fas fa-external-link-alt"></i> Demo
                            </a>
                        </div>

                        <div class="project-tags">
                            <span class="project-tag">React</span>
                            <span class="project-tag">TypeScript</span>
                            <span class="project-tag">Node.js</span>
                            <span class="project-tag">Gemini</span>
                            <span class="project-tag">Firebase</span>
                        </div>

                    </div>

                    <!-- Portfolio DevOps -->
                    <div class="project-card">

                        <h3>Cloud & DevOps Portfolio</h3>

                        <p>
                            A production-oriented portfolio application demonstrating
                            containerization, CI/CD, cloud deployment, health checks,
                            automated builds, monitoring, and deployment workflows.
                        </p>

                        <div class="project-links">
                            <a
                                href="https://github.com/HademiData/professional-portfolio"
                                target="_blank"
                                class="project-link"
                            >
                                <i class="fab fa-github"></i> GitHub
                            </a>
                        </div>

                        <div class="project-tags">
                            <span class="project-tag">Next.js</span>
                            <span class="project-tag">Docker</span>
                            <span class="project-tag">GitHub Actions</span>
                            <span class="project-tag">Render</span>
                            <span class="project-tag">CI/CD</span>
                        </div>

                    </div>

                    <!-- IaC -->
                    <div class="project-card">

                        <h3>Infrastructure as Code</h3>

                        <p>
                            Terraform-based infrastructure work focused on repeatable
                            cloud provisioning, EC2 and S3 deployment, security configuration,
                            and automated infrastructure workflows.
                        </p>

                        <div class="project-links">
                            <a
                                href="https://github.com/HademiData/terraform-Curriculum"
                                target="_blank"
                                class="project-link"
                            >
                                <i class="fab fa-github"></i> GitHub
                            </a>
                        </div>

                        <div class="project-tags">
                            <span class="project-tag">Terraform</span>
                            <span class="project-tag">AWS</span>
                            <span class="project-tag">GitHub Actions</span>
                            <span class="project-tag">IaC</span>
                        </div>

                    </div>

                    <!-- Industrial ERP -->
                    <div class="project-card">

                        <h3>Industrial ERP Optimization</h3>

                        <p>
                            An engineering-focused software solution developed around
                            industrial job planning, part tracking, and maintenance
                            operations, combining software development with practical
                            plant engineering knowledge.
                        </p>

                        <div class="project-tags">
                            <span class="project-tag">Python</span>
                            <span class="project-tag">ERP</span>
                            <span class="project-tag">Engineering</span>
                            <span class="project-tag">Optimization</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>


        <!-- Research & Technical Work Section -->
<section class="projects" id="research">

    <div class="projects-container">

        <h2 class="section-title">Research & Technical Work</h2>

        <div class="project-grid">

            <!-- CO2 PINN -->
            <div class="project-card">

                <h3>Physics-Informed Machine Learning for CO₂ Emissions</h3>

                <p>
                    Developed a hybrid data-driven and physics-based neural network
                    for predicting CO₂ emissions under varying combustion conditions.
                    Incorporated air-fuel relationships and stoichiometric constraints
                    to improve physical consistency and interpretability.
                </p>

                <div class="project-links">
                    <a
                        href="https://colab.research.google.com/drive/1xcS48HlGoH5pqBey7PYdenzF3IOgux6c?usp=sharing"
                        target="_blank"
                        class="project-link"
                    >
                        <i class="fas fa-external-link-alt"></i> Research
                    </a>
                </div>

                <div class="project-tags">
                    <span class="project-tag">PINNs</span>
                    <span class="project-tag">Scientific ML</span>
                    <span class="project-tag">Neural Networks</span>
                    <span class="project-tag">Combustion</span>
                </div>

            </div>

            <!-- Harmonic Oscillator -->
            <div class="project-card">

                <h3>PINN for 1D Harmonic Oscillation</h3>

                <p>
                    Developed a Physics-Informed Neural Network for an underdamped
                    harmonic oscillator by incorporating differential equation
                    constraints directly into training and comparing its behavior
                    with a conventional neural network.
                </p>

                <div class="project-links">
                    <a
                        href="https://colab.research.google.com/drive/1Jd1IPgo8Dcz_NcKPr7xa8jyP0JXdN9jW?usp=sharing"
                        target="_blank"
                        class="project-link"
                    >
                        <i class="fas fa-external-link-alt"></i> Research
                    </a>
                </div>

                <div class="project-tags">
                    <span class="project-tag">PINNs</span>
                    <span class="project-tag">ODEs</span>
                    <span class="project-tag">Deep Learning</span>
                    <span class="project-tag">Dynamics</span>
                </div>

            </div>

            <!-- Transformer -->
            <div class="project-card">

                <h3>Transformer Architecture Implementation</h3>

                <p>
                    Implemented the core components of the Transformer architecture,
                    including multi-head self-attention, positional encoding,
                    feed-forward layers, and masking to understand the foundations
                    of modern language models.
                </p>

                <div class="project-links">
                    <a
                        href="https://colab.research.google.com/drive/1nhTBo6brgvcxrjDU9U4ujxfJOdH7O1yE?usp=sharing"
                        target="_blank"
                        class="project-link"
                    >
                        <i class="fas fa-external-link-alt"></i> Research
                    </a>
                </div>

                <div class="project-tags">
                    <span class="project-tag">Transformers</span>
                    <span class="project-tag">Attention</span>
                    <span class="project-tag">Deep Learning</span>
                    <span class="project-tag">NLP</span>
                </div>

            </div>

            <!-- GPT Style Model -->
            <div class="project-card">

                <h3>GPT-Style Language Model Implementation</h3>

                <p>
                    Implemented an autoregressive Transformer language model
                    exploring causal self-attention, positional encoding, masking,
                    and next-token prediction using the Tiny Shakespeare dataset.
                </p>

                <div class="project-links">
                    <a
                        href="https://colab.research.google.com/drive/1rEJ0J9MZVDSiyDiKMHRfaIhMYxFHi6nW?usp=sharing"
                        target="_blank"
                        class="project-link"
                    >
                        <i class="fas fa-external-link-alt"></i> Research
                    </a>
                </div>

                <div class="project-tags">
                    <span class="project-tag">LLMs</span>
                    <span class="project-tag">Transformers</span>
                    <span class="project-tag">Self-Attention</span>
                    <span class="project-tag">Language Modeling</span>
                </div>

            </div>

            <!-- Undergraduate Thesis -->
            <div class="project-card">

                <h3>Hybrid PV System & Smart Load Management</h3>

                <p>
                    Designed, modelled, and optimized a 1 kW hybrid photovoltaic
                    power system with battery storage and grid backup. Explored
                    intelligent load scheduling and energy management for
                    residential applications.
                </p>

                <div class="project-tags">
                    <span class="project-tag">Energy Systems</span>
                    <span class="project-tag">Optimization</span>
                    <span class="project-tag">PV Systems</span>
                    <span class="project-tag">MATLAB/Simulink</span>
                </div>

                <p style="margin-top: 15px; margin-bottom: 0;">
                    Undergraduate Thesis · Lagos State University
                </p>

            </div>

            <!-- University of Gloucestershire -->
            <div class="project-card">

                <h3>Machine Learning Research</h3>

                <p>
                    Supported research projects involving data preprocessing,
                    feature engineering, statistical analysis, machine learning
                    model development, evaluation, and visualization across
                    engineering, financial, and applied datasets.
                </p>

                <div class="project-tags">
                    <span class="project-tag">Python</span>
                    <span class="project-tag">Scikit-learn</span>
                    <span class="project-tag">TensorFlow</span>
                    <span class="project-tag">PyTorch</span>
                    <span class="project-tag">R</span>
                </div>

                <p style="margin-top: 15px; margin-bottom: 0;">
                    University of Gloucestershire · 2022–2023
                </p>

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
                        <h3 class="exp-title">AI Engineering Fellow</h3>
                        <span class="exp-date">Feb 2026 – Present</span>
                    </div>

                    <p class="exp-company">
                        Talent Nation | Lagos, Nigeria
                    </p>

                    <ul class="exp-description">
                        

                        <li>
                            Building software and AI solutions using Go, Python,
                            JavaScript, Linux, Docker, and cloud technologies.
                        </li>

                        <li>
                            Participating in rapid-cycle engineering projects and
                            hackathons focused on solving practical problems.
                        </li>

                        <li>
                            Working across backend development, AI integration,
                            APIs, databases, deployment, and system reliability.
                        </li>

                        <li>
                            Collaborating through Git-based workflows, code reviews,
                            and structured software development practices.
                        </li>
                    </ul>

                </div>

                <div class="experience-item">

                    <div class="exp-header">
                        <h3 class="exp-title">AI Engineering Intern</h3>
                        <span class="exp-date">Nov 2025 – Jan 2026</span>
                    </div>

                    <p class="exp-company">
                        Incubator Hub | Lagos, Nigeria
                    </p>

                    <ul class="exp-description">
                        <li>
                            Selected as one of 500 interns from 18,000+ applicants,
                            placing in the top 2.7%.
                        </li>

                        <li>
                            Worked on an industrial ERP solution focused on plant
                            job planning, part tracking, and operational efficiency.
                        </li>

                        <li>
                            Developed AI applications using Large Language Models
                            and Retrieval-Augmented Generation techniques.
                        </li>

                        <li>
                            Worked with Hugging Face models and AI pipelines for
                            technical problem solving and information retrieval.
                        </li>

                        <li>
                            Explored full-stack AI integration, inference optimization,
                            and reliable data retrieval.
                        </li>
                    </ul>

                </div>

                <div class="experience-item">

                    <div class="exp-header">
                        <h3 class="exp-title">Mechanical Planner Support</h3>
                        <span class="exp-date">Aug 2024 – Aug 2025</span>
                    </div>

                    <p class="exp-company">
                        Lafarge Africa, Ewekoro Plant II | Nigeria
                    </p>

                    <ul class="exp-description">
                        <li>
                            Supported maintenance planning for industrial equipment
                            including conveyors, vertical raw mills, elevators,
                            and other plant systems.
                        </li>

                        <li>
                            Supported more than 150 work orders per month and achieved
                            approximately 95% on-time Gantt completion.
                        </li>

                        <li>
                            Used SAP and maintenance documentation to support work
                            planning, scheduling, spare-parts tracking, and execution.
                        </li>

                        <li>
                            Applied engineering knowledge in maintenance planning,
                            reliability, equipment diagnosis, and operational support.
                        </li>
                    </ul>

                </div>

            </div>

        </section>

        <!-- Education Section -->
        <section class="education" id="education">

            <div class="education-container">

                <h2 class="section-title">Education</h2>

                <div class="education-item">

                    <h3>
                        Bachelor of Mechanical Engineering
                        <span style="font-weight: 400;">(First Class Honors)</span>
                    </h3>

                    <p>
                        <strong>Lagos State University, Ojo</strong>
                        | Feb 2018 – Feb 2024
                    </p>

                    <p>
                        CGPA: 4.53/5.00 | Class Rank: 3/75
                    </p>

                    <p>
                        <strong>Focus:</strong>
                        Engineering systems, operational research, Pythonprogramming,
                        statistics, project management, and engineering analysis.
                    </p>

                </div>

                <div class="education-item">

                    <h3>
                        AI Engineering Fellowship
                        <span style="font-weight: 400;">(Talent Nation)</span>
                    </h3>

                    <p>
                        <strong>Learn2Earn</strong>
                        | Feb 2026 – Present
                    </p>

                    <p>
                        Competitive selection: Top 2.8% of 26,000+ applicants
                    </p>

                    <p>
                        <strong>Focus:</strong>
                        Artificial intelligence, machine learning, software engineering,
                        backend development, cloud computing, DevOps, and building
                        practical technology solutions through hands-on projects.
                    </p>

                </div>

                <div class="education-item">

                    <h3>
                        Generative AI Engineering Internship
                        <span style="font-weight: 400;">(Incubator Hub)</span>
                    </h3>

                    <p>
                        <strong>Incubator Hub</strong>
                        | Nov 2025 – Jan 2026
                    </p>

                    <p>
                        Competitive selection: Top 2.7% of 18,000+ applicants
                    </p>

                    <p>
                        <strong>Focus:</strong>
                        Generative AI, Large Language Models, RAG, Hugging Face,
                        AI application development, backend integration, and
                        building practical AI solutions for real-world use cases.
                    </p>

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
                        <p>
                            AI, machine learning, accelerated computing,
                            and developer technologies.
                        </p>
                    </div>

                    <div class="community-item">
                        <h4>IBM Developers Community</h4>
                        <p>
                            Software engineering, cloud technologies,
                            and enterprise development.
                        </p>
                    </div>

                    <div class="community-item">
                        <h4>Google Developer Groups</h4>
                        <p>
                            Developer technologies, cloud platforms,
                            and technical community learning.
                        </p>
                    </div>

                    <div class="community-item">
                        <h4>Postman Community</h4>
                        <p>
                            API development, testing, documentation,
                            and backend workflows.
                        </p>
                    </div>

                </div>

            </div>

        </section>

        <!-- Contact Section -->
        <section class="contact" id="contact">

            <div class="contact-container">

                <h2>Let's Connect</h2>

                <p>
                    Open to AI engineering, software engineering,
                    machine learning, and engineering technology opportunities.
                </p>

                <div class="contact-links">

                    <button
                        class="contact-link copy-btn"
                        onclick="copyToClipboard('afolabiwale262@gmail.com', event)"
                    >
                        <i class="fas fa-envelope"></i>
                        Email
                    </button>

                    <button
                        class="contact-link copy-btn"
                        onclick="copyToClipboard('07015537628', event)"
                    >
                        <i class="fas fa-phone"></i>
                        Phone
                    </button>

                    <a
                        href="https://github.com/HademiData"
                        target="_blank"
                        class="contact-link"
                    >
                        <i class="fab fa-github"></i>
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/afadewale/"
                        target="_blank"
                        class="contact-link"
                    >
                        <i class="fab fa-linkedin"></i>
                        LinkedIn
                    </a>

                    <a
                        href="https://medium.com/@Hademi_loyin"
                        target="_blank"
                        class="contact-link"
                    >
                        <i class="fab fa-medium"></i>
                        Medium
                    </a>

                </div>

            </div>

        </section>

        <!-- Footer -->
        <footer>
            <p>
                &copy; 2026 Adewale Afolabi Adeniyi |
                AI Engineer & Software Engineer.
                Building practical intelligent systems.
            </p>
        </footer>

        <script>

        // Theme Toggle
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

        document.addEventListener('DOMContentLoaded', () => {

            const themeToggle = document.getElementById('themeToggle');
            const body = document.body;

            const savedTheme =
                localStorage.getItem('theme') || 'dark-mode';

            body.className = savedTheme;

            updateThemeIcon();

            themeToggle.addEventListener('click', () => {

                if (body.classList.contains('dark-mode')) {

                    body.classList.remove('dark-mode');
                    body.classList.add('light-mode');

                    localStorage.setItem(
                        'theme',
                        'light-mode'
                    );

                } else {

                    body.classList.remove('light-mode');
                    body.classList.add('dark-mode');

                    localStorage.setItem(
                        'theme',
                        'dark-mode'
                    );
                }

                updateThemeIcon();
            });

        });

        // Navigation active link
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {

            let current = '';

            const sections =
                document.querySelectorAll('section');

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop;

                if (scrollY >= sectionTop - 100) {
                    current =
                        section.getAttribute('id');
                }

            });

            navLinks.forEach(link => {

                link.classList.remove('active');

                if (
                    link.getAttribute('href') ===
                    \`#\${current}\`
                ) {
                    link.classList.add('active');
                }

            });

        });

        // Smooth navigation
        navLinks.forEach(link => {

            link.addEventListener('click', (e) => {

                e.preventDefault();

                const targetId =
                    link.getAttribute('href')
                        .substring(1);

                const targetSection =
                    document.getElementById(targetId);

                if (targetSection) {

                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                }

            });

        });

        // Copy to clipboard
        function copyToClipboard(text, event) {

            event.preventDefault();

            navigator.clipboard
                .writeText(text)
                .then(() => {

                    const toast =
                        document.createElement('div');

                    toast.className = 'toast';

                    if (text.includes('@')) {
                        toast.textContent =
                            'Email copied!';
                    } else {
                        toast.textContent =
                            'Phone copied!';
                    }

                    document.body.appendChild(toast);

                    setTimeout(() => {
                        toast.remove();
                    }, 3000);

                })
                .catch(() => {
                    alert(
                        'Failed to copy. Please try again.'
                    );
                });
        }

        console.log(
            "%c Welcome to Adewale's Portfolio! 👋",
            "font-size: 20px; font-weight: bold;"
        );

        console.log(
            "%c AI Engineering | Software Engineering | Engineering Systems",
            "font-size: 14px;"
        );

        </script>

    </body>
    </html>
    `,
            }}
        />
    );
}