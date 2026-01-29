import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Money Works - Business Wisdom',
  description: 'Learn the fundamentals of money: what it is, how it works, and timeless principles from Chanakya\'s Arthashastra on wealth and prosperity.',
};

const lessons = [
  {
    number: 1,
    title: 'What is Money?',
    description: 'Understand where money came from, why we use it, and how it works in the modern world.',
    href: '/foundations/money/what-is-money',
    isActive: true,
  },
  {
    number: 2,
    title: 'Revenue, Costs, and Profit',
    description: 'Learn the three numbers that every business owner must understand.',
    href: '/foundations/money/revenue-costs-profit',
    isActive: true,
  },
  {
    number: 3,
    title: 'Budgets and Cash Flow',
    description: 'Discover why profitable businesses can still fail, and how to manage the flow of money.',
    href: '/foundations/money/budgets-cash-flow',
    isActive: true,
  },
  {
    number: 4,
    title: 'The Prosperity Principle',
    description: 'Learn Chanakya\'s teachings on righteous wealth and why prosperity is honourable.',
    href: '/foundations/money/prosperity-principle',
    isActive: true,
  },
  {
    number: 5,
    title: 'Wealth and Giving',
    description: 'Understand the relationship between creating wealth and serving others.',
    href: '/foundations/money/wealth-and-giving',
    isActive: true,
  },
];

export default function MoneyTopicPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/foundations" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Foundations
          </Link>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="text-6xl mb-4">💰</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            How Money Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Money is one of humanity&apos;s greatest inventions. Understanding how it
            works is the foundation of all business knowledge.
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
              <span>The history and purpose of money</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How businesses make and manage money</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>The difference between revenue, profit, and cash flow</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Ancient wisdom on wealth and prosperity from Chanakya</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to think about money in an ethical, balanced way</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;A person should save one third of their income. The wise person
            should use one third for comforts and give the remaining third.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">— Chanakya, Arthashastra</p>
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
