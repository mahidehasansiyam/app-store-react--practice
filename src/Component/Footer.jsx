import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-white text-2xl font-bold tracking-tight mb-4">
            BRAND<span className="text-blue-500">.</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Building digital experiences with precision and care. Creating
            solutions that matter.
          </p>
        </div>

        {/* Links Section 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Press Kit
              </a>
            </li>
          </ul>
        </div>

        {/* Links Section 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter/Contact Section */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">
            Contact
          </h3>
          <p className="text-sm mb-4">mahidehasansiyam123@gmail.com</p>
          <div className="flex flex-col gap-2">
            <button className="bg-white text-gray-900 px-4 py-2 rounded font-medium text-sm hover:bg-gray-200 transition-all text-center">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {currentYear} Brand Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white underline underline-offset-4">
            Twitter
          </a>
          <a href="#" className="hover:text-white underline underline-offset-4">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white underline underline-offset-4">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;