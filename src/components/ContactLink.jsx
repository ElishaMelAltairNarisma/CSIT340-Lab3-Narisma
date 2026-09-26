export default function ContactLink({ label, href, text }) {
  return (
    <li className="flex items-center gap-12 text-sm">
      <span className="text-gray-400 w-16">{label}</span>
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="font-bold text-black hover:underline"
      >
        {text}
      </a>
    </li>
  );
}