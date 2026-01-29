import Link from 'next/link';
import LessonCard from '@/components/LessonCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Networking - Careers Track - Business Wisdom',
  description: 'Build meaningful professional relationships. Learn to find mentors, build your LinkedIn presence, and maintain your network.',
};

const lessons = [
  {
    number: 1,
    title: 'Building Relationships',
    description: 'Create genuine connections that benefit everyone.',
    href: '/careers/networking/building-relationships',
    isActive: true,
  },
  {
    number: 2,
    title: 'Finding Mentors and Sponsors',
    description: 'Identify and cultivate relationships with career guides.',
    href: '/careers/networking/finding-mentors-sponsors',
    isActive: true,
  },
  {
    number: 3,
    title: 'LinkedIn and Professional Presence',
    description: 'Build a strong online presence that opens opportunities.',
    href: '/careers/networking/linkedin-professional-presence',
    isActive: true,
  },
  {
    number: 4,
    title: 'Maintaining Your Network',
    description: 'Keep relationships alive over the long term.',
    href: '/careers/networking/maintaining-your-network',
    isActive: true,
  },
];

export default function NetworkingTopicPage() {
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
          <div className="text-6xl mb-4">🌐</div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Networking
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your network is one of your most valuable career assets. Learn to build
            genuine relationships that open doors and enrich your professional life.
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
              <span>How to build authentic professional relationships</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Strategies for finding and engaging with mentors and sponsors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>How to create a compelling LinkedIn profile and online presence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#5b21b6] mt-1">✓</span>
              <span>Techniques for nurturing relationships over time</span>
            </li>
          </ul>
        </section>

        {/* Wisdom Box */}
        <div className="wisdom-box mb-8">
          <blockquote className="text-lg font-serif text-[#5b21b6] italic">
            &quot;Your network is your net worth.&quot;
          </blockquote>
          <p className="mt-2 text-gray-600">— Porter Gale</p>
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
