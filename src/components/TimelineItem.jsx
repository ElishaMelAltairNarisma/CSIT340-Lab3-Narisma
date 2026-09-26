export default function TimelineItem({ period, title, place, description }) {
  return (
    <li className="mb-8 last:mb-0">
      <span className="text-xs text-gray-400 block mb-1">{period}</span>
      <h3 className="text-base font-bold text-black">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{place}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </li>
  );
}