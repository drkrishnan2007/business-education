import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leadership - Careers Track - Business Wisdom',
  description: 'Lead without authority and build influence. Learn to build credibility, motivate others, and lead through uncertainty.',
};

const lessons = [
  {
    number: 1,
    title: 'Leading Without Authority',
    description: 'Influence outcomes and guide teams even without a formal title.',
    href: '/careers/leadership/leading-without-authority',
    isActive: true,
  },
  {
    number: 2,
    title: 'Building Credibility Early',
    description: 'Establish trust and respect from your first days in a role.',
    href: '/careers/leadership/building-credibility-early',
    isActive: true,
  },
  {
    number: 3,
    title: 'Motivating Others',
    description: 'Inspire colleagues and help them do their best work.',
    href: '/careers/leadership/motivating-others',
    isActive: true,
  },
  {
    number: 4,
    title: 'Leading Through Uncertainty',
    description: 'Guide teams when the path forward is unclear.',
    href: '/careers/leadership/leading-through-uncertainty',
    isActive: true,
  },
];

export default function LeadershipTopicPage() {
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
          <div className="text-6xl mb-4">🧭</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Leadership
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leadership is not a title - it is a way of acting. You can start
            leading from any position in an organisation.
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
              <span>How to influence and lead without formal authority</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Strategies for building credibility as a new professional</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Techniques for motivating and inspiring colleagues</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to provide direction when facing ambiguity</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;A leader is best when people barely know he exists. When his work is done, his aim fulfilled, they will say: we did it ourselves.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">— Lao Tzu</p>
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
