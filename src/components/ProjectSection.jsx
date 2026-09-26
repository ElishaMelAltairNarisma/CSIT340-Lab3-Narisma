import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 px-8 max-w-4xl mx-auto border-b border-gray-100">
      <SectionHeading title="Projects" subtitle="Things I have built." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <ProjectCard 
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/ElishaMelAltairNarisma/CSIT340-Lab1-Narisma"
        />
        <ProjectCard 
          year="2026"
          title="CSIT340 Lab 3"
          description="A page that shows how long the canteen line is so students can decide when to go."
          tech="HTML · CSS · JavaScript"
          link="https://github.com/ElishaMelAltairNarisma/CSIT340-Lab3-Narisma"
        />
        <ProjectCard 
          year="2026"
          title="Crew Sync"
          description="A git activity project from one of our professors."
          tech="Git · GitHub"
          link="https://github.com/ElishaMelAltairNarisma/git-crew-sync-narisma-elishamelaltair"
        />
        <ProjectCard 
          year="2026"
          title="CEMS (Campus Event Management System)"
          description="A database that manages campus events and registrations."
          tech="HTML · CSS . MySQL · PHP"
          link="https://github.com/ElishaMelAltairNarisma/cems"
        />
      </div>
    </section>
  );
}