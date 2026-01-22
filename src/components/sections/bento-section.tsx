export function BentoSection() {
  return (
    <div className="min-h-screen bg-[#1a1512] text-white flex items-center justify-center relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold uppercase mb-8">Our Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          <div className="bg-[#2a2522] rounded-3xl p-6 md:col-span-2">
            <h3 className="text-2xl font-bold">Signature Latte</h3>
          </div>
          <div className="bg-[#2a2522] rounded-3xl p-6">
            <h3 className="text-2xl font-bold">Kenangan Blend</h3>
          </div>
          <div className="bg-[#2a2522] rounded-3xl p-6">
            <h3 className="text-2xl font-bold">Merchandise</h3>
          </div>
          <div className="bg-[#2a2522] rounded-3xl p-6 md:col-span-2">
            <h3 className="text-2xl font-bold">App Exclusive</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
