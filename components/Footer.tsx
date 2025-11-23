export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Sirzan Portfolio</h2>
          <p className="text-sm text-gray-400">Building cool apps, learning, and growing every day.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Me</h3>
          <div className="flex items-center space-x-4 text-gray-300">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sirzan. All Rights Reserved.
      </div>
    </footer>
  );
}
