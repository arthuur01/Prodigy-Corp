export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm">© {new Date().getFullYear()} Prodigy Corporation</p>
            <p className="text-xs text-gray-500">All rights reserved.</p>
            <p className="mt-2 text-xs text-gray-500 max-w-2xl">
              This website is intended solely for educational purposes. Created by Arthur Miguel Vieira Mapa,
              a Computer Science student.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


