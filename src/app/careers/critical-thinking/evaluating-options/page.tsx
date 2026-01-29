import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Evaluating Options - Careers Track - Aryash Guru',
  description: 'Learn frameworks for making better decisions: opportunity cost, second-order thinking, and understanding reversibility.',
};

export default function EvaluatingOptionsLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 3 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Evaluating Options
          </h1>
          <p className="text-xl text-gray-600">Every choice has trade-offs. Learning to see them clearly is the foundation of good decision-making.</p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Life is full of decisions. Some are trivial, others are life-changing. The quality of your decisions determines the trajectory of your career and life. Yet most people make major decisions based on gut feeling alone. By learning a few key frameworks, you can dramatically improve your decision-making—not by eliminating intuition, but by combining it with structured thinking.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Understand opportunity cost</strong>
                  <p className="mt-1">Every choice means giving up other options. Spending four years at university means not spending those years building a business or gaining work experience. The true cost of anything is what you give up to get it.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Think in second-order effects</strong>
                  <p className="mt-1">First-order thinking asks: "What happens if I do this?" Second-order thinking asks: "And then what?" A pay rise sounds good (first-order), but what if it comes with 60-hour weeks that destroy your health (second-order)?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Consider reversibility</strong>
                  <p className="mt-1">Reversible decisions deserve less agonising. You can quit a job, but you cannot un-quit a decade of your twenties. Treat reversible decisions quickly; treat irreversible ones carefully.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Beware of false dichotomies</strong>
                  <p className="mt-1">"Should I prioritise career or family?" assumes you cannot design a life that serves both. Often the real question is: "How might I achieve both?"</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Use the "regret minimisation" test</strong>
                  <p className="mt-1">Imagine yourself at 80, looking back. Which choice would you regret more? This cuts through short-term anxieties and reveals what truly matters to you.</p>
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
                <p className="text-gray-700 italic">"I'm deciding between [Option A] and [Option B]. Help me think through the opportunity costs of each, the second-order effects, and how reversible each option is."</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">"I've decided to [your decision]. Challenge my thinking: what second-order effects might I be missing? What am I giving up that I haven't fully considered?"</p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">"Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them."</blockquote>
            <p className="mt-2 text-gray-600">— Vaibhav Shah, Entrepreneur</p>
          </div>

          {/* Books */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• <em>Thinking in Bets</em> by Annie Duke — Making smarter decisions under uncertainty</li>
              <li>• <em>The Great Mental Models</em> by Shane Parrish — Frameworks for clearer thinking</li>
              <li>• <em>Algorithms to Live By</em> by Brian Christian — Decision science for everyday life</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/critical-thinking/spotting-assumptions" className="text-[#5b21b6] hover:text-[#7c3aed]">← Previous Lesson</Link>
          <Link href="/careers/critical-thinking/knowing-what-you-dont-know" className="btn-primary">Next Lesson →</Link>
        </nav>
      </div>
    </div>
  );
}
