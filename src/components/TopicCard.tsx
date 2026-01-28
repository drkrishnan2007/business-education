import Link from 'next/link';

interface TopicCardProps {
  title: string;
  description: string;
  icon: string;
  href?: string;
  isActive?: boolean;
}

export default function TopicCard({
  title,
  description,
  icon,
  href,
  isActive = false,
}: TopicCardProps) {
  const CardContent = () => (
    <>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-serif text-[#5b21b6] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      {!isActive && (
        <span className="inline-block mt-4 text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
          Coming soon
        </span>
      )}
      {isActive && (
        <span className="inline-block mt-4 text-xs bg-[#5b21b6] text-white px-3 py-1 rounded-full">
          Start learning
        </span>
      )}
    </>
  );

  if (isActive && href) {
    return (
      <Link
        href={href}
        className="card p-6 block hover:border-[#5b21b6] border-2 border-transparent"
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <div className="card p-6 opacity-75 cursor-not-allowed">
      <CardContent />
    </div>
  );
}
