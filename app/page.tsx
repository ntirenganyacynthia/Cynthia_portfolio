"use client";

import Image from "next/image";
import { useState } from "react";

const skills = [
  "Python",
  "JavaScript",
  "React",
  "Next.js",
  "Dart",
  "HTML",
  "CSS",
  "C++",
  "Cypress",
  "Git & GitHub",
  "Backend Development",
  "AI & Machine Learning",
];

const projects = [
  {
    title: "POS Backend",
    description:
      "A backend project for managing point-of-sale functionality, APIs, data and application logic.",
    technologies: ["Python", "Backend", "API"],
    github: "https://github.com/andylaique/POS-FastAPI",
  },
  {
    title: "IoT Dashboard",
    description:
      "A dashboard project for displaying and monitoring information from an IoT system.",
    technologies: ["JavaScript", "IoT", "Dashboard"],
    github: "https://github.com/andylaique/IoT-Dashboard",
  },
  {
    title: "Connect 4 Game",
    description:
      "A classic Connect 4 game where two players take turns dropping colored discs into a grid to connect four in a row.",
    technologies: ["JavaScript", "QA", "Testing"],
    github: "https://github.com/andylaique/Connect-4-game_Next.js",
  },
  {
    title: "Cypress Automation",
    description:
      "An automated testing project using Cypress to test web application functionality.",
    technologies: ["JavaScript", "Cypress", "Automation"],
    github: "https://github.com/andylaique/Fundamentals-Cypress",
  },
  {
    title: "Registration App",
    description:
      "A Python application demonstrating registration functionality and application logic.",
    technologies: ["Python"],
    github: "https://github.com/andylaique/Registration",
  },
  {
    title: "Fan Page",
    description:
      "A responsive web page built while practicing modern React and Next.js development.",
    technologies: ["React", "Next.js", "JavaScript"],
    github: "https://github.com/andylaique/myfavpage.assignment",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="fixed left-0 right-0 top-0 z-50 bg-[#0a1d2a] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold tracking-wide"
          >
            Andy Laique Ineza Teta<span className="text-blue-300"></span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="font-medium transition hover:text-blue-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="font-medium transition hover:text-blue-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="font-medium transition hover:text-blue-300"
            >
              Skills
            </a>

            <a
              href="#services"
              className="font-medium transition hover:text-blue-300"
            >
              Services
            </a>

            <a
              href="#projects"
              className="font-medium transition hover:text-blue-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg bg-white px-5 py-2 font-semibold text-[#0B1F3A] transition hover:bg-blue-50"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-blue-400 px-3 py-2 md:hidden"
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-blue-900 bg-[#0B1F3A] px-6 pb-5 md:hidden">
            <div className="flex flex-col gap-4 pt-4">
              <a href="#home" onClick={closeMenu}>
                Home
              </a>

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>

              <a href="#services" onClick={closeMenu}>
                Services
              </a>

              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>

              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32"
      >
        <div className="grid w-full items-center gap-14 md:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-[#0B1F3A]">
              Entry-level
              <br></br> Software Developer
            </p>

            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Greetings, <br></br> I&apos;m{" "}
              <span className="text-[#0B1F3A]">Andy Laique Ineza Teta</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I build practical web applications, backend systems, dashboards
              and digital solutions using modern technologies.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
              I&apos;m interested in software development, web development,
              backend systems, AI and technology projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-[#0B1F3A] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#07152A]"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border-2 border-[#0B1F3A] px-6 py-3 font-semibold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium">
              <a
                href="https://github.com/andylaique"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 transition hover:text-[#0B1F3A]"
              >
                GitHub →
              </a>

              <a
                href="#projects"
                className="text-slate-600 transition hover:text-[#0B1F3A]"
              >
                Projects →
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-[#DCE6F2] shadow-xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <Image
                src="/my_profile.png"
                alt="Andy Laique Ineza Teta"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#F3F6FA] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#0B1F3A]">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Building useful technology
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-lg leading-8 text-slate-600">
              I am a junior software developer with experience working with
              Python, JavaScript, React, Next.js, Dart, HTML and CSS. I also
              have experience with backend development, software testing and
              automation.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              I enjoy learning by building real projects and solving practical
              problems with technology. My goal is to continue developing my
              technical skills while contributing to teams, businesses and
              technology projects.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              I am open to junior developer opportunities, internships,
              freelance projects, remote work and international opportunities.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#0B1F3A]">
              My Skills
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Technologies I work with
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              A growing technical skill set focused on software development, web
              applications, backend systems and testing.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-200 bg-white p-5 text-center font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-[#0B1F3A] hover:text-[#0B1F3A] hover:shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#F3F6FA] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#0B1F3A]">
              What I Can Do
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Services
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B1F3A] text-xl text-white">
                &lt;/&gt;
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Web Development
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Building responsive and user-friendly websites and web
                applications using React, Next.js, JavaScript, HTML and CSS.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B1F3A] text-xl text-white">
                ⚙
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Backend Development
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Developing backend applications and APIs using Python and
                working with application data and business logic.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B1F3A] text-xl text-white">
                ✓
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Software Testing
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Testing web applications and creating automated tests using
                tools such as Cypress.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B1F3A] text-xl text-white">
                AI
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                AI & Technology
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Exploring artificial intelligence, machine learning and
                technology-based solutions to practical problems.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B1F3A] text-xl text-white">
                IoT
              </div>

              <h3 className="text-xl font-bold text-slate-900">IoT Projects</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Working with dashboards and software components connected to
                Internet of Things projects.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B1F3A] text-xl text-white">
                Git
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Project Collaboration
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Using Git and GitHub to manage code, collaborate on projects and
                maintain development work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#0B1F3A]">
              My Work
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured Projects
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Some of the projects I have worked on while developing my software
              engineering skills.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0B1F3A] hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B1F3A] font-bold text-white">
                  &lt;/&gt;
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#E8EEF5] px-3 py-1 text-sm font-medium text-[#0B1F3A]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-semibold text-[#0B1F3A] transition hover:text-blue-900"
                >
                  View on GitHub →
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://github.com/andylaique"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#0B1F3A] px-6 py-3 font-semibold text-white transition hover:bg-[#07152A]"
            >
              View All GitHub Projects
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#F3F6FA] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#0B1F3A]">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Let&apos;s work together
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              I&apos;m open to junior developer opportunities, internships,
              freelance projects and technology collaborations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Email */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Email</h3>

              <p className="mt-2 text-slate-600">
                Contact me for opportunities and projects.
              </p>

              <a
                href="mailto:andylaique@gmail.com"
                className="mt-4 inline-block font-semibold text-[#0B1F3A] hover:text-blue-900"
              >
                andylaique@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">GitHub</h3>

              <p className="mt-2 text-slate-600">
                View my projects and development work.
              </p>

              <a
                href="https://github.com/andylaique"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-semibold text-[#0B1F3A] hover:text-blue-900"
              >
                github.com/andylaique
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">LinkedIn</h3>

              <p className="mt-2 text-slate-600">
                Connect with me professionally.
              </p>

              <a
                href="https://www.linkedin.com/in/andy-laique-i-5b98bb225/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-semibold text-[#0B1F3A] hover:text-blue-900"
              >
                LinkedIn Profile →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Location</h3>

              <p className="mt-2 text-slate-600">Kigali, Rwanda</p>

              <p className="mt-4 font-semibold text-[#0B1F3A]">
                Open to remote & international opportunities
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-8 text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold">
              Have a project or opportunity?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              I&apos;d be happy to discuss how I can contribute to your team or
              project.
            </p>

            <a
              href="mailto:andylaique@gmail.com"
              className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-[#0B1F3A] transition hover:bg-slate-100"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0B1F3A] px-6 py-6 text-center">
        <p className="text-sm text-slate-300">
          © {new Date().getFullYear()} Andy Laique Ineza Teta. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}