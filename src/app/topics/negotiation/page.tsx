import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Negotiate - Business Wisdom',
  description: 'Learn the art of negotiation: finding agreements that work for everyone. Discover timeless wisdom from Chanakya on strategy and Thirukkural on fair dealing.',
};

const lessons = [
  {
    number: 1,
    title: 'What Negotiation Really Is',
    description: 'Negotiation is not about winning fights. It is about finding agreements that work for everyone involved.',
    href: '/topics/negotiation/what-is-negotiation',
    isActive: true,
  },
  {
    number: 2,
    title: 'Interests vs Positions',
    description: 'Learn the crucial difference between what people say they want and what they actually need.',
    href: '/topics/negotiation/interests-vs-positions',
    isActive: true,
  },
  {
    number: 3,
    title: 'Preparation is Everything',
    description: 'The best negotiators do most of their work before the conversation starts. Learn to prepare like Chanakya.',
    href: '/topics/negotiation/preparation',
    isActive: true,
  },
  {
    number: 4,
    title: 'Creating Value',
    description: 'Before dividing the pie, learn how to make it bigger. Great negotiators create value for everyone.',
    href: '/topics/negotiation/creating-value',
    isActive: true,
  },
  {
    number: 5,
    title: 'Walking Away',
    description: 'Your most powerful tool is the ability to say no. Learn when and how to walk away gracefully.',
    href: '/topics/negotiation/walking-away',
    isActive: true,
  },
];

export default function NegotiationTopicPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/topics" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; All Topics
          </Link>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="text-6xl mb-4">&#129309;</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            How to Negotiate
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Negotiation is not about winning or losing. It is about finding
            agreements that work for everyone&mdash;and knowing when to walk away.
          </p>
        </header>

        {/* Learning Objectives */}
        <section className="card p-8 mb-8">
          <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
            What You Will Learn
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Why negotiation is about finding agreements, not winning fights</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>How to look beyond what people say to understand what they need</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Why preparation matters more than persuasion</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>How to create value so everyone gains more</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>When and how to walk away from a bad deal</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Ancient wisdom from Chanakya on strategy and Thirukkural on fair dealing</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2">
            &quot;सामदानभेददण्डैः साध्यं कार्यं प्रयोजयेत्।&quot;
          </blockquote>
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;Achieve your goals through dialogue first, then generosity,
            then finding alternatives, and only as a last resort, firmness.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">&mdash; Chanakya, Arthashastra</p>
        </div>

        {/* Lessons */}
        <section>
          <h2 className="text-2xl font-serif text-[#5b21b6] mb-6">Lessons</h2>
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <LessonCard
                key={lesson.number}
                number={lesson.number}
                title={lesson.title}
                description={lesson.description}
                href={lesson.href}
                isActive={lesson.isActive}
              />
            ))}
          </div>
        </section>

        {/* Time Estimate */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Each lesson takes approximately 10-15 minutes to complete.</p>
        </div>
      </div>
    </div>
  );
}
