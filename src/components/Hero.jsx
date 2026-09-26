export default function Hero() {
  return (
    <header className="py-20 px-8 max-w-4xl mx-auto border-b border-gray-100">
      <p className="text-gray-600 mb-2 text-sm">Hi, I'm</p>
      <h1 className="text-5xl font-extrabold text-black mb-4">
        Elisha Mel Altair Narisma
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        A third year IT student who aspires to be a successful professional in the field.
      </p>
      <div className="flex gap-4">
        <a 
          href="#projects" 
          className="bg-zinc-900 text-white font-medium px-5 py-2.5 rounded-lg text-sm hover:bg-black transition-colors"
        >
          See my projects
        </a>
        <a 
          href="#contact" 
          className="border border-gray-300 text-black font-medium px-5 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
        >
          Contact me
        </a>
      </div>
    </header>
  );
}