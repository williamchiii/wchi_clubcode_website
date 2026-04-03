type EventCardProps = {
  title: string;
  date: string;
  description?: string;
  location?: string;
  link?: string;
};

export default function EventCard({
  title,
  date,
  description,
  location,
  link,
}: EventCardProps) {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="text-sm text-base-content/70">
          {formatted}
          {location && ` · ${location}`}
        </p>
        {description && <p className="mt-2">{description}</p>}
        {link && (
          <div className="card-actions justify-end mt-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
            >
              Details
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
