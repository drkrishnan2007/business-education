import Link from 'next/link';

interface LessonCardProps {
  number: number;
  title: string;
  description: string;
  href?: string;
  isActive?: boolean;
  isCompleted?: boolean;
}

export default function LessonCard({
  number,
  title,
  description,
  href,
  isActive = false,
  isCompleted = false,
}: LessonCardProps) {
  const CardContent = () => (
    <div className="flex items-start gap-4">
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
          isActive
            ? 'bg-[#5b21b6] text-white'
            : isCompleted
            ? 'bg-green-500 text-white'
            : 'bg-gray-200 text-gray-500'
        }`}
      >
        {isCompleted ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          number
        )}
      </div>
      <div className="flex-1">
        <h3 className={`font-serif text-lg ${isActive ? 'text-[#5b21b6]' : 'text-gray-500'}`}>
          {title}
        </h3>
        <p className={`text-sm mt-1 ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
          {description}
        </p>
        {!isActive && !isCompleted && (
          <span className="inline-block mt-2 text-xs text-gray-400">Coming soon</span>
        )}
      </div>
      {isActive && (
        <div className="flex-shrink-0 self-center">
          <svg
            className="w-5 h-5 text-[#5b21b6]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );

  if (isActive && href) {
    return (
      <Link
        href={href}
        className="card p-4 block hover:border-[#5b21b6] border-2 border-transparent"
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <div className={`card p-4 ${!isActive && !isCompleted ? 'opacity-60' : ''}`}>
      <CardContent />
    </div>
  );
}
