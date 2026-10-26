'use client';

import { useEffect, useState } from 'react';
import './portfolio.css';

export default function PortfolioPage() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'light-mode') {
            setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            'theme',
            darkMode ? 'dark-mode' : 'light-mode'
        );
    }, [darkMode]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');

            let current = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;

                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id') || '';
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove('active');

                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (
        event: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        event.preventDefault();

        const target = document.getElementById(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const copyToClipboard = async (
        text: string,
        type: 'email' | 'phone'
    ) => {
        try {
            await navigator.clipboard.writeText(text);

            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent =
                type === 'email'
                    ? 'Email copied!'
                    : 'Phone copied!';

            document.body.appendChild(toast);

            setTimeout(() => {
                toast.remove();
            }, 3000);
        } catch {
            alert('Failed to copy. Please try again.');
        }
    };

    return (
        <>


            <div
                className={`portfolio-root ${
                    darkMode ? 'dark-mode' : 'light-mode'
                }`}
            >
                <button
                    className="theme-toggle"
                    title="Toggle dark/light mode"
                    onClick={() => setDarkMode((current) => !current)}
                    aria-label="Toggle dark/light mode"
                >
                    <i
                        className={
                            darkMode
                                ? 'fas fa-sun'
                                : 'fas fa-moon'
                        }
                    />
                </button>

                <nav>
                    <div className="logo">HademiData</div>

                    <ul>
                        <li>
                            <a
                                href="#home"
                                className="nav-link"
                                onClick={(e) =>
                                    scrollToSection(e, 'home')
                                }
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                className="nav-link"
                                onClick={(e) =>
                                    scrollToSection(e, 'about')
                                }
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#skills"
                                className="nav-link"
                                onClick={(e) =>
                                    scrollToSection(e, 'skills')
                                }
                            >
                                Skills
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                className="nav-link"
                                onClick={(e) =>
                                    scrollToSection(e, 'projects')
                                }
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#research"
                                className="nav-link"
                                onClick={(e) =>
                                    scrollToSection(e, 'research')
                                }
                            >
                                Research
                            </a>
                        </li>

                        <li>
                            <a
                                href="#experience"
                                className="nav-link"
                                onClick={(e) =>
                                    scrollToSection(e, 'experience')
                                }
                            >
                                Experience
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                className="nav-link"
                                onClick={(e) =>
                                    scrollToSection(e, 'contact')
                                }
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <section className="hero" id="home">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>
                                AI Engineer Building Practical
                                Intelligent Systems
                            </h1>

                            <p>
                                AI-focused software engineer developing
                                intelligent software systems across machine
                                learning, Generative AI, RAG, backend
                                engineering, and cloud technologies. I apply
                                engineering principles and software architecture
                                to build reliable, data-driven solutions for
                                complex operational and technical problems.
                            </p>

                            <div className="cta-buttons">
                                <a
                                    href="#projects"
                                    className="btn"
                                    onClick={(e) =>
                                        scrollToSection(e, 'projects')
                                    }
                                >
                                    View Projects
                                </a>

                                <a
                                    href="#contact"
                                    className="btn btn-outline"
                                    onClick={(e) =>
                                        scrollToSection(e, 'contact')
                                    }
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </div>

                        <div className="hero-image">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/E39FA9D3-A7FE-4594-8A0A-2C1B0A9D3030-udXJMA2DLetk5vCRYMI03Is8AL5YnQ.png"
                                alt="Adewale Afolabi Adeniyi"
                            />
                        </div>
                    </div>
                </section>

                <section className="photo-section">
                    <div className="photo-container">
                        <div className="photo-box">
                            <div className="photo-circle">
                                <img
                                    src="/about-image.png"
                                    alt="Adewale Afolabi Adeniyi"
                                />
                            </div>
                        </div>

                        <div className="photo-text">
                            <h2>About Me</h2>

                            <p>
                                I’m Adewale Afolabi Adeniyi, A
                                software engineer
                                
                                . My background combines engineering,
                                artificial intelligence, and software
                                development, giving me a systems-oriented
                                approach to solving technical problems. I’m
                                continuously developing my skills across AI/ML,
                                software engineering, and cloud technologies,
                                with a particular interest in applying these
                                areas to real-world engineering and operational
                                challenges. I enjoy learning new technologies,
                                working on challenging problems, and turning
                                what I learn into practical solutions.
                            </p>

                            <h3>What I Build</h3>

                            <p>
                                I build applications that solve practical
                                problems, from AI Retrieval-Augmented Generation
                                systems for industrial maintenance to AI-powered
                                learning and energy management platforms. I also
                                work across backend development, APIs,
                                databases, containerization, CI/CD, and cloud
                                deployment.
                            </p>

                            <div className="stats-divider" />

                            <div className="stats">
                                <div className="stat-item">
                                    <div className="stat-number">4+</div>
                                    <div className="stat-label">
                                        years of AI/ML Research and Development
                                        Experience
                                    </div>
                                </div>

                                <div className="stat-item">
                                    <div className="stat-number">3+</div>
                                    <div className="stat-label">
                                        Featured AI Projects
                                    </div>
                                </div>

                                <div className="stat-item">
                                    <div className="stat-number">AI/ML</div>
                                    <div className="stat-label">
                                        Core Focus
                                    </div>
                                </div>

                                <div className="stat-item">
                                    <div className="stat-number">3+</div>
                                    <div className="stat-label">
                                        Cloud Technologies
                                    </div>
                                </div>

                                <div className="stat-item">
                                    <div className="stat-number">10+</div>
                                    <div className="stat-label">
                                        Open Source Contributions
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about" id="about">
                    <div className="about-container">
                        <h2 className="section-title">
                            Professional Summary
                        </h2>
                    <p className="about-text">
                        I am an AI-focused software engineer with an engineering
                        background, building intelligent applications, backend
                        systems, and cloud-deployed software.

                        <br />
                        <br />

                        I work across Machine Learning, Generative AI, RAG, APIs,
                        databases, and cloud technologies, using Python, Go, and
                        JavaScript to solve real-world problems across engineering,
                        education, and energy.

                        <br />
                        <br />

                        My interests include AI for engineering systems, trustworthy
                        AI, scientific machine learning, and optimization, with a
                        focus on building reliable, practical solutions.
                    </p>
                    </div>
                </section>

                <section className="avatar-section">
                    <div className="avatar-container">
                        <div className="avatar-text">
                            <h2>
                                Software Engineering First. AI Where It Helps.
                            </h2>

                            <p>
                                My engineering background taught me to start
                                with the problem, understand the system, and
                                then choose the right technical approach. I
                                bring the same mindset to AI engineering.
                            </p>

                            <p>
                                Whether I am building a maintenance assistant,
                                an educational platform, or an energy
                                management system, I care about reliable data,
                                useful outputs, system architecture, and making
                                sure the technology actually solves the problem
                                it was built for.
                            </p>
                        </div>

                        <div className="avatar-image">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0AFC655A-B267-4E69-8703-48317E0449A4-m3ZxRFCygJQ0TUAsvKnJ4GjDb21PGe.png"
                                alt="Adewale Avatar"
                                style={{
                                    maxWidth: '300px',
                                    height: 'auto',
                                    borderRadius: '12px',
                                }}
                            />
                        </div>
                    </div>
                </section>

                <section className="skills" id="skills">
                    <div className="skills-container">
                        <h2 className="section-title">
                            Technical Skills
                        </h2>

                        <SkillCategory
                            title="AI & Machine Learning"
                            skills={[
                                'Generative AI',
                                'LLMs',
                                'RAG',
                                'Machine Learning',
                                'Natural Language Processing',
                                'Statistical Thinking',
                                'Semantic Search',
                                'Prompt Engineering',
                                'Hallucination Mitigation',
                                'Vector Databases',
                                'Scientific ML',
                                'Deep Learning',
                                'Neural Networks',
                                'Supervised Learning',
                                'Model Evaluation',
                                'Feature Engineering',
                                'Data Analysis',
                                'REST APIs',
                                'Firebase',
                                'Terraform',
                                'Linux',
                                'Git',
                            ]}
                        />

                        <SkillCategory
                            title="Programming & Frameworks"
                            skills={[
                                'HTML',
                                'CSS',
                                'Python',
                                'Golang',
                                'JavaScript',
                                'TypeScript',
                                'R',
                                'FastAPI',
                                'React',
                                'Node.js',
                                'NestJS',
                            ]}
                        />

                        <SkillCategory
                            title="AI & Data Tools"
                            skills={[
                                'Hugging Face',
                                'Transformers',
                                'LangChain',
                                'LangGraph',
                                'ChromaDB',
                                'Pandas',
                                'NumPy',
                                'SciPy',
                                'Scikit-learn',
                                'PyTorch',
                                'TensorFlow',
                                'Keras',
                                'Matplotlib',
                                'Seaborn',
                            ]}
                        />

                        <SkillCategory
                            title="Backend, Databases & APIs"
                            skills={[
                                'PostgreSQL',
                                'MySQL',
                                'SQLite',
                                'REST APIs',
                                'API Integration',
                                'Postman',
                                'Git',
                                'GitHub',
                            ]}
                        />

                        <SkillCategory
                            title="Cloud & DevOps"
                            skills={[
                                'AWS',
                                'Docker',
                                'Terraform',
                                'GitHub Actions',
                                'Linux',
                                'Bash',
                                'Render',
                                'Vercel',
                                'CI/CD',
                                'Infrastructure as Code',
                            ]}
                        />

                        <SkillCategory
                            title="Engineering & Reliability"
                            skills={[
                                'Reliability Engineering',
                                'Vibrational Analysis',
                                'Fault Diagnosis',
                                'Root Cause Analysis',
                                'Maintenance Planning',
                                'Statistical Analysis',
                                'Optimization',
                            ]}
                        />
                    </div>
                </section>

                <section className="projects" id="projects">
                    <div className="projects-container">
                        <h2 className="section-title">
                            Featured Projects
                        </h2>

                        <div className="project-grid">
                            <ProjectCard
                                title="MaintainAI"
                                description="A RAG-powered maintenance assistant designed to help maintenance teams retrieve information from historical work orders and inventory data. The system combines semantic retrieval with structured inventory lookup to reduce unsupported AI responses."
                                links={[
                                    {
                                        href: 'https://github.com/HademiData/maintain-ai',
                                        icon: 'fab fa-github',
                                        label: 'GitHub',
                                    },
                                    {
                                        href: 'https://maintain-ai-60aj.onrender.com/',
                                        icon: 'fas fa-external-link-alt',
                                        label: 'Demo',
                                    },
                                ]}
                                tags={[
                                    'Python',
                                    'RAG',
                                    'Qwen',
                                    'ChromaDB',
                                    'Hugging Face',
                                ]}
                            />

                            <ProjectCard
                                title="CreditLens"
                                description="An AI-powered credit risk assessment platform that predicts loan default probability using a machine learning model trained on the Home Credit dataset. It features an interactive dashboard for exploring credit risk insights, assessing applicants, and understanding predictions."
                                links={[
                                    {
                                        href: 'https://github.com/HademiData/credit-scoring',
                                        icon: 'fab fa-github',
                                        label: 'GitHub',
                                    },
                                    {
                                        href: 'https://creditview.onrender.com/',
                                        icon: 'fas fa-external-link-alt',
                                        label: 'Demo',
                                    },
                                ]}
                                tags={[
                                    'Python',
                                    'LightGBM',
                                    'Scikit-learn',
                                    'Pandas',
                                    'Machine Learning',
                                    'HTML',
                                    'CSS',
                                    'JavaScript',
                                ]}
                            />

                            <ProjectCard
                                title="WattSmart Naija"
                                description="An AI-powered energy management platform for Nigerian households and SMEs. It combines deterministic energy calculations with Gemini to generate personalized energy audits, cost analysis, and solar investment recommendations."
                                links={[
                                    {
                                        href: 'https://github.com/abubakarotun/WattSmart-Naija',
                                        icon: 'fab fa-github',
                                        label: 'GitHub',
                                    },
                                    {
                                        href: 'https://wattsmart-naija.ai.studio/',
                                        icon: 'fas fa-external-link-alt',
                                        label: 'Demo',
                                    },
                                ]}
                                tags={[
                                    'React',
                                    'TypeScript',
                                    'Node.js',
                                    'Gemini',
                                    'Firebase',
                                ]}
                            />

                            <ProjectCard
                                title="Cloud & DevOps Portfolio"
                                description="A production-oriented portfolio application demonstrating containerization, CI/CD, cloud deployment, health checks, automated builds, monitoring, and deployment workflows."
                                links={[
                                    {
                                        href: 'https://github.com/HademiData/professional-portfolio',
                                        icon: 'fab fa-github',
                                        label: 'GitHub',
                                    },
                                ]}
                                tags={[
                                    'Next.js',
                                    'Docker',
                                    'GitHub Actions',
                                    'Render',
                                    'CI/CD',
                                ]}
                            />

                            <ProjectCard
                                title="Infrastructure as Code"
                                description="Terraform-based infrastructure work focused on repeatable cloud provisioning, EC2 and S3 deployment, security configuration, and automated infrastructure workflows."
                                links={[
                                    {
                                        href: 'https://github.com/HademiData/terraform-Curriculum',
                                        icon: 'fab fa-github',
                                        label: 'GitHub',
                                    },
                                ]}
                                tags={[
                                    'Terraform',
                                    'AWS',
                                    'GitHub Actions',
                                    'IaC',
                                ]}
                            />

                        </div>
                    </div>
                </section>

                <section className="experience" id="experience">
                    <div className="experience-container">
                        <h2 className="section-title">
                            Professional Experience
                        </h2>

                        <ExperienceItem
                            title="AI Engineering Fellow"
                            date="Feb 2026 – Present"
                            company="Talent Nation | Lagos, Nigeria"
                            bullets={[
                                'Building software and AI solutions using Go, Python, JavaScript, Linux, Docker, and cloud technologies.',
                                'Participating in rapid-cycle engineering projects and hackathons focused on solving practical problems.',
                                'Working across backend development, AI integration, APIs, databases, deployment, and system reliability.',
                                'Collaborating through Git-based workflows, code reviews, and structured software development practices.',
                            ]}
                        />

                        <ExperienceItem
                            title="AI Engineering Intern"
                            date="Nov 2025 – Jan 2026"
                            company="Incubator Hub | Lagos, Nigeria"
                            bullets={[
                                'Selected as one of 500 interns from 18,000+ applicants, placing in the top 2.7%.',
                                'Worked on an industrial ERP solution focused on plant job planning, part tracking, and operational efficiency.',
                                'Developed AI applications using Large Language Models and Retrieval-Augmented Generation techniques.',
                                'Worked with Hugging Face models and AI pipelines for technical problem solving and information retrieval.',
                                'Explored full-stack AI integration, inference optimization, and reliable data retrieval.',
                            ]}
                        />

                        <ExperienceItem
                            title="Mechanical Planner Support"
                            date="Aug 2024 – Aug 2025"
                            company="Lafarge Africa, Ewekoro Plant II | Nigeria"
                            bullets={[
                                'Supported maintenance planning for industrial equipment including conveyors, vertical raw mills, elevators, and other plant systems.',
                                'Supported more than 150 work orders per month and achieved approximately 95% on-time Gantt completion.',
                                'Used SAP and maintenance documentation to support work planning, scheduling, spare-parts tracking, and execution.',
                                'Applied engineering knowledge in maintenance planning, reliability, equipment diagnosis, and operational support.',
                            ]}
                        />
                    </div>
                </section>

                <section className="education" id="education">
                    <div className="education-container">
                        <h2 className="section-title">
                            Education
                        </h2>

                        <EducationItem
                            title="Bachelor of Mechanical Engineering"
                            subtitle="(First Class Honors)"
                            institution="Lagos State University, Ojo"
                            date="Feb 2018 – Feb 2024"
                            lines={[
                                'CGPA: 4.53/5.00 | Class Rank: 3/75',
                                'Focus: Engineering systems, operational research, Python programming, statistics, project management, and engineering analysis.',
                            ]}
                        />

                        <EducationItem
                            title="AI Engineering Fellowship"
                            subtitle="(Talent Nation)"
                            institution="Learn2Earn"
                            date="Feb 2026 – Present"
                            lines={[
                                'Competitive selection: Top 2.8% of 26,000+ applicants',
                                'Focus: Artificial intelligence, machine learning, software engineering, backend development, cloud computing, DevOps, and building practical technology solutions through hands-on projects.',
                            ]}
                        />

                        <EducationItem
                            title="Generative AI Engineering Internship"
                            subtitle="(Incubator Hub)"
                            institution="Incubator Hub"
                            date="Nov 2025 – Jan 2026"
                            lines={[
                                'Competitive selection: Top 2.7% of 18,000+ applicants',
                                'Focus: Generative AI, Large Language Models, RAG, Hugging Face, AI application development, backend integration, and building practical AI solutions for real-world use cases.',
                            ]}
                        />
                    </div>
                </section>

                <section className="communities" id="communities">
                    <div className="communities-container">
                        <h2 className="section-title">
                            Professional Communities
                        </h2>

                        <div className="community-list">
                            <CommunityItem
                                title="NVIDIA Developer Community"
                                description="AI, machine learning, accelerated computing, and developer technologies."
                            />

                            <CommunityItem
                                title="IBM Developers Community"
                                description="Software engineering, cloud technologies, and enterprise development."
                            />

                            <CommunityItem
                                title="Google Developer Groups"
                                description="Developer technologies, cloud platforms, and technical community learning."
                            />

                            <CommunityItem
                                title="Postman Community"
                                description="API development, testing, documentation, and backend workflows."
                            />
                        </div>
                    </div>
                </section>

                <section className="contact" id="contact">
                    <div className="contact-container">
                        <h2>Let's Connect</h2>

                        <p>
                            Open to AI engineering, software engineering,
                            machine learning, and engineering technology
                            opportunities.
                        </p>

                        <div className="contact-links">
                            <button
                                className="contact-link copy-btn"
                                onClick={() =>
                                    copyToClipboard(
                                        'afolabiwale262@gmail.com',
                                        'email'
                                    )
                                }
                            >
                                <i className="fas fa-envelope" />
                                Email
                            </button>

                            <button
                                className="contact-link copy-btn"
                                onClick={() =>
                                    copyToClipboard(
                                        '07015537628',
                                        'phone'
                                    )
                                }
                            >
                                <i className="fas fa-phone" />
                                Phone
                            </button>

                            <a
                                href="https://github.com/HademiData"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                <i className="fab fa-github" />
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/afadewale/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                <i className="fab fa-linkedin" />
                                LinkedIn
                            </a>

                            <a
                                href="https://medium.com/@Hademi_loyin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                <i className="fab fa-medium" />
                                Medium
                            </a>
                        </div>
                    </div>
                </section>

                <footer>
                    <p>
                        &copy; 2026 Adewale Afolabi Adeniyi | AI Engineer &
                        Software Engineer. Building practical intelligent
                        systems.
                    </p>
                </footer>
            </div>
        </>
    );
}

function SkillCategory({
    title,
    skills,
}: {
    title: string;
    skills: string[];
}) {
    return (
        <div className="skill-category">
            <h3 className="skill-category-title">{title}</h3>

            <div className="skill-tags">
                {skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ProjectCard({
    title,
    description,
    tags,
    links,
    footer,
}: {
    title: string;
    description: string;
    tags: string[];
    links?: {
        href: string;
        icon: string;
        label: string;
    }[];
    footer?: string;
}) {
    return (
        <div className="project-card">
            <h3>{title}</h3>

            <p>{description}</p>

            {links && links.length > 0 && (
                <div className="project-links">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            <i className={link.icon} /> {link.label}
                        </a>
                    ))}
                </div>
            )}

            <div className="project-tags">
                {tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                        {tag}
                    </span>
                ))}
            </div>

            {footer && (
                <p
                    style={{
                        marginTop: '15px',
                        marginBottom: 0,
                    }}
                >
                    {footer}
                </p>
            )}
        </div>
    );
}

function ExperienceItem({
    title,
    date,
    company,
    bullets,
}: {
    title: string;
    date: string;
    company: string;
    bullets: string[];
}) {
    return (
        <div className="experience-item">
            <div className="exp-header">
                <h3 className="exp-title">{title}</h3>

                <span className="exp-date">{date}</span>
            </div>

            <p className="exp-company">{company}</p>

            <ul className="exp-description">
                {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                ))}
            </ul>
        </div>
    );
}

function EducationItem({
    title,
    subtitle,
    institution,
    date,
    lines,
}: {
    title: string;
    subtitle: string;
    institution: string;
    date: string;
    lines: string[];
}) {
    return (
        <div className="education-item">
            <h3>
                {title}{' '}
                <span style={{ fontWeight: 400 }}>
                    {subtitle}
                </span>
            </h3>

            <p>
                <strong>{institution}</strong> | {date}
            </p>

            {lines.map((line, index) => (
                <p key={line}>
                    {index === 1 ? (
                        <>
                            <strong>Focus:</strong>{' '}
                            {line.replace('Focus: ', '')}
                        </>
                    ) : (
                        line
                    )}
                </p>
            ))}
        </div>
    );
}

function CommunityItem({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="community-item">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}