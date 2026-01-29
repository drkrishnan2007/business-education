import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spotting Assumptions - Careers Track - Aryash Guru',
  description: 'Learn to identify hidden assumptions in arguments, question what seems obvious, and strengthen your thinking by considering opposing views.',
};

export default function SpottingAssumptionsLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/critical-thinking" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Critical Thinking
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 2 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Spotting Assumptions
          </h1>
          <p className="text-xl text-gray-600">Every argument rests on assumptions—things taken for granted without proof. Finding them is the key to clearer thinking.</p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Assumptions are the invisible foundations of every argument. When someone says "We should invest in this stock because the company is growing," they are assuming that past growth predicts future growth, that the stock price reflects company value, and that growth means good returns. These assumptions may be true—or they may not. The best thinkers learn to spot these hidden premises and question them.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Question the "obvious"</strong>
                  <p className="mt-1">The most dangerous assumptions are the ones so widely accepted that nobody thinks to question them. "You need a university degree to succeed" was obvious for decades—until it wasn't.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Ask "what would have to be true?"</strong>
                  <p className="mt-1">For any conclusion, work backwards. What conditions must exist for this to be correct? This reveals the hidden assumptions supporting the argument.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Steel-man opposing views</strong>
                  <p className="mt-1">Instead of attacking the weakest version of an argument (straw-manning), try to construct the strongest possible case for the opposing view. This forces you to understand the assumptions on both sides.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Watch for unstated "shoulds"</strong>
                  <p className="mt-1">Many arguments smuggle in value judgments as if they were facts. "Businesses should maximise shareholder value" is not a law of nature—it is an assumption about what matters.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Challenge your own assumptions regularly</strong>
                  <p className="mt-1">We all have blind spots. Make it a habit to ask yourself: "What am I assuming here? What if I'm wrong?" This is uncomfortable but essential for growth.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* AI Practice Section */}
          <section className="card p-8 mb-8 bg-gradient-to-br from-[#f5f3ff] to-[#fef3e2]">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Practice with AI</h2>
            <p className="text-gray-700 mb-4">Use these prompts with ChatGPT, Claude, or any AI assistant:</p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-[#5b21b6]">
                <p className="font-medium text-[#5b21b6] mb-2">Practice Prompt:</p>
                <p className="text-gray-700 italic">"Help me find the hidden assumptions in this argument: [paste an argument or opinion]. What would have to be true for this conclusion to be valid?"</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">"I believe [your belief or opinion]. Play devil's advocate and give me the strongest possible argument against my position. What assumptions am I making that might be wrong?"</p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">"The eye sees only what the mind is prepared to comprehend."</blockquote>
            <p className="mt-2 text-gray-600">— Henri Bergson, Philosopher</p>
          </div>

          {/* Books */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• <em>Thinking, Fast and Slow</em> by Daniel Kahneman — How mental shortcuts lead to flawed assumptions</li>
              <li>• <em>The Scout Mindset</em> by Julia Galef — Why seeking truth beats defending beliefs</li>
              <li>• <em>Being Wrong</em> by Kathryn Schulz — The surprising value of making mistakes</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/critical-thinking/questioning-information" className="text-[#5b21b6] hover:text-[#7c3aed]">← Previous Lesson</Link>
          <Link href="/careers/critical-thinking/evaluating-options" className="btn-primary">Next Lesson →</Link>
        </nav>
      </div>
    </div>
  );
}
