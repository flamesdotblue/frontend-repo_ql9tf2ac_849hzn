import { Ticket, Calendar } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-violet-600/90">
              <Ticket className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-wide">NovaCine</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#now-showing" className="hover:text-white transition">Now Showing</a>
            <a href="#booking" className="hover:text-white transition flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Book</span>
            </a>
            <a href="#rentals" className="hover:text-white transition">Rentals</a>
          </nav>
          <a href="#booking" className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400">
            Buy Tickets
          </a>
        </div>
      </div>
    </header>
  );
}
