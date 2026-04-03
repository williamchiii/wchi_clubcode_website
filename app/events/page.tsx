import type { Metadata } from "next";
import { client } from "../../sanity/lib/client";
import EventCard from "../../components/EventCard";

export const metadata: Metadata = {
  title: "Events — Club C.O.D.E.",
};

// Fallback data when Sanity is empty
const fallbackUpcoming = [
  {
    _id: "ev1",
    title: "Intro to Web Development Workshop",
    date: "2026-04-15T18:00:00Z",
    description: "Learn the basics of HTML, CSS, and JavaScript in this hands-on workshop.",
    location: "CSE Building, Room 220",
    link: null,
  },
  {
    _id: "ev2",
    title: "Spring Hackathon",
    date: "2026-04-22T09:00:00Z",
    description: "A 24-hour hackathon open to all skill levels. Form a team and build something awesome!",
    location: "Reitz Union, Grand Ballroom",
    link: null,
  },
  {
    _id: "ev3",
    title: "Resume Review Night",
    date: "2026-05-01T17:30:00Z",
    description: "Get your resume reviewed by peers and industry professionals.",
    location: "Marston Science Library",
    link: null,
  },
];

const fallbackPast = [
  {
    _id: "ev4",
    title: "Git & GitHub Workshop",
    date: "2026-03-10T18:00:00Z",
    description: "Covered version control fundamentals, branching, and pull requests.",
    location: "CSE Building, Room 220",
    link: null,
  },
  {
    _id: "ev5",
    title: "Club Kickoff Meeting",
    date: "2026-01-20T18:00:00Z",
    description: "Welcomed new members and introduced teams and upcoming plans for the semester.",
    location: "Reitz Union, Room 346",
    link: null,
  },
];

type SanityEvent = {
  _id: string;
  title: string;
  date: string;
  description: string | null;
  location: string | null;
  link: string | null;
};

export default async function EventsPage() {
  const now = new Date().toISOString();
  let upcoming: SanityEvent[] = [];
  let past: SanityEvent[] = [];

  try {
    upcoming = await client.fetch(
      `*[_type == "event" && date >= $now] | order(date asc) { _id, title, date, description, location, link }`,
      { now }
    );
    past = await client.fetch(
      `*[_type == "event" && date < $now] | order(date desc) { _id, title, date, description, location, link }`,
      { now }
    );
  } catch {
    // Sanity fetch failed, use fallbacks
  }

  const displayUpcoming = upcoming.length > 0 ? upcoming : fallbackUpcoming;
  const displayPast = past.length > 0 ? past : fallbackPast;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold">Events</h1>

      {/* Upcoming Events */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        <h3 className="p-2">*These are placeholders. They are not real events.</h3>
        <div className="mt-4 space-y-4">
          {displayUpcoming.length > 0 ? (
            displayUpcoming.map((event) => (
              <EventCard
                key={event._id}
                title={event.title}
                date={event.date}
                description={event.description ?? undefined}
                location={event.location ?? undefined}
                link={event.link ?? undefined}
              />
            ))
          ) : (
            <p className="text-base-content/50">No upcoming events.</p>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-base-content/50">
          Past Events
        </h2>
        <div className="mt-4 space-y-4">
          {displayPast.length > 0 ? (
            displayPast.map((event) => (
              <EventCard
                key={event._id}
                title={event.title}
                date={event.date}
                description={event.description ?? undefined}
                location={event.location ?? undefined}
                link={event.link ?? undefined}
              />
            ))
          ) : (
            <p className="text-base-content/50">No past events.</p>
          )}
        </div>
      </section>
    </div>
  );
}
