export default function ProjectCard({ year, title, description, tech, link }) {
  return (
    <article className="border border-gray-200 rounded-xl p-6 flex flex-col justify-between bg-white">
      <div>
        <span className="text-xs text-gray-400">{year}</span>
        <h3 className="text-lg font-bold text-black mt-2 mb-3">{title}</h3>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">{description}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-4">{tech}</p>
        <a 
          href={link || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm font-bold text-black underline underline-offset-4 hover:text-gray-600 transition-colors inline-block"
        >
          View on GitHub
        </a>
      </div>
    </article>
  );
}