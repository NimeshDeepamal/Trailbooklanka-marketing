import logo from "../assets/sigiriya.jpg"; // Replace with your actual logo path

const quickLinks = [
  { text: "Home", href: "#" },
  { text: "Destinations", href: "#Destinations" },
  { text: "Our Services", href: "#Our-Services" },
  { text: "Testimonials", href: "#Testimonials" },
  { text: "Blogs", href: "#Blogs" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/introvera/", icon: "fab fa-linkedin", label: "LinkedIn" },
  { href: "https://www.facebook.com/profile.php?id=61577711031531", icon: "fab fa-facebook", label: "Facebook" },
  { href: "", icon: "fab fa-instagram", label: "Instagram" },
  { href: "https://github.com/Introvera-sl", icon: "fab fa-github", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="bg-[#2F2F2F] text-neutral-300 px-6 md:px-12 py-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Description */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <img src={logo} alt="Introvera Logo" className="w-32 h-auto" />
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
            Empowering businesses with intelligent, scalable, and secure software solutions.
            We build with passion and purpose for the digital future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-white transition">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold mb-3">For Travelers</h4>
          <a href="#" className="space-y-2 text-sm">How It Works</a> <br />
          <a href="#" className="space-y-2 text-sm">Safety Resources</a> <br />
          <a href="#" className="space-y-2 text-sm">Travel Tips</a> <br />

          <h4 className="text-white font-semibold mb-3 mt-3">For Guides</h4>
          <a href="#" className="space-y-2 text-sm">Become a Guide</a> <br />
          <a href="#" className="space-y-2 text-sm">Guide Portal Login</a>
        </div>

        {/* Contact */}
        <div>
  <h4 className="text-white font-semibold mb-3">Contact</h4>
  <p className="text-sm mb-2">📍 Kaduwela, Sri Lanka</p>
  <p className="text-sm mb-2">📞 +94 6782 225</p>
  <p className="text-sm mb-4">
    📧{" "}
    <a href="mailto:teamintrovera@gmail.com" className="hover:text-white">
      teamintrovera@gmail.com
    </a>
  </p>

  {/* Social icons row */}
  <div className="flex gap-4 text-white text-lg mt-2">
    {socialLinks.map((link, idx) => (
      <a
        key={idx}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition"
      >
        <i className={link.icon}></i>
      </a>
    ))}
  </div>
</div>

      </div>

      {/* Divider & Bottom Bar */}
      <div className="border-t border-neutral-800 mt-12 pt-6 text-sm text-center text-neutral-500">
        &copy; {new Date().getFullYear()} Introvera. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
