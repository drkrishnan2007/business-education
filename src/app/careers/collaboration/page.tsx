import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collaboration - Careers Track - Business Wisdom',
  description: 'Work effectively with diverse teams. Learn to contribute, handle conflict, and collaborate in remote and hybrid environments.',
};

const lessons = [
  {
    number: 1,
    title: 'Working with Different People',
    description: 'Collaborate effectively across personalities, backgrounds, and working styles.',
    href: '/careers/collaboration/working-with-different-people',
    isActive: true,
  },
  {
    number: 2,
    title: 'Contributing to Teams',
    description: 'Add value to team projects and be the colleague everyone wants to work with.',
    href: '/careers/collaboration/contributing-to-teams',
    isActive: true,
  },
  {
    number: 3,
    title: 'Handling Conflict in Teams',
    description: 'Navigate disagreements constructively and maintain working relationships.',
    href: '/careers/collaboration/handling-conflict-in-teams',
    isActive: true,
  },
  {
    number: 4,
    title: 'Remote and Hybrid Collaboration',
    description: 'Stay connected and productive when working across locations and time zones.',
    href: '/careers/collaboration/remote-hybrid-collaboration',
    isActive: true,
  },
];

export default function CollaborationTopicPage() {
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
            Collaboration
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Almost everything meaningful at work happens through teamwork.
            Learn to be the person others love collaborating with.
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
              <span>How to work effectively with people who think differently</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Techniques for making valuable contributions to any team</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to handle disagreements without damaging relationships</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Best practices for remote and hybrid team collaboration</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;Alone we can do so little; together we can do so much.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">— Helen Keller</p>
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
