import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 px-8 max-w-4xl mx-auto border-b border-gray-100">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />

      <ol className="relative pl-6 border-l border-gray-200 mt-8 space-y-6">
        <TimelineItem 
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up computer programming, databases, and systems analysis but specialy interested in networking and databases."
        />
        <TimelineItem 
          period="2023 – 2024"
          title="Immersion Program, ICT Strand"
          place="Basak Baranggay, Lapu-Lapu City"
          description="Assisted in making baranggay clearance and other baranggay documents."
        />
        <TimelineItem 
          period="2022 – 2024"
          title="Senior High School, ICT Strand"
          place="University of Cebu – Lapu-Lapu and Mandaue Campus"
          description="Built my first RJ45 cable wire and breadboard and was hooked in the subject."
        />
      </ol>
    </section>
  );
}