import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Staying Adaptable - Careers Track - Aryash Guru',
  description: 'Learn to thrive in changing environments and embrace new challenges. Develop the learning agility that modern careers demand.',
};

export default function StayingAdaptableLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/self-management" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Self-Management
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 3 of 5</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Staying Adaptable
          </h1>
          <p className="text-xl text-gray-600">
            The only constant in modern work is change. Learn to ride the waves.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Industries transform, companies restructure, technologies emerge and become obsolete. The average person will change careers multiple times and jobs even more frequently. Adaptability isn&apos;t just helpful - it&apos;s essential for survival. Those who can learn quickly, unlearn old habits, and embrace uncertainty will thrive while others struggle.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Embrace Beginner&apos;s Mind</strong>
                  <p className="mt-1">In Zen Buddhism, &quot;shoshin&quot; means approaching things with openness, eagerness, and lack of preconceptions - even when you&apos;re an expert. Past success can become a prison. Stay curious and willing to learn, especially in areas where you think you already know.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Expand Your Comfort Zone Deliberately</strong>
                  <p className="mt-1">Growth happens at the edge of comfort. Regularly take on tasks that stretch you - volunteer for the unfamiliar project, learn a new skill, work with different teams. Small, regular challenges build the muscle for big changes when they come.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Learn to Unlearn</strong>
                  <p className="mt-1">Sometimes your biggest obstacle is what you already &quot;know&quot;. The skills that got you here may not be the skills that get you there. Be willing to let go of old methods, beliefs, and habits that no longer serve you.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Build Transferable Skills</strong>
                  <p className="mt-1">Some skills are industry-specific; others travel anywhere. Communication, problem-solving, collaboration, and learning how to learn are valuable in any context. Invest heavily in these portable capabilities.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Reframe Change as Opportunity</strong>
                  <p className="mt-1">When change hits, while others panic, ask: &quot;What opportunity does this create?&quot; Reorganisations, new technology, market shifts - all create gaps that adaptable people fill. Uncertainty favours the prepared and flexible mind.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* AI Practice Section */}
          <section className="card p-8 mb-8 bg-gradient-to-br from-[#f5f3ff] to-[#fef3e2]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Practice with AI</h2>
            <p className="text-gray-700 mb-4">
              Use these prompts with ChatGPT, Claude, or any AI assistant to practice this skill:
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-[#5b21b6]">
                <p className="font-medium text-[#5b21b6] mb-2">Practice Prompt:</p>
                <p className="text-gray-700 italic">
                  &quot;I work in [your field]. What are the 3 biggest changes likely to affect my industry in the next 5 years, and what skills should I start developing now to stay ahead?&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Here&apos;s a change happening at my work: [describe change]. I&apos;m feeling resistant. Help me identify what opportunities this might create and what I could gain by embracing it.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Attributed to Charles Darwin</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Who Moved My Cheese?</em> by Spencer Johnson</li>
              <li>&#8226; <em>Antifragile</em> by Nassim Nicholas Taleb</li>
              <li>&#8226; <em>Range</em> by David Epstein</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/self-management" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Self-Management
          </Link>
          <Link href="/careers/self-management/taking-initiative" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
