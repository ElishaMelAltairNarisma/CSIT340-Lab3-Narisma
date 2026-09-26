import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 px-8 max-w-4xl mx-auto border-b border-gray-100">
      <SectionHeading title="Skills" subtitle="What I work with." />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        {/* Languages: HTML, CSS, JavaScript, Java */}
        <div>
          <h3 className="text-sm text-gray-500 font-normal mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2 max-w-[200px]">
            <SkillTag name="HTML" />
            <SkillTag name="CSS" />
            <SkillTag name="JavaScript" />
            <SkillTag name="Java" />
          </div>
        </div>

        {/* Frameworks: React, Tailwind CSS, Bootstrap */}
        <div>
          <h3 className="text-sm text-gray-500 font-normal mb-3">Frameworks</h3>
          <div className="flex flex-wrap gap-2 max-w-[220px]">
            <SkillTag name="React" />
            <SkillTag name="Tailwind CSS" />
            <SkillTag name="Bootstrap" />
          </div>
        </div>

        {/* Tools: Git, VS Code, MySQL, Figma */}
        <div>
          <h3 className="text-sm text-gray-500 font-normal mb-3">Tools</h3>
          <div className="flex flex-wrap gap-2 max-w-[220px]">
            <SkillTag name="Git" />
            <SkillTag name="VS Code" />
            <SkillTag name="MySQL" />
            <SkillTag name="Figma" />
          </div>
        </div>
      </div>
    </section>
  );
}