import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Overcoming Mental Blocks - Careers Track - Aryash Guru',
  description: 'Learn to break through creative blocks including fear of judgement, perfectionism paralysis, and mental fixation.',
};

export default function OvercomingMentalBlocksLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 3 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Overcoming Mental Blocks
          </h1>
          <p className="text-xl text-gray-600">
            Everyone gets stuck. The difference is knowing how to get unstuck.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Creative blocks are universal - even the most prolific innovators face them regularly. The blocks are not the problem; staying stuck is. Fear of judgement, perfectionism, mental fixation, and exhaustion all conspire to shut down creative thinking. Understanding why blocks happen and having reliable techniques to break through them transforms creativity from an unreliable gift into a dependable skill.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Name the Fear Holding You Back</strong>
                  <p className="mt-1">Most creative blocks are rooted in fear - fear of looking stupid, fear of failure, fear of rejection. Once you name the fear, it loses power. Ask yourself: &quot;What am I really afraid of here?&quot; Usually, the worst case is far less catastrophic than your brain suggests. Share bad ideas deliberately to prove to yourself that nothing terrible happens.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Beat Perfectionism with &quot;Good Enough&quot; First Drafts</strong>
                  <p className="mt-1">Perfectionism is creativity&apos;s greatest enemy. The cure is permission to be terrible. Write the worst possible first draft. Make the ugliest prototype. The goal of a first attempt is not quality - it is existence. Once something exists, you can improve it. You cannot edit a blank page or refine an idea that was never expressed.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Change Your Environment</strong>
                  <p className="mt-1">Your brain associates specific places with specific thinking patterns. When stuck, physically move. Work from a different room, a coffee shop, or even a park bench. Take a shower. Go for a walk. These environment changes disrupt stuck patterns and often trigger the &quot;aha moment&quot; you have been chasing. Einstein called walking his &quot;thinking time.&quot;</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Use Incubation Strategically</strong>
                  <p className="mt-1">Your unconscious mind continues working on problems even when your conscious mind moves on. When stuck, briefly work on something completely different or take a break. This is not procrastination - it is strategic incubation. The key is to have loaded the problem into your brain first by wrestling with it consciously, then stepping away to let background processing happen.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Flip the Problem Upside Down</strong>
                  <p className="mt-1">When direct approaches fail, try inversion. Instead of asking &quot;How can I solve this?&quot; ask &quot;How could I make this problem worse?&quot; or &quot;What would guarantee failure?&quot; This bypasses mental blocks by approaching from an unexpected angle. The solutions to the inverted problem often reveal solutions to the original one.</p>
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
                  &quot;I am completely stuck on [your challenge]. Help me break through by: 1) Inverting the problem - what would make it worse? 2) Asking me questions that might reveal hidden assumptions. 3) Suggesting three completely different angles I have not considered.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I keep getting stuck when trying to be creative. I think my block is [describe it - perfectionism, fear of judgement, feeling uncreative, etc.]. Give me three specific exercises I can try right now to work through this particular type of block.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;If you hear a voice within you say &apos;you cannot paint,&apos; then by all means paint, and that voice will be silenced.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Vincent van Gogh</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">📚 Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Creative Confidence</em> by Tom Kelley and David Kelley</li>
              <li>&#8226; <em>The War of Art</em> by Steven Pressfield</li>
              <li>&#8226; <em>Big Magic</em> by Elizabeth Gilbert</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/creativity" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Creativity
          </Link>
          <Link href="/careers/creativity/selling-your-ideas" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
