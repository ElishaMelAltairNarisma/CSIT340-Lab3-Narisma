import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 py-4 px-8 flex justify-between items-center bg-white sticky top-0 z-10">
      <a href="#" className="font-bold text-lg text-black">
        Elisha Mel Altair Narisma
      </a>
      <div className="flex gap-6 text-sm">
        <NavLink href="#about" label="About" />
        <NavLink href="#skills" label="Skills" />
        <NavLink href="#projects" label="Projects" />
        <NavLink href="#experience" label="Experience" />
        <NavLink href="#contact" label="Contact" />
      </div>
    </nav>
  );
}