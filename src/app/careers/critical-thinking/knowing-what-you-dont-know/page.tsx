import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Knowing What You Don't Know - Careers Track - Aryash Guru",
  description: 'Learn intellectual humility: recognising the limits of your knowledge, avoiding overconfidence, and knowing when to ask for help.',
};

export default function KnowingWhatYouDontKnowLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 4 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Knowing What You Don't Know
          </h1>
          <p className="text-xl text-gray-600">The wisest people are those who understand the limits of their own knowledge—and have the humility to ask for help.</p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              The Dunning-Kruger effect describes a curious phenomenon: people with limited knowledge in a domain often overestimate their competence, while experts tend to underestimate theirs. The beginner cannot see what they do not know. True mastery begins with recognising the vast ocean of your own ignorance—and this recognition is not weakness but wisdom.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Embrace intellectual humility</strong>
                  <p className="mt-1">Being wrong is not a character flaw—it is a necessary part of learning. The people who grow fastest are those who say "I don't know" without shame and "I was wrong" without defensiveness.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Know your circle of competence</strong>
                  <p className="mt-1">Warren Buffett invests only in businesses he understands. Know what you know well, what you know a little about, and what you know nothing about. The boundaries matter as much as the contents.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Ask for help strategically</strong>
                  <p className="mt-1">Knowing when to ask for help is a strength, not a weakness. The key is asking the right people the right questions. "I'm struggling with X, could you point me in the right direction?" works better than "Can you solve this for me?"</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Beware of confident experts</strong>
                  <p className="mt-1">True experts express uncertainty. If someone claims absolute certainty about complex, uncertain topics—economics, politics, the future—be wary. Confidence is not the same as competence.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Update your beliefs with new evidence</strong>
                  <p className="mt-1">Holding a belief strongly does not mean holding it forever. When you encounter new evidence, update your views accordingly. "I used to think X, but now I think Y" is the language of a growing mind.</p>
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
                <p className="text-gray-700 italic">"I think I understand [topic]. Quiz me on it and identify gaps in my knowledge. What are the most important things I probably don't know about this subject?"</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">"I need to make a decision about [situation] but I'm not sure what I don't know. What questions should I be asking? What expertise should I seek out before deciding?"</p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."</blockquote>
            <p className="mt-2 text-gray-600">— Daniel J. Boorstin, Historian</p>
          </div>

          {/* Books */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• <em>Factfulness</em> by Hans Rosling — How our assumptions about the world are often wrong</li>
              <li>• <em>Think Again</em> by Adam Grant — The power of knowing what you don't know</li>
              <li>• <em>The Black Swan</em> by Nassim Taleb — Why we underestimate what we cannot predict</li>
            </ul>
          </section>

          {/* Module Complete */}
          <section className="card p-8 mb-8 bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] text-white">
            <h2 className="text-2xl font-serif mb-4">Module Complete!</h2>
            <p className="mb-4 opacity-90">
              You have completed the Critical Thinking module. You have learned to question information, spot hidden assumptions, evaluate options systematically, and recognise the limits of your own knowledge.
            </p>
            <p className="opacity-90">
              Next, continue your journey by learning how to work effectively with others in the Collaboration module.
            </p>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/critical-thinking/evaluating-options" className="text-[#5b21b6] hover:text-[#7c3aed]">← Previous Lesson</Link>
          <Link href="/careers/collaboration/working-with-different-people" className="btn-primary">Next: Collaboration →</Link>
        </nav>
      </div>
    </div>
  );
}
