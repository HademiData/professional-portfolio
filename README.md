
# Professional Portfolio

The application was containerized with Docker and deployed to the cloud as part of my DevOps and Cloud Engineering internship. The project also includes CI/CD automation, application monitoring, health checks, and deployment documentation.

A modern personal portfolio website built with **Next.js, React, and TypeScript**. The portfolio presents my background, technical skills, projects, education, and professional experience through a responsive web interface.

This project was originally developed as a personal portfolio application and later used as part of my **DevOps and Cloud Engineering internship**. During the internship, I worked through the process of taking the application from a locally developed project to a **containerized, continuously integrated, cloud-deployed, monitored, and documented application**.

The project gave me practical experience across the different stages of a modern software delivery workflow, including version control, application builds, testing, containerization, CI/CD, cloud deployment, monitoring, automation, troubleshooting, and infrastructure documentation.

## DevOps Internship Documentation

Detailed documentation for the work completed during the internship is available below:

- [Task 1](https://app.notion.com/p/THE-NEXUS-BuildLabs-Internship-Devops-3c9f0300be9a8049a2f2e83e2fda9fa5)
- [Task 2](https://butter-leader-6e4.notion.site/Task-2-3d1f0300be9a80dc93a7c93683a9c485?pvs=73)
- [Task 3](https://app.notion.com/p/Task-3-3d8f0300be9a809a81c7f7e4e18b8a50?source=copy_link)

---

## Project Overview

The portfolio is a production-ready web application designed to showcase my professional profile and technical work.

Beyond building the website itself, this repository became a practical environment for learning and applying DevOps practices. I worked on improving how the application is developed, tested, packaged, deployed, monitored, and maintained.

### Key Areas Covered

- Application development with Next.js and React
- Git and GitHub-based version control
- Dependency and project management with pnpm
- Code quality checks with ESLint
- Production application builds
- Docker containerization
- CI/CD automation with GitHub Actions
- Cloud deployment with Render
- Application health checks
- Availability and response-time monitoring
- Application and deployment logs
- Resource monitoring
- Automated deployment after successful CI checks
- Deployment troubleshooting and incident response
- Infrastructure and deployment documentation

---

## Technologies Used

### Application

- **Next.js**
- **React**
- **TypeScript**
- **CSS**
- **pnpm**

### DevOps & Cloud

- **Git**
- **GitHub**
- **GitHub Actions**
- **Docker**
- **Render**
- **UptimeRobot**

### Development & Quality

- **ESLint**
- **Node.js**
- **Linux/Ubuntu**
- **Docker CLI**

---

## Development Workflow

The project follows a workflow that connects development, testing, deployment, and monitoring.

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├── Install dependencies
    ├── Run ESLint
    ├── Build application
    └── Build Docker image
    │
    ▼
Render
    │
    ├── Build application
    ├── Deploy container
    └── Run health checks
    │
    ▼
Production Application
    │
    ├── Users
    ├── UptimeRobot
    ├── Render Logs
    └── Render Metrics
```

This workflow helped me understand how changes move from source code to a running production application.

---

## Docker & Containerization

Docker was used to package the application and its production environment into a consistent container.

The project uses a **multi-stage Docker build** to separate the application build process from the final production image. This helps keep the production image focused on what is required to run the application.

The container is configured to listen on the port provided by the deployment environment, allowing the same image to run locally and on Render.

### Local Docker Build

```bash
docker build -t professional-portfolio .
```

### Run the Container

```bash
docker run -p 3000:3000 professional-portfolio
```

The application can then be accessed locally through:

```text
http://localhost:3000
```

---

## Continuous Integration

GitHub Actions was introduced to automatically validate changes pushed to the repository.

The CI workflow performs the following checks:

1. Checks out the repository.
2. Sets up pnpm.
3. Sets up Node.js.
4. Installs dependencies using the lockfile.
5. Runs ESLint.
6. Builds the Next.js application.
7. Builds the Docker image.

This means changes are checked automatically before being considered ready for deployment.

### CI Workflow

```text
Code Push / Pull Request
          │
          ▼
     GitHub Actions
          │
          ├── Install
          ├── Lint
          ├── Build
          └── Docker Build
          │
          ▼
       Validation
```

---

## Cloud Deployment

The application was deployed to **Render** using the Docker configuration in the repository.

The deployment process connects the GitHub repository to Render so that the application can be built and deployed in the cloud.

Render was also configured to deploy **after successful CI checks**, creating a workflow where code first passes the automated checks before being deployed.

This helped me understand the relationship between:

- Source code
- CI validation
- Container builds
- Cloud deployment
- Production application monitoring

---

## Application Health Monitoring

A dedicated health endpoint was added to the application:

```text
/health
```

The endpoint provides a simple response confirming that the application is running.

Example response:

```json
{
  "status": "ok",
  "service": "professional-portfolio",
  "timestamp": "..."
}
```

This endpoint is used by the infrastructure to verify that the application is available.

Render was configured to use the health endpoint for deployment and service health validation.

---

## Availability & Response Time Monitoring

**UptimeRobot** was configured to monitor the production health endpoint.

The monitoring setup provides visibility into:

- Application availability
- Response time
- Downtime
- Health endpoint status

This provides an additional monitoring layer outside the cloud deployment platform.

---

## Logs & Resource Monitoring

Render's monitoring tools were used to understand the application's behavior after deployment.

### Logs

Render logs provide visibility into:

- Application output
- Runtime errors
- Deployment activity
- Startup issues
- Failed deployments

These logs can be used to investigate problems when the application does not behave as expected.

### Resource Monitoring

Render metrics were used to observe available infrastructure information such as application resource usage.

This introduced the practice of checking not only whether an application is running, but also how the infrastructure supporting it is performing.

---

## Automation

Several parts of the deployment process were automated to reduce manual work.

### Automated CI Checks

Every relevant repository change can trigger GitHub Actions to validate the application.

### Automated Deployment

Render was configured to deploy after successful CI checks.

### Automated Health Validation

The `/health` endpoint provides a consistent way for the deployment platform to verify application availability.

Together, these practices create a more reliable development and deployment workflow.

---

## Project Structure

```text
professional-portfolio/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── portfolio-page.tsx
│   └── health/
│       └── route.ts
│
├── components/
│   └── ui/
│       └── button.tsx
│
├── public/
│
├── Screenshots/
│   ├── app.png
│   └── docker-container-running.png
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── Dockerfile
├── eslint.config.mjs
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
└── README.md
```

---

## Running the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/HademiData/professional-portfolio.git
cd professional-portfolio
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run the Development Server

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:3000
```

### 4. Run Linting

```bash
pnpm lint
```

### 5. Build for Production

```bash
pnpm build
```

---

## Docker Workflow

To build and test the production container locally:

```bash
docker build -t professional-portfolio .
```

Run it:

```bash
docker run -p 3000:3000 professional-portfolio
```

Test the health endpoint:

```text
http://localhost:3000/health
```

---

## Challenges & Problem Solving

Working through the project exposed several practical issues that required troubleshooting.

Some of the challenges included:

- Preparing an existing Next.js application for production containerization.
- Managing dependency installation consistently in local and CI environments.
- Resolving package and build issues during the Docker setup.
- Configuring the application to work correctly with the cloud platform's dynamic port.
- Making sure the Docker container could run successfully in production.
- Configuring automated deployment without bypassing CI checks.
- Adding application health monitoring.
- Understanding the difference between build failures, deployment failures, runtime failures, and application availability issues.
- Using logs and monitoring information to identify and troubleshoot deployment problems.

These challenges helped move the project beyond simply writing application code and into understanding how software behaves throughout its delivery lifecycle.

---

## Incident Response

A basic incident response process was documented for common deployment and application issues.

The general troubleshooting process is:

```text
Issue Detected
      │
      ▼
Check Application Availability
      │
      ▼
Check Render Deployment Status
      │
      ▼
Review Logs
      │
      ▼
Identify Possible Cause
      │
      ▼
Apply Fix
      │
      ▼
Run CI Checks
      │
      ▼
Redeploy
      │
      ▼
Verify /health
      │
      ▼
Confirm Application Availability
```

Common issues considered include:

- Failed CI checks
- Failed application builds
- Docker build failures
- Deployment failures
- Application startup failures
- Incorrect port configuration
- Health-check failures
- Runtime errors

---

## Screenshots & Evidence

The repository includes screenshots demonstrating parts of the development and deployment process.

Examples include:

- Application interface
- Docker container running locally
- CI/CD workflow results
- Cloud deployment
- Monitoring and health checks

Detailed evidence and explanations for the internship tasks are available in the linked documentation above.

---

## What I Learned

This project gave me practical experience with the complete path from **application development to production deployment**.

I learned how different DevOps practices work together rather than treating them as separate tools:

- Git provides version control.
- GitHub provides collaboration and source management.
- GitHub Actions provides automated validation.
- Docker provides a consistent application environment.
- Render provides cloud deployment.
- Health checks help verify application availability.
- Monitoring provides visibility after deployment.
- Logs help with troubleshooting.
- Automation reduces repetitive manual deployment work.
- Documentation makes the infrastructure and troubleshooting process easier to understand and reproduce.

The project also helped me understand that deploying an application is not the end of development. A production application also needs to be **observable, maintainable, and reliable**.

---

## Future Improvements

With more time, I would further improve the project by adding:

- More detailed application monitoring
- Performance monitoring and alerting
- Automated backup strategies where applicable
- More comprehensive automated tests
- Infrastructure as Code
- More advanced deployment strategies
- Improved security scanning
- More detailed application and infrastructure dashboards

---

## DevOps Internship Summary

This repository represents the practical work completed while developing my understanding of DevOps and Cloud Engineering.

The project progressed from a normal web application into a workflow covering:

**Development → Version Control → CI → Testing → Containerization → Cloud Deployment → Automation → Monitoring → Troubleshooting → Documentation**

The goal was not only to deploy the portfolio, but to understand and demonstrate the practices required to **build, deliver, monitor, and maintain a modern application**.

---

## License

This project is for personal portfolio and educational purposes.
