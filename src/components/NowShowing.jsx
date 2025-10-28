import { Clock, Star } from 'lucide-react';

const films = [
  {
    title: 'Galactic Odyssey',
    rating: 'PG-13',
    runtime: 142,
    poster:
      'https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1400&auto=format&fit=crop',
    showtimes: ['1:15', '4:30', '7:45', '10:15'],
  },
  {
    title: 'Neon City Nights',
    rating: 'R',
    runtime: 119,
    poster:
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1400&auto=format&fit=crop',
    showtimes: ['12:00', '3:00', '6:15', '9:30'],
  },
  {
    title: 'Echoes of Tomorrow',
    rating: 'PG',
    runtime: 104,
    poster:
      'https://images.unsplash.com/photo-1502139214984-785ce04f53f1?q=80&w=1400&auto=format&fit=crop',
    showtimes: ['11:30', '2:45', '5:45', '8:45'],
  },
];

export default function NowShowing() {
  return (
    <section id="now-showing" className="relative bg-gradient-to-b from-black to-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Now Showing</h2>
            <p className="mt-2 text-white/70">Premium formats. Reserved recliners. Ice-cold concessions.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {films.map((film) => (
            <article key={film.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={film.poster}
                  alt={`${film.title} poster`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{film.title}</h3>
                  <span className="rounded-md border border-white/15 px-2 py-0.5 text-xs text-white/80">{film.rating}</span>
                </div>
                <div className="mt-2 flex items-center gap-4 text-sm text-white/70">
                  <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{film.runtime}m</span>
                  <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400" />IMAX • Atmos</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {film.showtimes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
