import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { useState } from 'react';

export default function BookingSection() {
  const [ticketsForm, setTicketsForm] = useState({ movie: 'Galactic Odyssey', date: '', time: '', qty: 2 });
  const [rentalForm, setRentalForm] = useState({ occasion: 'Private Screening', date: '', start: '', hours: 3 });

  function submitTickets(e) {
    e.preventDefault();
    const summary = `Tickets: ${ticketsForm.qty} for ${ticketsForm.movie} on ${ticketsForm.date} at ${ticketsForm.time}`;
    alert(summary);
  }

  function submitRental(e) {
    e.preventDefault();
    const summary = `Rental: ${rentalForm.occasion} on ${rentalForm.date} starting ${rentalForm.start} for ${rentalForm.hours} hours`;
    alert(summary);
  }

  return (
    <section id="booking" className="relative bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Book Your Experience</h2>
            <p className="mt-2 text-white/70">Secure seats for today or reserve a private auditorium.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2" id="rentals">
          {/* Tickets */}
          <form onSubmit={submitTickets} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-violet-600/90">
                <Ticket className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">Buy Tickets</h3>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-white/80">Movie</label>
                <select
                  value={ticketsForm.movie}
                  onChange={(e) => setTicketsForm({ ...ticketsForm, movie: e.target.value })}
                  className="mt-1 w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-violet-400"
                >
                  <option>Galactic Odyssey</option>
                  <option>Neon City Nights</option>
                  <option>Echoes of Tomorrow</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/80">Quantity</label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={ticketsForm.qty}
                  onChange={(e) => setTicketsForm({ ...ticketsForm, qty: Number(e.target.value) })}
                  className="mt-1 w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-violet-400"
                />
              </div>
              <div>
                <label className="block text-sm text-white/80">Date</label>
                <div className="mt-1 flex items-center gap-2 rounded-md border border-white/15 bg-black/40 px-3">
                  <Calendar className="h-4 w-4 text-white/60" />
                  <input
                    type="date"
                    value={ticketsForm.date}
                    onChange={(e) => setTicketsForm({ ...ticketsForm, date: e.target.value })}
                    className="w-full bg-transparent py-2 text-white outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/80">Showtime</label>
                <div className="mt-1 flex items-center gap-2 rounded-md border border-white/15 bg-black/40 px-3">
                  <Clock className="h-4 w-4 text-white/60" />
                  <input
                    type="time"
                    value={ticketsForm.time}
                    onChange={(e) => setTicketsForm({ ...ticketsForm, time: e.target.value })}
                    className="w-full bg-transparent py-2 text-white outline-none"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              Proceed to Payment
            </button>
          </form>

          {/* Rentals */}
          <form onSubmit={submitRental} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600/90">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">Auditorium Rentals</h3>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/80">Occasion</label>
                <select
                  value={rentalForm.occasion}
                  onChange={(e) => setRentalForm({ ...rentalForm, occasion: e.target.value })}
                  className="mt-1 w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <option>Private Screening</option>
                  <option>Birthday Party</option>
                  <option>Corporate Event</option>
                  <option>Gaming Tournament</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/80">Date</label>
                <div className="mt-1 flex items-center gap-2 rounded-md border border-white/15 bg-black/40 px-3">
                  <Calendar className="h-4 w-4 text-white/60" />
                  <input
                    type="date"
                    value={rentalForm.date}
                    onChange={(e) => setRentalForm({ ...rentalForm, date: e.target.value })}
                    className="w-full bg-transparent py-2 text-white outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/80">Start Time</label>
                <div className="mt-1 flex items-center gap-2 rounded-md border border-white/15 bg-black/40 px-3">
                  <Clock className="h-4 w-4 text-white/60" />
                  <input
                    type="time"
                    value={rentalForm.start}
                    onChange={(e) => setRentalForm({ ...rentalForm, start: e.target.value })}
                    className="w-full bg-transparent py-2 text-white outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/80">Duration (hours)</label>
                <input
                  type="number"
                  min={1}
                  max={8}
                  value={rentalForm.hours}
                  onChange={(e) => setRentalForm({ ...rentalForm, hours: Number(e.target.value) })}
                  className="mt-1 w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
