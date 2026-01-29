import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Critical Thinking - Careers Track - Business Wisdom',
  description: 'Question assumptions and evaluate information effectively. Learn to spot bias, analyse options, and recognise your knowledge gaps.',
};

const lessons = [
  {
    number: 1,
    title: 'Questioning Information',
    description: 'Evaluate sources, spot bias, and think critically about what you read and hear.',
    href: '/careers/critical-thinking/questioning-information',
    isActive: true,
  },
  {
    number: 2,
    title: 'Spotting Assumptions',
    description: 'Identify hidden assumptions in your thinking and others\' arguments.',
    href: '/careers/critical-thinking/spotting-assumptions',
    isActive: true,
  },
  {
    number: 3,
    title: 'Evaluating Options',
    description: 'Analyse choices systematically using proven frameworks.',
    href: '/careers/critical-thinking/evaluating-options',
    isActive: true,
  },
  {
    number: 4,
    title: 'Knowing What You Don\'t Know',
    description: 'Recognise your knowledge gaps and ask better questions.',
    href: '/careers/critical-thinking/knowing-what-you-dont-know',
    isActive: true,
  },
];

export default function CriticalThinkingTopicPage() {
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
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Critical Thinking
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            In a world of information overload, the ability to think clearly
            and evaluate evidence is more valuable than ever.
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
              <span>How to evaluate the reliability of information sources</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Techniques for identifying hidden assumptions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Frameworks for comparing and evaluating options</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to embrace intellectual humility and learn effectively</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;The first principle is that you must not fool yourself - and you are the easiest person to fool.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">— Richard Feynman</p>
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
