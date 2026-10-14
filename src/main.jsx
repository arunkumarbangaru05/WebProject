import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

import profilePhoto from "./Assets/Image.jpeg";
import globalLogicLogo from "./Assets/Glo.png";
import cbsiLogo from "./Assets/CBSI.png";

const logos = {
  globalLogic: globalLogicLogo,
  cbsi: cbsiLogo,
};

const navItems = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React JS",
  "Angular JS",
  "Redux",
  "Redux Saga",
  "Next JS",
  "Node JS",
  "HTML5",
  "CSS3",
  "Styled Components",
  "Bootstrap",
  "Tailwind CSS",
  "Jest",
  "React Testing Library",
  "REST APIs",
  "Git",
  "JIRA",
  "Adobe Analytics",
];

const experiences = [
  {
    company: "GlobalLogic India Pvt Ltd",
    role: "Software Engineer / Front-End Web Developer",
    period: "June 2022 – Present",
    logo: logos.globalLogic,
    summary:
      "Current organization. Working on enterprise web applications using JavaScript, TypeScript, React JS, Redux, Styled Components, HTML, CSS, Jest and React Testing Library.",
    projects: [
      {
        client: "Fashion Retail & E-Commerce",
        title: "Enterprise Fashion Retail & E-Commerce Application",
        description:
          "Worked on reusable React and TypeScript UI components and Micro Front Ends across Product Discovery, Product Listing, Product Details, Search & Filters, Wishlist, Shopping Cart, Checkout, Order Management, Order History and Order Tracking.",
        details:
          "Integrated REST APIs, wrote Jest and React Testing Library unit tests with more than 90% coverage, contributed to performance improvements, production readiness, release activities, code reviews, analytics tracking and knowledge-transfer sessions.",
        tech: [
          "React JS",
          "TypeScript",
          "Redux",
          "Redux Saga",
          "Styled Components",
          "Jest",
          "RTL",
          "Adobe Analytics",
        ],
      },
      {
        client: "AT&T · Telecom Domain",
        title:
          "Job Assignment Module – Assignment Parameter Determination (APD)",
        description:
          "Contributed to revamping an existing desktop application into a web application used for technician dispatch and work-request assignment. Worked on Job Type, Technician Skills, Estimated Duration, Work Request Priority and Dispatch Date/Time.",
        details:
          "Developed reusable React components, used Redux and Redux Saga for asynchronous API interactions, integrated REST APIs, contributed to PrimeReact adoption and built data-driven screens for assignment parameters.",
        tech: [
          "React JS",
          "TypeScript",
          "Redux",
          "Redux Saga",
          "PrimeReact",
          "REST APIs",
        ],
      },
      {
        client: "US Healthcare Account",
        title: "Access MS Application",
        description:
          "Developed responsive healthcare functionality for eligibility screening, program discovery and application workflows for Medicaid and Temporary Assistance for Needy Families (TANF).",
        details:
          "Worked on security and user-profile modules, consumed RESTful services, debugged testing issues, participated in requirement discussions with business analysts and clients, and maintained code quality using Sonar and JIRA.",
        tech: ["JavaScript", "React JS", "HTML5", "CSS3", "Bootstrap"],
      },
    ],
  },
  {
    company: "CBSI Global (FirstMeridian Group)",
    role: "UI Developer / software Engineer",
    period: "October 2021 – May 2022",
    logo: logos.cbsi,
    summary:
      "Previous organization. Worked on US healthcare web applications using JavaScript, React JS, Angular JS, Redux, HTML5, CSS3 and Bootstrap.",
    projects: [
      {
        client: "Kaiser Permanente · SCAL Medical Informatics",
        title: "Physician Medical Record Audit & File Management",
        description:
          "Developed responsive web applications for physicians to audit medical record numbers and support file management workflows.",
        details:
          "Built applications using AngularJS and React with Redux, consumed RESTful services, worked on creating, editing, merging and deleting files from the Bitbucket repository, and collaborated with business analysts and client teams.",
        tech: ["Angular JS", "React JS", "Redux", "HTML5", "CSS3", "Bootstrap"],
      },
    ],
  },
];

function Logo({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="logoFallback">{alt.slice(0, 2).toUpperCase()}</div>;
  }
  return (
    <img className="logo" src={src} alt={alt} onError={() => setFailed(true)} />
  );
}

function ProjectPanel({ project, company }) {
  return (
    <article className="projectPanel">
      <div className="projectTab">{company}</div>
      <div className="projectBody">
        <div className="projectClient">{project.client}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p className="detailsLine">{project.details}</p>
        <div className="projectTech">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function App() {
  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="site">
      <header className="header">
        <div className="headerNav">
          <div className="topLinks">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
            <a
              href="/Resume_Arun_Kumar_updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="profile">
          <div className="avatar">
            <img
              className="avatarImg"
              src={profilePhoto}
              alt="Bangaru Arun Kumar"
            />
          </div>
          <h1>Bangaru Arun Kumar</h1>
          <p>UI Developer · Front-End Web Developer · 5 Years Experience</p>
          <div className="tagline">
            “JavaScript · React · TypeScript · UI Engineering”
          </div>
        </div>
      </header>

      <main className="page">
        <section id="about" className="section aboutSection">
          <div className="sectionLabel">About</div>
          <div className="aboutBox">
            UI Developer with 5 years of experience building responsive web
            applications. Strong in JavaScript, TypeScript, React JS and Angular
            JS, with experience in Agile development, Test Driven Development,
            REST API integration, debugging, requirement gathering and analytics
            tracking. Currently working as a Software Engineer at GlobalLogic
            India Pvt Ltd and previously worked as a UI Developer at CBSI Global
            (FirstMeridian Group) about one year.
          </div>

          <div className="sectionLabel skillsLabel">Skills</div>
          <div className="skillsWrap">
            {skills.map((skill) => (
              <span className="skillChip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="section experienceSection">
          <div className="sectionLabel">Experience</div>
          <div className="experienceRow">
            {experiences.map((item) => (
              <article className="experienceCard" key={item.company}>
                <div className="experienceLogoBox">
                  <Logo src={item.logo} alt={item.company} />
                </div>
                <h3>{item.role}</h3>
                <div className="experienceCompany">{item.company}</div>
                <div className="experiencePeriod">{item.period}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projectsSection">
          <div className="sectionLabel">Projects</div>
          {experiences.map((experience) => (
            <div className="companyGroup" key={experience.company}>
              <div className="companyHeading">
                <div className="companyHeadingLogo">
                  <Logo src={experience.logo} alt={experience.company} />
                </div>
                <div>
                  <h2>{experience.company}</h2>
                  <p>{experience.summary}</p>
                </div>
              </div>
              <div className="projectList">
                {experience.projects.map((project) => (
                  <ProjectPanel
                    key={project.title}
                    project={project}
                    company={experience.company}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="contact" className="section contactSection">
          <div className="sectionLabel">Contact</div>
          <div className="contactBox">
            <div>
              <h2>Let’s connect</h2>
              <p>
                For UI development, front-end engineering and React
                opportunities, feel free to reach out.
              </p>
            </div>
            <div className="contactLinks">
              <a href="mailto:bangaruarunkumar07@gmail.com">
                bangaruarunkumar07@gmail.com
              </a>
              <a href="tel:+9959859804">+91 9959859804</a>
              <a
                href="https://www.linkedin.com/in/arun-kumar-banagaru-032952432"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Bangaru Arun Kumar · UI Developer
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
