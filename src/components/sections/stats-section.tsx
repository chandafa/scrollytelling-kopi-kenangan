import { CountUp } from "@/components/ui/count-up";

export function StatsSection() {
  return (
    <div className="min-h-[50vh] bg-[#1a1512] text-white flex items-center justify-center relative z-10 py-24">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        <div>
           <div className="text-5xl md:text-7xl font-bold font-outfit text-[#d6cfc7] flex justify-center">
             <CountUp value={800} />+
           </div>
           <div className="uppercase tracking-widest mt-4 text-sm">Stores</div>
        </div>
        <div>
           <div className="text-5xl md:text-7xl font-bold font-outfit text-[#d6cfc7] flex justify-center">
             <CountUp value={50} />M+
           </div>
           <div className="uppercase tracking-widest mt-4 text-sm">Cups Served</div>
        </div>
        <div>
           <div className="text-5xl md:text-7xl font-bold font-outfit text-[#d6cfc7] flex justify-center">
             <CountUp value={45} />+
           </div>
           <div className="uppercase tracking-widest mt-4 text-sm">Cities</div>
        </div>
        <div>
           <div className="text-5xl md:text-7xl font-bold font-outfit text-[#d6cfc7] flex justify-center">
             <CountUp value={100} />%
           </div>
           <div className="uppercase tracking-widest mt-4 text-sm">Indonesia</div>
        </div>
      </div>
    </div>
  );
}
