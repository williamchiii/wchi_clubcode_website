export type Team = {
  id: string;
  name: string;
  description?: string;
  members: string[];
};

export type Exec = {
  id: string;
  name: string;
  role: string;
  bio?: string;
};

export const execs: Exec[] = [
  { id: "e1", name: "Alex Johnson", role: "President", bio: "Leads the club and coordinates events." },
  { id: "e2", name: "Priya Singh", role: "Vice President", bio: "Supports operations and outreach." },
  { id: "e3", name: "Daniel Kim", role: "Treasurer", bio: "Manages finances and budgets." },
];

export const teams: Team[] = [
  {
    id: "t1",
    name: "Web Development",
    description: "Builds and maintains the club website and web projects.",
    members: ["Alice", "Bob", "Charlie"],
  },
  {
    id: "t2",
    name: "Design",
    description: "Creates graphics, branding, and UI/UX work.",
    members: ["Dana", "Eve"],
  },
  {
    id: "t3",
    name: "Events",
    description: "Plans workshops, talks, and social events.",
    members: ["Frank", "Grace", "Heidi"],
  },
];
