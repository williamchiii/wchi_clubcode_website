import Image from "next/image";

const codeBreakdown = [
  {
    letter: "C",
    word: "Collaborate",
    description:
      "Work together across disciplines to build meaningful projects and learn from each other.",
  },
  {
    letter: "O",
    word: "Organize",
    description:
      "Structure our efforts through teams, events, and shared resources to stay effective.",
  },
  {
    letter: "D",
    word: "Divide",
    description:
      "Break down complex problems into manageable tasks and distribute work across teams.",
  },
  {
    letter: "E",
    word: "Execute",
    description:
      "Ship real projects, host events, and make a tangible impact on campus and beyond.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold">Club C.O.D.E.</h1>
            <p className="text-xl mt-3 text-base-content/70">
              Collaborate. Organize. Divide. Execute.
            </p>

            <div className="mt-10 space-y-6">
              {codeBreakdown.map((item) => (
                <div key={item.letter} className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-primary">
                    {item.letter}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.word}</h3>
                    <p className="text-base-content/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col items-center">
            <div className="avatar">
              <div className="w-64 rounded-full">
                <Image
                  src="/ClubCodeLogo.png"
                  alt="Club C.O.D.E. Logo"
                  width={256}
                  height={256}
                />
              </div>
            </div>
            <p className="mt-8 text-center text-base-content/70 max-w-sm">
              Club C.O.D.E. is a student-run organization dedicated to fostering
              a community of developers, designers, and tech enthusiasts. We
              build projects, host events, and help each other grow.
            </p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 flex justify-center gap-4 flex-wrap">
        <a href="https://discord.gg/BSHJzr6qsS" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
          </svg>
          Discord
        </a>
        <a href="https://www.instagram.com/clubcode_uf/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg>
          Instagram
        </a>
        <a href="/events" className="btn btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Calendar
        </a>
      </section>
    </div>
  );
}
