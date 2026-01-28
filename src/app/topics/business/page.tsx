import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Businesses Work - Business Wisdom',
  description: 'Discover how organisations create value, serve customers, and sustain themselves. Learn timeless business principles from Chanakya\'s Arthashastra on opportunity, strategy, and avoiding failure.',
};

const lessons = [
  {
    number: 1,
    title: 'Seeing Problems as Opportunities',
    description: 'Train your eyes to notice problems worth solving. Every successful business started by seeing what others missed.',
    href: '/topics/business/seeing-problems',
    isActive: true,
  },
  {
    number: 2,
    title: 'What is a Business?',
    description: 'Understand what a business really is: an organised way to solve problems for others and create value.',
    href: '/topics/business/what-is-business',
    isActive: true,
  },
  {
    number: 3,
    title: 'Who Pays and Why',
    description: 'Learn to identify customers, understand their needs, and discover what people actually pay for.',
    href: '/topics/business/who-pays-why',
    isActive: true,
  },
  {
    number: 4,
    title: 'How Businesses Make Money',
    description: 'Understand revenue, costs, and profit. Learn different ways businesses earn money and why revenue alone is not enough.',
    href: '/topics/business/how-businesses-make-money',
    isActive: true,
  },
  {
    number: 5,
    title: 'Competition and Finding Your Space',
    description: 'Discover why competition is not bad, and how to find your unique angle in a crowded market.',
    href: '/topics/business/competition',
    isActive: true,
  },
  {
    number: 6,
    title: 'Why Businesses Fail',
    description: 'Learn the common reasons businesses fail, and how failure can be the beginning of learning, not the end.',
    href: '/topics/business/why-businesses-fail',
    isActive: true,
  },
  {
    number: 7,
    title: 'How to Lead',
    description: 'Discover what leadership really means: influence over authority, building trust, making hard decisions, and developing others.',
    href: '/topics/business/leadership',
    isActive: true,
  },
];

export default function BusinessTopicPage() {
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
          <div className="text-6xl mb-4">&#127970;</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            How Businesses Work
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A business is simply an organised way to solve problems for others.
            Understanding this opens doors you never knew existed.
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
              <span>How to spot problems that could become business opportunities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>What businesses actually do and why they exist</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>How to identify who will pay for a solution and why</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>The difference between revenue, costs, and profit</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>How to find your space even when others are already competing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Ancient wisdom from Chanakya on strategy, opportunity, and avoiding failure</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Timeless leadership principles from Chanakya and Thiruvalluvar</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2">
            &quot;अवसरं प्राप्य कार्याणि कुर्वन्ति बुद्धिमत्तमाः॥&quot;
          </blockquote>
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;The wise act when opportunity arrives.&quot;
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
