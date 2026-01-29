import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selling Your Ideas - Careers Track - Aryash Guru',
  description: 'Learn to sell your creative ideas through storytelling, prototyping, finding allies, and handling rejection.',
};

export default function SellingYourIdeasLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/creativity" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Creativity
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 4 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Selling Your Ideas
          </h1>
          <p className="text-xl text-gray-600">
            An idea that stays in your head changes nothing. Ideas need champions who can make others believe.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              History is full of brilliant ideas that died because no one could sell them, and mediocre ideas that succeeded because someone was relentless in their advocacy. The skill of getting others excited about your ideas is separate from the skill of generating them - and equally important. In any organisation, resources are limited, attention is scarce, and new ideas face scepticism. Learning to be a persuasive advocate for your creativity is what turns ideas into reality.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Lead with the Problem, Not the Solution</strong>
                  <p className="mt-1">People do not care about your clever solution until they feel the pain of the problem. Start by making the problem vivid - tell a story, share data, paint a picture of what is at stake. Only once your audience is nodding along, thinking &quot;yes, this is a real problem,&quot; should you reveal your idea. Solutions sell themselves when the problem is felt deeply enough.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Make It Tangible with Prototypes</strong>
                  <p className="mt-1">Abstract ideas are hard to evaluate and easy to dismiss. Tangible prototypes - even rough ones - give people something to react to. A simple sketch, a mockup, a role-play demonstration, or a two-minute video can do more than any PowerPoint. &quot;Let me show you&quot; is more powerful than &quot;Imagine if...&quot;</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Find and Cultivate Allies</strong>
                  <p className="mt-1">Ideas rarely win through a single champion. Before going public, identify people who might be sympathetic and share your idea with them privately. Get their feedback, refine based on their concerns, and enlist them as supporters. Walking into a meeting with three people already on your side changes the dynamic entirely.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Address Objections Before They Are Raised</strong>
                  <p className="mt-1">Anticipate the obvious criticisms and build your responses into the pitch. &quot;You might be thinking this would be too expensive - here is how we could pilot it for minimal cost.&quot; This shows you have thought deeply and removes easy reasons to dismiss the idea. It also prevents sceptics from feeling like they are exposing flaws you missed.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Handle Rejection as Information, Not Defeat</strong>
                  <p className="mt-1">Most ideas get rejected multiple times before they succeed. Treat each &quot;no&quot; as data - what specifically made them say no? Was it timing, framing, the wrong audience, or genuine flaws in the idea? Refine and try again. Many breakthrough innovations were rejected repeatedly before finding the right moment and the right audience.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* AI Practice Section */}
          <section className="card p-8 mb-8 bg-gradient-to-br from-[#f5f3ff] to-[#fef3e2]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">🤖 Practice with AI</h2>
            <p className="text-gray-700 mb-4">
              Use these prompts with ChatGPT, Claude, or any AI assistant to practice this skill:
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-[#5b21b6]">
                <p className="font-medium text-[#5b21b6] mb-2">Practice Prompt:</p>
                <p className="text-gray-700 italic">
                  &quot;I want to pitch this idea: [describe your idea]. Help me craft a compelling pitch by: 1) Suggesting a story or scenario that makes the problem vivid. 2) Anticipating the three most likely objections and crafting responses. 3) Identifying who in a typical organisation would be natural allies for this idea.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Role-play as a sceptical manager who I am pitching this idea to: [describe idea]. Push back on my pitch, ask tough questions, and give me honest feedback on what is working and what is not convincing. Then tell me how I could have sold it better.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;If at first the idea is not absurd, then there is no hope for it.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Albert Einstein</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">📚 Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Made to Stick</em> by Chip Heath and Dan Heath</li>
              <li>&#8226; <em>Steal Like an Artist</em> by Austin Kleon</li>
              <li>&#8226; <em>The Mom Test</em> by Rob Fitzpatrick</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/creativity" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Creativity
          </Link>
          <Link href="/careers/leadership/leading-without-authority" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
