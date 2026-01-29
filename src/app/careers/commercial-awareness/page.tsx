import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Awareness - Careers Track - Business Wisdom',
  description: 'Understand how businesses work. Learn how your company makes money, industry dynamics, and how to add value.',
};

const lessons = [
  {
    number: 1,
    title: 'How Your Company Makes Money',
    description: 'Understand your employer\'s business model and revenue streams.',
    href: '/careers/commercial-awareness/how-your-company-makes-money',
    isActive: true,
  },
  {
    number: 2,
    title: 'Understanding Your Industry',
    description: 'Learn the competitive landscape and trends shaping your sector.',
    href: '/careers/commercial-awareness/understanding-your-industry',
    isActive: true,
  },
  {
    number: 3,
    title: 'Thinking Like a Business Owner',
    description: 'See beyond your role to understand the bigger picture.',
    href: '/careers/commercial-awareness/thinking-like-a-business-owner',
    isActive: true,
  },
  {
    number: 4,
    title: 'Adding Value',
    description: 'Identify opportunities to contribute beyond your job description.',
    href: '/careers/commercial-awareness/adding-value',
    isActive: true,
  },
];

export default function CommercialAwarenessTopicPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Careers Track
          </Link>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="text-6xl mb-4">💼</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Commercial Awareness
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Employers value people who understand the business context of their work.
            This knowledge sets you apart and opens doors.
          </p>
        </header>

        {/* Learning Objectives */}
        <section className="card p-8 mb-8">
          <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">
            What You Will Learn
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to analyse and understand any company&apos;s business model</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Techniques for staying informed about your industry</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to think strategically about your organisation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Ways to identify and communicate the value you create</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;The purpose of a business is to create and keep a customer.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">— Peter Drucker</p>
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
