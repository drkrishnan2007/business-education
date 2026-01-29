import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Communication - Careers Track - Business Wisdom',
  description: 'Master written and verbal communication for professional success. Learn to write clear emails, speak up in meetings, and have difficult conversations.',
};

const lessons = [
  {
    number: 1,
    title: 'Writing Clear Emails',
    description: 'Craft professional emails that get read, understood, and actioned.',
    href: '/careers/communication/writing-clear-emails',
    isActive: true,
  },
  {
    number: 2,
    title: 'Speaking Up in Meetings',
    description: 'Contribute effectively to discussions and make your voice heard.',
    href: '/careers/communication/speaking-up-in-meetings',
    isActive: true,
  },
  {
    number: 3,
    title: 'Giving and Receiving Feedback',
    description: 'Learn to give constructive feedback and receive it gracefully.',
    href: '/careers/communication/giving-receiving-feedback',
    isActive: true,
  },
  {
    number: 4,
    title: 'Difficult Conversations',
    description: 'Navigate challenging discussions with confidence and empathy.',
    href: '/careers/communication/difficult-conversations',
    isActive: true,
  },
  {
    number: 5,
    title: 'Presenting with Confidence',
    description: 'Deliver compelling presentations that engage and persuade.',
    href: '/careers/communication/presenting-with-confidence',
    isActive: true,
  },
];

export default function CommunicationTopicPage() {
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
          <div className="text-6xl mb-4">💬</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Communication
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Communication is the foundation of all professional relationships.
            Master it, and every other skill becomes easier.
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
              <span>How to write emails that people actually read and respond to</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Techniques for contributing effectively in meetings</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to give feedback that helps people improve</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Frameworks for handling difficult conversations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Strategies for presenting with confidence</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;The single biggest problem in communication is the illusion that it has taken place.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">— George Bernard Shaw</p>
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
