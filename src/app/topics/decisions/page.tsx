import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Decisions Get Made - Business Wisdom',
  description: 'Learn frameworks for making better choices. Understand biases, trade-offs, and when to decide alone versus together. Ancient wisdom from Chanakya and Thirukkural on wise decision-making.',
};

const lessons = [
  {
    number: 1,
    title: 'Decisions Shape Your Life',
    description: 'Every choice opens some doors and closes others. Understanding this transforms how you approach decisions.',
    href: '/topics/decisions/decisions-shape-life',
    isActive: true,
  },
  {
    number: 2,
    title: 'Thinking Clearly',
    description: 'Our minds play tricks on us. Learn the common biases that lead us astray and how to guard against them.',
    href: '/topics/decisions/thinking-clearly',
    isActive: true,
  },
  {
    number: 3,
    title: 'Gathering Information',
    description: 'Know what you need to know. Learn to seek the right information without drowning in data.',
    href: '/topics/decisions/gathering-information',
    isActive: true,
  },
  {
    number: 4,
    title: 'Weighing Trade-offs',
    description: 'Nothing is free and everything has a cost. Learn to see the hidden prices of every choice.',
    href: '/topics/decisions/weighing-tradeoffs',
    isActive: true,
  },
  {
    number: 5,
    title: 'When to Decide Alone vs Together',
    description: 'Some decisions need solitude, others need collaboration. Learn when to seek counsel and when to trust yourself.',
    href: '/topics/decisions/solo-vs-group',
    isActive: true,
  },
];

export default function DecisionsTopicPage() {
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
          <div className="text-6xl mb-4">&#127919;</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            How Decisions Get Made
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your life is the sum of your choices. Learn to make decisions
            that align with your values and serve your goals.
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
              <span>Why every decision shapes your path and identity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Common mental biases and how to overcome them</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>How to gather the right information without paralysis</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>The hidden costs in every choice and how to weigh them</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>When to decide alone and when to seek counsel</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">&#10003;</span>
              <span>Ancient wisdom from Chanakya and Thirukkural on wise choices</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic mb-2">
            &quot;विनाशकाले विपरीत बुद्धि॥&quot;
          </blockquote>
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;When destruction approaches, wisdom deserts.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">&mdash; Chanakya Niti</p>
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
