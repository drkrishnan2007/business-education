import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Problem-Solving - Careers Track - Business Wisdom',
  description: 'Break down challenges and find effective solutions. Learn to identify root causes, make decisions, and learn from mistakes.',
};

const lessons = [
  {
    number: 1,
    title: 'Breaking Down Problems',
    description: 'Turn overwhelming challenges into manageable pieces.',
    href: '/careers/problem-solving/breaking-down-problems',
    isActive: true,
  },
  {
    number: 2,
    title: 'Finding Root Causes',
    description: 'Go beyond symptoms to discover what is really going wrong.',
    href: '/careers/problem-solving/finding-root-causes',
    isActive: true,
  },
  {
    number: 3,
    title: 'Making Decisions',
    description: 'Choose confidently between options, even with incomplete information.',
    href: '/careers/problem-solving/making-decisions',
    isActive: true,
  },
  {
    number: 4,
    title: 'Learning from Mistakes',
    description: 'Transform failures into valuable lessons for future success.',
    href: '/careers/problem-solving/learning-from-mistakes',
    isActive: true,
  },
];

export default function ProblemSolvingTopicPage() {
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
          <div className="text-6xl mb-4">🧩</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Problem-Solving
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every job is fundamentally about solving problems. Learn the frameworks
            that help you tackle any challenge systematically.
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
              <span>How to decompose complex problems into solvable parts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Techniques for finding the true cause of issues</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Decision-making frameworks for uncertain situations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to conduct effective post-mortems and learn from failures</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;If I had an hour to solve a problem, I would spend 55 minutes thinking about the problem and 5 minutes thinking about solutions.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">— Albert Einstein</p>
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
