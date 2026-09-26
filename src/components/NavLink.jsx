export default function NavLink({ href, label }) {
  return (
    <a href={href} className="text-gray-600 hover:text-black transition-colors">
      {label}
    </a>
  );
}