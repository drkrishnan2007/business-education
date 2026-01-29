import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Self-Management - Careers Track - Business Wisdom',
  description: 'Build personal effectiveness and resilience. Learn time management, adaptability, and how to maintain your energy.',
};

const lessons = [
  {
    number: 1,
    title: 'Managing Your Time',
    description: 'Prioritise effectively and make the most of every hour.',
    href: '/careers/self-management/managing-your-time',
    isActive: true,
  },
  {
    number: 2,
    title: 'Building Resilience',
    description: 'Bounce back from setbacks and maintain your performance under pressure.',
    href: '/careers/self-management/building-resilience',
    isActive: true,
  },
  {
    number: 3,
    title: 'Staying Adaptable',
    description: 'Thrive in changing environments and embrace new challenges.',
    href: '/careers/self-management/staying-adaptable',
    isActive: true,
  },
  {
    number: 4,
    title: 'Taking Initiative',
    description: 'Spot opportunities and act on them without being told.',
    href: '/careers/self-management/taking-initiative',
    isActive: true,
  },
  {
    number: 5,
    title: 'Managing Your Energy',
    description: 'Sustain high performance by understanding your personal rhythms.',
    href: '/careers/self-management/managing-your-energy',
    isActive: true,
  },
];

export default function SelfManagementTopicPage() {
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
          <div className="text-6xl mb-4">🎯</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Self-Management
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Before you can manage others, you must master yourself. Build the
            personal disciplines that underpin all professional success.
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
              <span>Practical time management techniques that actually work</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to build mental resilience and recover from setbacks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Strategies for adapting to change and uncertainty</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to identify and act on opportunities proactively</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Energy management techniques to sustain high performance</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">— Viktor Frankl</p>
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
