import Link from 'next/link';
import TopicCard from '@/components/TopicCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foundations Track - Business Wisdom',
  description: 'Master business basics and timeless wisdom from ancient texts. Eight essential topics: money, business, people, decisions, leadership, negotiation, self-management, and marketing.',
};

const topics = [
  {
    title: 'How Money Works',
    description: 'Understand the basics of money, from its origins to how businesses use it today. Learn revenue, costs, profit, and the prosperity principle.',
    icon: '💰',
    href: '/foundations/money',
    isActive: true,
  },
  {
    title: 'How Businesses Work',
    description: 'Discover how organisations create value, serve customers, and sustain themselves over time. From sole traders to global corporations.',
    icon: '🏢',
    href: '/foundations/business',
    isActive: true,
  },
  {
    title: 'How People Work',
    description: 'Learn what motivates people, how teams function, and why understanding human nature is essential for any leader.',
    icon: '👥',
    href: '/foundations/people',
    isActive: true,
  },
  {
    title: 'How Decisions Get Made',
    description: 'Explore frameworks for making better choices, managing uncertainty, and understanding how organisations make decisions.',
    icon: '🎯',
    href: '/foundations/decisions',
    isActive: true,
  },
  {
    title: 'How to Lead',
    description: 'Discover leadership principles from ancient texts and modern research. Learn to inspire, guide, and serve others.',
    icon: '🧭',
    href: '/foundations/leadership',
    isActive: true,
  },
  {
    title: 'How to Negotiate',
    description: 'Master the art of reaching agreements that benefit all parties. Learn principles that have worked for millennia.',
    icon: '🤝',
    href: '/foundations/negotiation',
    isActive: true,
  },
  {
    title: 'How to Manage Yourself',
    description: 'Build the personal disciplines that underpin all success: time management, focus, resilience, and continuous learning.',
    icon: '🧘',
    href: '/foundations/self',
    isActive: true,
  },
  {
    title: 'Marketing Fundamentals',
    description: 'Understand how to communicate value, build trust, and connect products with the people who need them.',
    icon: '📣',
    href: '/foundations/marketing',
    isActive: true,
  },
];

export default function FoundationsPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Home
          </Link>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Foundations Track
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master business basics and timeless wisdom from ancient texts like the Arthashastra.
            Eight essential areas of knowledge. Start anywhere, or begin with how money works.
          </p>
        </header>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <TopicCard
              key={topic.title}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
              href={topic.href}
              isActive={topic.isActive}
            />
          ))}
        </div>

        {/* Coming Soon Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Start with &quot;How Money Works&quot; to begin your learning journey.
          </p>
        </div>
      </div>
    </div>
  );
}
