import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How People Work - Business Wisdom',
  description: 'Learn what motivates people, how teams function, and why understanding human nature is essential for any leader. Wisdom from Thirukkural on communication, collaboration, and kindness.',
};

const lessons = [
  {
    number: 1,
    title: 'Why People Do What They Do',
    description: 'Understand what motivates people beyond money, and why everyone has different drivers.',
    href: '/foundations/people/why-people-do',
    isActive: true,
  },
  {
    number: 2,
    title: 'The Art of Communication',
    description: 'Discover why listening matters more than talking, and how to truly understand others.',
    href: '/foundations/people/art-of-communication',
    isActive: true,
  },
  {
    number: 3,
    title: 'Working in Teams',
    description: 'Learn why teams beat individuals, and how to make group projects actually work.',
    href: '/foundations/people/working-in-teams',
    isActive: true,
  },
  {
    number: 4,
    title: 'Handling Conflict',
    description: 'Master the art of disagreeing without destroying relationships, and finding what everyone actually wants.',
    href: '/foundations/people/handling-conflict',
    isActive: true,
  },
  {
    number: 5,
    title: 'Helping Others Succeed',
    description: 'Discover why the best way to succeed is to help others succeed first.',
    href: '/foundations/people/helping-others-succeed',
    isActive: true,
  },
];

export default function PeopleTopicPage() {
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
          <div className="text-6xl mb-4">&#128101;</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            How People Work
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Understanding people is the foundation of every successful team,
            business, and relationship. These skills will serve you for life.
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
              <span>What motivates people beyond money and rewards</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>How to listen so others feel truly heard and understood</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Why diverse teams outperform groups of similar people</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>How to disagree without damaging relationships</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Ancient wisdom on friendship, kindness, and working together</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;The world rests on the friendship of those who live with
            loving hearts.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">&mdash; Thirukkural, Verse 75</p>
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
