export default function Fact({ label, value }) {
  return (
    <div>
      <dt className="text-xs text-gray-500 mb-1">{label}</dt>
      <dd className="text-sm font-bold text-black leading-snug">{value}</dd>
    </div>
  );
}