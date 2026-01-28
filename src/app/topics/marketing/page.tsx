import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Fundamentals - Business Wisdom',
  description: 'Learn how to connect solutions with the people who need them. Understand your audience, tell compelling stories, build trust, and spread the word effectively.',
};

const lessons = [
  {
    number: 1,
    title: 'What Marketing Really Means',
    description: 'Marketing is not manipulation. At its heart, it is simply helping people find solutions to their problems.',
    href: '/topics/marketing/what-marketing-means',
    isActive: true,
  },
  {
    number: 2,
    title: 'Understanding Your Audience',
    description: 'You cannot help everyone. The most successful businesses know exactly who they serve—and who they do not.',
    href: '/topics/marketing/understanding-audience',
    isActive: true,
  },
  {
    number: 3,
    title: 'The Power of Stories',
    description: 'Facts inform. Stories transform. If you want people to remember your message, wrap it in a story.',
    href: '/topics/marketing/power-of-stories',
    isActive: true,
  },
  {
    number: 4,
    title: 'Building Trust and Reputation',
    description: 'Trust takes years to build, seconds to break, and forever to repair. Reputation is your most valuable asset.',
    href: '/topics/marketing/building-trust',
    isActive: true,
  },
  {
    number: 5,
    title: 'Spreading the Word',
    description: 'The best product in the world is worthless if nobody knows it exists. But you do not need to shout—you need to reach the right ears.',
    href: '/topics/marketing/spreading-the-word',
    isActive: true,
  },
];

export default function MarketingTopicPage() {
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
          <div className="text-6xl mb-4">&#128227;</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Marketing Fundamentals
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Marketing is not about shouting the loudest. It is about being genuinely
            helpful to the right people, at the right time.
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
              <span>What marketing actually is (and what it is not)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>How to identify and understand your ideal audience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Why stories are more powerful than facts for persuasion</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>How to build trust and reputation that lasts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Different channels and methods to spread your message</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Ancient wisdom from Thirukkural on giving, reputation, and helping others</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2">
            &quot;ஈத்துவக்கும் இன்பம் அறியார்கொல் தாமுடைமை<br />
            வைத்திழக்கும் வன்கணவர்.&quot;
          </blockquote>
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;Those who hoard wealth and lose it do not know the joy of giving.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">&mdash; Thirukkural, Kural 228</p>
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
