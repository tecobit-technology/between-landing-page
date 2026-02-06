const Footer = () => {
  return (
    <footer className="py-12 border-t border-[#EAE8E4] bg-[#FAF8F6]/80 backdrop-blur-md">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded bg-[#CD848C] flex items-center justify-center">
                <span className="text-xs font-serif font-bold text-white mt-0.5">B</span>
              </div>
              <span className="font-serif text-xl text-[#3A3535]">Between</span>
            </a>
            <p className="text-[#8A8585] max-w-sm mb-6">
              A digital sanctuary designed to help couples disconnect from the noise and reconnect with each other.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-[#EAE8E4] hover:bg-[#CD848C] transition-colors cursor-pointer" />
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-[#3A3535] mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#8A8585] hover:text-[#CD848C] transition-colors">Features</a></li>
              <li><a href="#" className="text-[#8A8585] hover:text-[#CD848C] transition-colors">Philosophy</a></li>
              <li><a href="#" className="text-[#8A8585] hover:text-[#CD848C] transition-colors">Pricing</a></li>
              <li><a href="#" className="text-[#8A8585] hover:text-[#CD848C] transition-colors">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-[#3A3535] mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#8A8585] hover:text-[#CD848C] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[#8A8585] hover:text-[#CD848C] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[#8A8585] hover:text-[#CD848C] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#EAE8E4] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9A9595]">
          <p>© 2024 Between Inc. All rights reserved.</p>
          <p>Made with &hearts; for love.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
