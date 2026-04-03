import Image from "next/image";

type MemberCardProps = {
  name: string;
  role: string;
  photoUrl?: string;
};

export default function MemberCard({ name, role, photoUrl }: MemberCardProps) {
  return (
    <div className="card bg-base-200 w-48 shrink-0">
      <figure className="px-4 pt-4">
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={name}
            width={160}
            height={160}
            className="rounded-xl object-cover aspect-square"
          />
        ) : (
          <div className="w-40 h-40 rounded-xl bg-base-300 flex items-center justify-center text-3xl font-bold text-base-content/40">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
      </figure>
      <div className="card-body p-4 items-center text-center">
        <h4 className="card-title text-sm">{name}</h4>
        <p className="text-xs text-base-content/70">{role}</p>
      </div>
    </div>
  );
}
