import { TextReveal } from "@/components/ui/text-reveal";

export function AboutSection() {
  return (
    <div className="min-h-screen bg-[#1a1512] text-white flex items-center justify-center relative z-10 -mt-[100vh] pt-[100vh]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold uppercase mb-12 text-[#d6cfc7]">The Approach</h2>
        <TextReveal 
          text="Kopi Kenangan is one of the fastest growing new retail F&B chain in Indonesia. We plan to become the leading coffee chain in Indonesia and beyond by leveraging a New Retail environment." 
          className="text-3xl md:text-5xl leading-tight"
        />
      </div>
    </div>
  );
}
