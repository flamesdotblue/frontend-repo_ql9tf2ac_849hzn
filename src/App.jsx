import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import NowShowing from './components/NowShowing';
import BookingSection from './components/BookingSection';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} NovaCine Theaters. All rights reserved.</p>
        <div className="text-sm flex items-center gap-6">
          <a href="#now-showing" className="hover:text-white">Now Showing</a>
          <a href="#booking" className="hover:text-white">Tickets</a>
          <a href="#rentals" className="hover:text-white">Rentals</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <HeroSpline />
      <NowShowing />
      <BookingSection />
      <Footer />
    </div>
  );
}
