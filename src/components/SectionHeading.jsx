export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-black mb-1">{title}</h2>
      <p className="text-gray-600 text-sm">{subtitle}</p>
    </div>
  );
}