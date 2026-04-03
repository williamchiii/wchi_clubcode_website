import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Club C.O.D.E.",
};

const faqs = [
  {
    question: "Where and when do you meet?",
    answer:
      "We meet every week on campus. Check our events page or calendar for the latest meeting times and locations.",
  },
  {
    question: "How do I join?",
    answer:
      "Joining is easy! Just show up to one of our general meetings or events. There are no prerequisites — everyone is welcome regardless of experience level.",
  },
  {
    question: "How do I join a team?",
    answer:
      "Teams are open to all members. Attend a general meeting to learn about active teams, then reach out to the team lead or join their channel on Discord.",
  },
  {
    question: "What projects are you working on?",
    answer:
      "Our teams work on a variety of projects including web apps, mobile apps, games, and more. Check the Teams page to see what each group is building.",
  },
  {
    question: "What events do you host?",
    answer:
      "We host workshops, hackathons, tech talks, social events, and study sessions throughout the semester. See our Events page for upcoming activities.",
  },
  {
    question: "What does membership involve?",
    answer:
      "General membership gives you access to all events and the Discord community. Team membership means actively contributing to a project alongside your teammates.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Our Story */}
      <section>
        <h1 className="text-4xl font-bold">Our Story</h1>
        <div className="mt-6 text-lg text-base-content/80 space-y-4">
          <p>
            Club C.O.D.E. was founded by a group of students who believed that
            the best way to learn technology is by building things together. What
            started as a small study group has grown into a thriving community of
            developers, designers, and tech enthusiasts.
          </p>
          <p>
            Our mission is simple: Collaborate, Organize, Divide, and Execute.
            We bring students together to work on real projects, learn new
            skills, and support each other along the way. Whether you are a
            complete beginner or an experienced developer, there is a place for
            you here.
          </p>
          <p>
            Through hands-on workshops, team projects, and community events, we
            aim to bridge the gap between classroom learning and real-world
            experience.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold">FAQs</h2>
        <div className="mt-6 space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="collapse collapse-arrow bg-base-200 rounded-box"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title font-mono text-lg">
                $ {faq.question}
              </div>
              <div className="collapse-content font-mono">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
