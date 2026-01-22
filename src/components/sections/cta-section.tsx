export function CTASection() {
  return (
    <div className="min-h-screen bg-[#d6cfc7] text-[#1a1512] flex items-center justify-center relative z-10 rounded-t-[3rem]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-6xl md:text-8xl font-bold uppercase mb-8 tracking-tighter">
          Craving Coffee?
        </h2>
        <button className="px-12 py-6 bg-[#1a1512] text-white rounded-full text-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform">
          Order on App
        </button>
      </div>
    </div>
  );
}
