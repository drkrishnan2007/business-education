import TopicCard from '@/components/TopicCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Topics - Business Wisdom',
  description: 'Explore business and management topics: money, business operations, people management, decision-making, leadership, negotiation, self-management, and marketing.',
};

const topics = [
  {
    title: 'How Money Works',
    description: 'Understand the basics of money, from its origins to how businesses use it today. Learn revenue, costs, profit, and the prosperity principle.',
    icon: '💰',
    href: '/topics/money',
    isActive: true,
  },
  {
    title: 'How Businesses Work',
    description: 'Discover how organisations create value, serve customers, and sustain themselves over time. From sole traders to global corporations.',
    icon: '🏢',
    href: '/topics/business',
    isActive: true,
  },
  {
    title: 'How People Work',
    description: 'Learn what motivates people, how teams function, and why understanding human nature is essential for any leader.',
    icon: '👥',
    href: '/topics/people',
    isActive: true,
  },
  {
    title: 'How Decisions Get Made',
    description: 'Explore frameworks for making better choices, managing uncertainty, and understanding how organisations make decisions.',
    icon: '🎯',
    href: '/topics/decisions',
    isActive: true,
  },
  {
    title: 'How to Lead',
    description: 'Discover leadership principles from ancient texts and modern research. Learn to inspire, guide, and serve others.',
    icon: '🧭',
    href: '/topics/business/leadership',
    isActive: true,
  },
  {
    title: 'How to Negotiate',
    description: 'Master the art of reaching agreements that benefit all parties. Learn principles that have worked for millennia.',
    icon: '🤝',
    href: '/topics/negotiation',
    isActive: true,
  },
  {
    title: 'How to Manage Yourself',
    description: 'Build the personal disciplines that underpin all success: time management, focus, resilience, and continuous learning.',
    icon: '🧘',
    href: '/topics/self',
    isActive: true,
  },
  {
    title: 'Marketing Fundamentals',
    description: 'Understand how to communicate value, build trust, and connect products with the people who need them.',
    icon: '📣',
    isActive: false,
  },
];

export default function TopicsPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Learning Topics
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Eight essential areas of business knowledge. Start with any topic,
            or begin your journey with how money works.
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
            More topics will be released over time. Start with &quot;How Money Works&quot;
            to begin your learning journey.
          </p>
        </div>
      </div>
    </div>
  );
}
