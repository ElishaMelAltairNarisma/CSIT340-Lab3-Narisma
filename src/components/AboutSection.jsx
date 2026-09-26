import SectionHeading from "./SectionHeading";
import Fact from "./Fact";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 px-8 max-w-4xl mx-auto border-b border-gray-100">
      <SectionHeading title="About" subtitle="A little about who I am." />
      
      <p className="text-gray-700 mb-8 leading-relaxed text-sm">
        I was born in Mandaue but is raised in Lapu-Lapu. I chose to take up BS Information Technology because I am interested in how computer programming, databases, and networking work. I am currently a third-year student at Cebu Institute of Technology – University.
      </p>

      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  );
}