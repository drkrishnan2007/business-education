import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Lead - Business Wisdom',
  description: 'Discover timeless leadership principles from Chanakya and Thiruvalluvar. Learn influence over authority, leading by example, building trust, making hard decisions, and developing others.',
};

const lessons = [
  {
    number: 1,
    title: 'What Leadership Really Means',
    description: 'Leadership is influence, not authority. True leaders inspire others to act, not because they must, but because they want to.',
    href: '/topics/business/leadership/what-leadership-means',
    isActive: true,
  },
  {
    number: 2,
    title: 'Leading by Example',
    description: 'Actions speak louder than words. The most powerful way to lead is to become what you want others to be.',
    href: '/topics/business/leadership/leading-by-example',
    isActive: true,
  },
  {
    number: 3,
    title: 'Building Trust',
    description: 'Trust is the foundation of all leadership. Without it, authority crumbles. With it, impossible things become possible.',
    href: '/topics/business/leadership/building-trust',
    isActive: true,
  },
  {
    number: 4,
    title: 'Making Hard Decisions',
    description: 'Leaders must choose when there is no good option. Learn to decide wisely, accept consequences, and move forward.',
    href: '/topics/business/leadership/making-hard-decisions',
    isActive: true,
  },
  {
    number: 5,
    title: 'Developing Others',
    description: 'The leader&apos;s ultimate job is to create more leaders. Your legacy is measured by who you helped grow.',
    href: '/topics/business/leadership/developing-others',
    isActive: true,
  },
];

export default function LeadershipTopicPage() {
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
          <div className="text-6xl mb-4">&#129517;</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            How to Lead
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leadership is not a position you hold. It is a choice you make
            every day&mdash;to serve, to guide, and to bring out the best in others.
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
              <span>Why leadership is about influence, not authority or titles</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>How your actions shape others more than your words ever could</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>The elements of trust and how to build it deliberately</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>How to make decisions when all options seem bad</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Why developing others is the leader&apos;s highest calling</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Ancient wisdom from Chanakya on strategy and from Thiruvalluvar on character</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2">
            &quot;இடிக்கும் துணையாரை யாள்வாரை யாரே<br />
            கெடுக்கும் தகைமை யவர்&quot;
          </blockquote>
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;Who can destroy the ruler who employs people brave enough to rebuke him?&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">&mdash; Thiruvalluvar, Thirukkural 447</p>
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
