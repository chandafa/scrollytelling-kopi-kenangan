export function Footer() {
  return (
    <footer className="bg-[#1a1512] text-white py-24 relative z-10 border-t border-[#2a2522]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h3 className="text-2xl font-bold uppercase mb-4">Kopi Kenangan</h3>
          <p className="text-[#d6cfc7] mb-4">Halal Certified Coffee Chain.</p>
          <div className="text-sm text-[#d6cfc7]/60">
            &copy; 2026 Candra Kirana. All rights reserved.
          </div>
        </div>
         <div className="flex flex-col md:items-end">
          <h4 className="font-bold uppercase mb-4 text-[#d6cfc7]">Connect</h4>
          <ul className="space-y-2 text-right">
            <li><a href="https://github.com/chandafa" target="_blank" rel="noopener noreferrer" className="hover:text-[#d6cfc7] transition-colors">GitHub (@chandafa)</a></li>
            <li><a href="https://www.instagram.com/chann.ck" target="_blank" rel="noopener noreferrer" className="hover:text-[#d6cfc7] transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
