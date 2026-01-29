import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Literacy - Careers Track - Business Wisdom',
  description: 'Use AI tools effectively and responsibly. Learn what AI can and cannot do, how to prompt effectively, and when not to use AI.',
};

const lessons = [
  {
    number: 1,
    title: 'What AI Can and Can\'t Do',
    description: 'Understand AI\'s capabilities and limitations to use it wisely.',
    href: '/careers/ai-literacy/what-ai-can-and-cant-do',
    isActive: true,
  },
  {
    number: 2,
    title: 'Prompting for Better Results',
    description: 'Learn techniques to get the most useful outputs from AI tools.',
    href: '/careers/ai-literacy/prompting-for-better-results',
    isActive: true,
  },
  {
    number: 3,
    title: 'Reviewing AI Work',
    description: 'Critically evaluate AI outputs and spot errors and bias.',
    href: '/careers/ai-literacy/reviewing-ai-work',
    isActive: true,
  },
  {
    number: 4,
    title: 'When Not to Use AI',
    description: 'Recognise situations where human judgement is essential.',
    href: '/careers/ai-literacy/when-not-to-use-ai',
    isActive: true,
  },
];

export default function AILiteracyTopicPage() {
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
          <div className="text-6xl mb-4">🤖</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            AI Literacy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI tools are transforming work. Learn to use them effectively while
            understanding their limitations and maintaining your critical thinking.
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
              <span>The real capabilities and limitations of current AI systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to write effective prompts that get useful results</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Techniques for reviewing and verifying AI-generated content</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Ethical considerations and when to rely on human judgement</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;The real question is not whether machines think but whether men do.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">— B.F. Skinner</p>
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
