import Link from 'next/link';
import TopicCard from '@/components/TopicCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers Track - Business Wisdom',
  description: 'Professional skills for university students and early-career professionals. Master communication, problem-solving, leadership, and more with AI-powered practice.',
};

const topics = [
  // Essential Skills (6 topics, 26 lessons)
  {
    title: 'Communication',
    description: 'Master written and verbal communication for professional success',
    icon: '💬',
    href: '/careers/communication',
    isActive: true,
  },
  {
    title: 'Problem-Solving',
    description: 'Break down challenges and find effective solutions',
    icon: '🧩',
    href: '/careers/problem-solving',
    isActive: true,
  },
  {
    title: 'Self-Management',
    description: 'Build personal effectiveness and resilience',
    icon: '🎯',
    href: '/careers/self-management',
    isActive: true,
  },
  {
    title: 'Critical Thinking',
    description: 'Question assumptions and evaluate information',
    icon: '🔍',
    href: '/careers/critical-thinking',
    isActive: true,
  },
  {
    title: 'Collaboration',
    description: 'Work effectively with diverse teams',
    icon: '🤝',
    href: '/careers/collaboration',
    isActive: true,
  },
  {
    title: 'Creativity',
    description: 'Generate ideas and think innovatively',
    icon: '💡',
    href: '/careers/creativity',
    isActive: true,
  },
  // Desirable Skills (4 topics, 16 lessons)
  {
    title: 'Leadership',
    description: 'Lead without authority and build influence',
    icon: '🧭',
    href: '/careers/leadership',
    isActive: true,
  },
  {
    title: 'Commercial Awareness',
    description: 'Understand how businesses work',
    icon: '💼',
    href: '/careers/commercial-awareness',
    isActive: true,
  },
  {
    title: 'Negotiation',
    description: 'Negotiate effectively in professional settings',
    icon: '🤝',
    href: '/careers/negotiation',
    isActive: true,
  },
  {
    title: 'Networking',
    description: 'Build meaningful professional relationships',
    icon: '🌐',
    href: '/careers/networking',
    isActive: true,
  },
  // AI Literacy (1 topic, 4 lessons)
  {
    title: 'AI Literacy',
    description: 'Use AI tools effectively and responsibly',
    icon: '🤖',
    href: '/careers/ai-literacy',
    isActive: true,
  },
];

export default function CareersPage() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Home
          </Link>
        </nav>

        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mb-4">
            Careers Track
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 italic mb-2">
            &quot;We are gardeners, not teachers&quot;
          </p>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed mt-6">
            We plant seeds, tend young minds, and give you the tools to grow yourself.
            The growth is yours.
          </p>
          <p className="max-w-2xl mx-auto text-[#f97316] font-medium mt-4">
            Brief but sufficient. Self-directed. AI-powered practice.
          </p>
        </header>

        {/* Why This Matters */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-[#5b21b6] text-center mb-8">
            Why This Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🇮🇳</div>
              <h3 className="font-serif text-lg text-[#5b21b6] mb-3">Over 700 Million Under 30</h3>
              <p className="text-gray-600 text-sm">
                India&apos;s median age is 29. Half the population is ready to seize global
                opportunities—if they have the right skills.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-serif text-lg text-[#5b21b6] mb-3">The Skills Gap</h3>
              <p className="text-gray-600 text-sm">
                Employers say graduates lack soft skills. UK teaches these from school.
                India focuses on academics. We bridge the gap.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-serif text-lg text-[#5b21b6] mb-3">AI-Ready Learning</h3>
              <p className="text-gray-600 text-sm">
                Most young Indians have AI access via mobile. We teach concepts briefly,
                then give you prompts to practice with AI.
              </p>
            </div>
          </div>
        </section>

        {/* Topics Grid */}
        <section>
          <h2 className="text-2xl font-serif text-[#5b21b6] text-center mb-8">
            11 Topics to Master
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <TopicCard
                key={topic.title}
                title={topic.title}
                description={topic.description}
                icon={topic.icon}
                href={topic.href}
                isActive={topic.isActive}
              />
            ))}
          </div>
        </section>

        {/* Wisdom Quote */}
        <section className="mt-16">
          <div className="wisdom-box text-center">
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;The single biggest problem in communication is the illusion that it has taken place.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— George Bernard Shaw</p>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Start with Communication—the foundation of all professional success.
          </p>
          <Link href="/careers/communication" className="btn-primary">
            Begin with Communication
          </Link>
        </div>
      </div>
    </div>
  );
}
