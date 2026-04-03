import type { Metadata } from "next";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import MemberCard from "../../components/MemberCard";

export const metadata: Metadata = {
  title: "Team — Club C.O.D.E.",
};

// Fallback data when Sanity is empty
const fallbackEboard = [
  { _id: "e1", name: "Alex Johnson", role: "President", photo: null, bio: null },
  { _id: "e2", name: "Priya Singh", role: "Vice President", photo: null, bio: null },
  { _id: "e3", name: "Daniel Kim", role: "Treasurer", photo: null, bio: null },
  { _id: "e4", name: "Maya Chen", role: "Secretary", photo: null, bio: null },
];

const fallbackTeams = [
  {
    _id: "t1",
    name: "Web Development",
    description: "Builds and maintains the club website and web projects.",
    lead: { _id: "m1", name: "Alice Park", role: "Web Dev Lead", photo: null },
    members: [
      { _id: "m2", name: "Bob Rivera", role: "Member", photo: null },
      { _id: "m3", name: "Charlie Nguyen", role: "Member", photo: null },
    ],
  },
  {
    _id: "t2",
    name: "Design",
    description: "Creates graphics, branding, and UI/UX work.",
    lead: { _id: "m4", name: "Dana Lee", role: "Design Lead", photo: null },
    members: [
      { _id: "m5", name: "Eve Martinez", role: "Member", photo: null },
    ],
  },
  {
    _id: "t3",
    name: "Events",
    description: "Plans workshops, talks, and social events.",
    lead: { _id: "m6", name: "Frank Zhao", role: "Events Lead", photo: null },
    members: [
      { _id: "m7", name: "Grace Kim", role: "Member", photo: null },
      { _id: "m8", name: "Heidi Brown", role: "Member", photo: null },
    ],
  },
];

type SanityMember = {
  _id: string;
  name: string;
  role: string;
  photo: { asset: { _ref: string } } | null;
  bio: string | null;
};

type SanityTeam = {
  _id: string;
  name: string;
  description: string | null;
  lead: SanityMember | null;
  members: SanityMember[];
};

export default async function TeamsPage() {
  let eboard: SanityMember[] = [];
  let teams: SanityTeam[] = [];

  try {
    eboard = await client.fetch(
      `*[_type == "member" && isEboard == true] | order(order asc) { _id, name, role, photo, bio }`
    );
    teams = await client.fetch(
      `*[_type == "team"] | order(order asc) {
        _id, name, description,
        "lead": *[_type == "member" && references(^._id) && role match "*Lead*"][0] { _id, name, role, photo, bio },
        "members": *[_type == "member" && references(^._id) && !(role match "*Lead*")] | order(name asc) { _id, name, role, photo }
      }`
    );
  } catch {
    // Sanity fetch failed, use fallbacks
  }

  const displayEboard = eboard.length > 0 ? eboard : fallbackEboard;
  const displayTeams = teams.length > 0 ? teams : fallbackTeams;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold">Team</h1>
      <h3 className="p-2">*These are placeholders for now...</h3>

      {/* E-Board */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">E-Board</h2>
        <div className="flex overflow-x-auto gap-4 py-6">
          {displayEboard.map((member) => (
            <MemberCard
              key={member._id}
              name={member.name}
              role={member.role}
              photoUrl={
                member.photo
                  ? urlFor(member.photo).width(200).height(200).url()
                  : undefined
              }
            />
          ))}
        </div>
      </section>

      {/* Teams */}
      <section className="mt-12 space-y-12">
        {displayTeams.map((team) => (
          <div key={team._id}>
            <h3 className="text-xl font-semibold">{team.name}</h3>
            {team.description && (
              <p className="mt-1 text-base-content/70">{team.description}</p>
            )}
            <div className="flex flex-wrap gap-4 mt-4">
              {team.lead && (
                <MemberCard
                  name={team.lead.name}
                  role={team.lead.role}
                  photoUrl={
                    team.lead.photo
                      ? urlFor(team.lead.photo).width(200).height(200).url()
                      : undefined
                  }
                />
              )}
              {team.members.map((member) => (
                <MemberCard
                  key={member._id}
                  name={member.name}
                  role={member.role}
                  photoUrl={
                    member.photo
                      ? urlFor(member.photo).width(200).height(200).url()
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
