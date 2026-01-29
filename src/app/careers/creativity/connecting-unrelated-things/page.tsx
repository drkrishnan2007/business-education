import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connecting Unrelated Things - Careers Track - Aryash Guru',
  description: 'Master the art of cross-pollination, analogies, and combinatorial creativity to generate breakthrough ideas.',
};

export default function ConnectingUnrelatedThingsLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 2 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Connecting Unrelated Things
          </h1>
          <p className="text-xl text-gray-600">
            The most original ideas are rarely new - they are unexpected combinations of existing concepts.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Steve Jobs famously said that creativity is &quot;just connecting things.&quot; The most innovative breakthroughs rarely come from isolated genius - they come from people who can see relationships between seemingly unrelated domains. The printing press combined a wine press with a coin punch. Velcro came from observing burrs sticking to dog fur. Learning to make these connections deliberately is the key to consistent innovation.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Practice Cross-Pollination</strong>
                  <p className="mt-1">Deliberately expose yourself to fields outside your expertise. Read magazines about industries you know nothing about. Talk to people with completely different careers. Attend talks on unfamiliar topics. The goal is to fill your mind with diverse raw material that your subconscious can combine in unexpected ways.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Think in Analogies</strong>
                  <p className="mt-1">When facing a problem, ask: &quot;What else is this like? Where has a similar challenge been solved?&quot; A hospital reduced infection rates by studying Formula 1 pit crew procedures. A hotel improved check-in by learning from car rental companies. The breakthrough often comes from asking &quot;How would [different industry] solve this?&quot;</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Use Forced Connections</strong>
                  <p className="mt-1">Randomly select two unrelated concepts and force yourself to find connections. Take your challenge and combine it with a random object, word, or image. The absurdity is the point - it forces your brain out of familiar patterns. &quot;How is our customer service challenge like a bicycle?&quot; sounds silly but generates surprisingly useful insights.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Embrace the Adjacent Possible</strong>
                  <p className="mt-1">Innovation happens at the edges of what currently exists. New ideas rarely leap far from current reality - they take one step into unexplored territory. Instead of asking &quot;What is completely new?&quot; ask &quot;What becomes possible by combining two things that already exist but have never been combined?&quot;</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Build a Diverse Input Diet</strong>
                  <p className="mt-1">Your outputs are limited by your inputs. If you only read about your industry, you will only have industry-standard ideas. Cultivate broad curiosity. Follow rabbit holes. Collect interesting facts, stories, and concepts even when you do not know how you will use them. Creative people are often voracious generalists.</p>
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
                  &quot;I am working on [your challenge]. Give me five analogies from completely unrelated fields - like nature, sports, cooking, or music. For each analogy, explain how that domain solves a similar problem and what I might learn from it.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I tried combining [concept A] with [concept B] to solve [challenge]. Here is what I came up with: [your idea]. What connections did I miss? What other domains could I borrow from to make this idea stronger?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;Nothing is original. Steal from anywhere that resonates with inspiration or fuels your imagination.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Jim Jarmusch</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">📚 Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Steal Like an Artist</em> by Austin Kleon</li>
              <li>&#8226; <em>Where Good Ideas Come From</em> by Steven Johnson</li>
              <li>&#8226; <em>The Medici Effect</em> by Frans Johansson</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/creativity" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Creativity
          </Link>
          <Link href="/careers/creativity/overcoming-mental-blocks" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
