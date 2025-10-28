import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section className="relative min-h-[80vh] lg:h-[88vh] w-full overflow-hidden bg-black" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft vignette & gradient glow that doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28">
          <div className="max-w-2xl">
            <p className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
              Premium First-Run Films
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Experience Movies in Futuristic Comfort
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
              Immerse yourself in laser projection, thunderous Dolby Atmos, and plush recliners. Book the latest blockbusters or rent entire auditoriums for private events.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                Buy Tickets
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#rentals"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <Play className="h-4 w-4" />
                Rent an Auditorium
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
