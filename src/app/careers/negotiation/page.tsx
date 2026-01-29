import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Negotiation - Careers Track - Business Wisdom',
  description: 'Negotiate effectively in professional settings. Learn salary negotiation, workload management, and win-win thinking.',
};

const lessons = [
  {
    number: 1,
    title: 'Negotiating Your Salary',
    description: 'Advocate for fair compensation with confidence and professionalism.',
    href: '/careers/negotiation/negotiating-your-salary',
    isActive: true,
  },
  {
    number: 2,
    title: 'Negotiating Workload and Deadlines',
    description: 'Push back appropriately and set realistic expectations.',
    href: '/careers/negotiation/negotiating-workload-deadlines',
    isActive: true,
  },
  {
    number: 3,
    title: 'Win-Win Thinking',
    description: 'Create outcomes where all parties benefit.',
    href: '/careers/negotiation/win-win-thinking',
    isActive: true,
  },
  {
    number: 4,
    title: 'Negotiating in Teams',
    description: 'Navigate internal negotiations and build consensus.',
    href: '/careers/negotiation/negotiating-in-teams',
    isActive: true,
  },
];

export default function NegotiationTopicPage() {
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
          <div className="text-6xl mb-4">🤝</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Negotiation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Negotiation happens daily at work - from project deadlines to salary
            discussions. Learn to advocate for yourself while maintaining relationships.
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
              <span>How to negotiate salary and benefits confidently</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Techniques for managing workload and deadline expectations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to find solutions that work for everyone</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Strategies for negotiating with peers and building consensus</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;You don&apos;t get what you deserve; you get what you negotiate.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">— Chester Karrass</p>
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
