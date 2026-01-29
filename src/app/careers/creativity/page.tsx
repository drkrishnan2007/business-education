import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creativity - Careers Track - Business Wisdom',
  description: 'Generate ideas and think innovatively. Learn to overcome mental blocks, connect unrelated concepts, and sell your ideas.',
};

const lessons = [
  {
    number: 1,
    title: 'Generating Ideas',
    description: 'Use proven techniques to come up with creative solutions.',
    href: '/careers/creativity/generating-ideas',
    isActive: true,
  },
  {
    number: 2,
    title: 'Connecting Unrelated Things',
    description: 'Discover innovation by combining ideas from different domains.',
    href: '/careers/creativity/connecting-unrelated-things',
    isActive: true,
  },
  {
    number: 3,
    title: 'Overcoming Mental Blocks',
    description: 'Break through creative barriers and get unstuck.',
    href: '/careers/creativity/overcoming-mental-blocks',
    isActive: true,
  },
  {
    number: 4,
    title: 'Selling Your Ideas',
    description: 'Present creative concepts in ways that win support.',
    href: '/careers/creativity/selling-your-ideas',
    isActive: true,
  },
];

export default function CreativityTopicPage() {
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
          <div className="text-6xl mb-4">💡</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Creativity
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Creativity is not a gift you are born with - it is a skill you develop.
            Learn the techniques that help anyone become more innovative.
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
              <span>Structured techniques for generating creative ideas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to find innovation at the intersection of different fields</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Methods for overcoming creative blocks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to pitch your ideas and get buy-in</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn&apos;t really do it, they just saw something.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">— Steve Jobs</p>
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
