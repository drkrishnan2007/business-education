import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Manage Yourself - Business Wisdom',
  description: 'Master time, habits, emotions, and continuous learning. Build the personal disciplines that underpin all success, with wisdom from Thirukkural and Avvaiyar.',
};

const lessons = [
  {
    number: 1,
    title: 'Your 24 Hours',
    description: 'Understand where your time actually goes and why it is your most precious resource.',
    href: '/topics/self/your-24-hours',
    isActive: true,
  },
  {
    number: 2,
    title: 'What Matters Most',
    description: 'Learn to tell urgent from important, and why saying no to good things lets you say yes to great things.',
    href: '/topics/self/what-matters-most',
    isActive: true,
  },
  {
    number: 3,
    title: 'The Power of Habits',
    description: 'Discover how small daily actions compound over time into extraordinary results.',
    href: '/topics/self/power-of-habits',
    isActive: true,
  },
  {
    number: 4,
    title: 'Understanding Your Feelings',
    description: 'Learn why emotions are information, not commands, and how to master your responses.',
    href: '/topics/self/understanding-feelings',
    isActive: true,
  },
  {
    number: 5,
    title: 'Never Stop Learning',
    description: 'Embrace the growth mindset and understand why curiosity is your greatest superpower.',
    href: '/topics/self/never-stop-learning',
    isActive: true,
  },
];

export default function SelfTopicPage() {
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
          <div className="text-6xl mb-4">&#129504;</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            How to Manage Yourself
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Before you can lead others, you must first learn to lead yourself.
            These skills are the foundation of all success.
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
              <span>How to manage your time like it is your most valuable resource</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>The difference between urgent and important tasks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>How to build good habits and break bad ones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>How to understand and manage your emotions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Ancient wisdom on self-discipline from Thirukkural and Avvaiyar</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;Self-control will place one among the gods, while lack of it will
            drive one into deepest darkness.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">&mdash; Thirukkural, Verse 121</p>
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
