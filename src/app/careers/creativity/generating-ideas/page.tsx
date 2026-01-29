import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Generating Ideas - Careers Track - Aryash Guru',
  description: 'Learn proven techniques for generating creative ideas including brainstorming rules, SCAMPER method, and constraint-based creativity.',
};

export default function GeneratingIdeasLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 1 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Generating Ideas
          </h1>
          <p className="text-xl text-gray-600">
            Creativity is not about waiting for inspiration. It is about having reliable processes that produce ideas on demand.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Every valuable innovation starts as an idea - but most people believe creativity is an innate gift you either have or lack. The truth is that idea generation is a skill with specific techniques that anyone can learn. In the workplace, those who can reliably generate options when facing challenges become invaluable. While others say &quot;I have no idea,&quot; you will have a toolkit for producing possibilities.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Quantity Before Quality</strong>
                  <p className="mt-1">In the generation phase, your only goal is volume. Do not evaluate ideas as they come - that kills creativity. Research shows that the best ideas often appear later in brainstorming sessions, after the obvious options are exhausted. Set targets like &quot;50 ideas in 10 minutes&quot; and do not stop until you hit the number.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Use SCAMPER for Systematic Ideation</strong>
                  <p className="mt-1">SCAMPER gives you seven lenses for generating ideas: Substitute (what could you replace?), Combine (what could you merge?), Adapt (what could you borrow from elsewhere?), Modify (what could you change?), Put to other uses, Eliminate (what could you remove?), and Reverse/Rearrange. Apply each lens to any challenge for instant variety.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Embrace Constraints as Fuel</strong>
                  <p className="mt-1">Blank pages are terrifying; constraints are liberating. &quot;Design anything&quot; is paralysing. &quot;Design a solution using only existing resources in 48 hours&quot; focuses the mind. When facing a creative challenge, deliberately add constraints. What if you had half the budget? What if it had to be done by tomorrow?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Separate Divergent and Convergent Thinking</strong>
                  <p className="mt-1">The biggest creativity killer is mixing generation with evaluation. First, diverge - generate as many ideas as possible without judgement. Only after you have exhausted possibilities should you converge - analyse, critique, and select the best. Trying to do both simultaneously ensures you do neither well.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Prime Your Mind with Input</strong>
                  <p className="mt-1">You cannot create from nothing. Before ideation sessions, expose yourself to diverse stimuli - read articles from unrelated fields, look at how other industries solve similar problems, talk to people with different perspectives. Your subconscious makes connections between inputs you may not consciously remember.</p>
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
                  &quot;I need to brainstorm ideas for [your challenge]. First, help me generate 20 ideas quickly without evaluating any of them. Then apply SCAMPER to the problem and give me at least one idea for each letter. Finally, suggest three unusual constraints that might spark better ideas.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I generated these ideas for [challenge]: [list your ideas]. Help me identify which ones have the most potential. Which are too obvious? Which combine existing concepts in interesting ways? What patterns do you notice in my thinking that might be limiting me?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;You can not use up creativity. The more you use, the more you have.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Maya Angelou</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">📚 Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Creative Confidence</em> by Tom Kelley and David Kelley</li>
              <li>&#8226; <em>Lateral Thinking</em> by Edward de Bono</li>
              <li>&#8226; <em>A Whack on the Side of the Head</em> by Roger von Oech</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/creativity" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Creativity
          </Link>
          <Link href="/careers/creativity/connecting-unrelated-things" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
