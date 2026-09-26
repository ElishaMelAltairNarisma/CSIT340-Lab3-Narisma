import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 px-8 max-w-4xl mx-auto border-b border-gray-100">
      <SectionHeading title="Contact" subtitle="Say hi." />

      <ul className="mt-8 space-y-4">
        <ContactLink 
          label="Email" 
          href="https://myaccount.microsoft.com/?ref=MeControl" 
          text="elishamelaltair.narisma@cit.edu" 
        />
        <ContactLink 
          label="GitHub" 
          href="https://github.com/elishamelaltairnarisma" 
          text="github.com/elishamelaltairnarisma" 
        />
        <ContactLink 
          label="LinkedIn" 
          href="https://linkedin.com/in/elishamelaltairnarisma" 
          text="linkedin.com/in/elishamelaltairnarisma" 
        />
      </ul>
    </section>
  );
}