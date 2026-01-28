import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white/50 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-[#5b21b6] font-serif text-lg italic">
              "Knowledge shared multiplies"
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Ancient wisdom for modern success
            </p>
          </div>

          <nav className="flex gap-6">
            <Link
              href="/topics"
              className="text-gray-600 hover:text-[#5b21b6] transition-colors text-sm"
            >
              Topics
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#5b21b6] transition-colors text-sm"
            >
              About
            </Link>
          </nav>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aryash Health. All rights reserved.</p>
          <p className="mt-1">
            Educational content for learning purposes. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
