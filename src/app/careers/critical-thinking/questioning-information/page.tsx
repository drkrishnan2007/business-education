import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Questioning Information - Careers Track - Aryash Guru',
  description: 'Learn to evaluate sources, spot misinformation, and think critically about the information you encounter every day.',
};

export default function QuestioningInformationLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 1 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Questioning Information
          </h1>
          <p className="text-xl text-gray-600">Not everything you read, hear, or see is true. Learning to question information is your first line of defence against being misled.</p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              We live in an age of information overload. Every day, you encounter thousands of claims—in social media posts, news articles, conversations, and advertisements. Some are true, some are false, and many are somewhere in between. The ability to evaluate information critically is no longer optional; it is essential for making good decisions in your career and life.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Consider the source</strong>
                  <p className="mt-1">Who is making this claim? Do they have expertise? What might they gain from you believing it? A pharmaceutical company claiming their drug works is different from an independent study saying the same thing.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Check for evidence</strong>
                  <p className="mt-1">Claims without evidence are just opinions. Look for data, studies, or verifiable facts. Be especially wary of emotional appeals that substitute for evidence.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Watch for confirmation bias</strong>
                  <p className="mt-1">We naturally accept information that confirms what we already believe and reject information that challenges us. Be extra critical of claims you want to be true.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Distinguish correlation from causation</strong>
                  <p className="mt-1">Just because two things happen together does not mean one causes the other. Ice cream sales and drowning deaths both rise in summer, but ice cream does not cause drowning.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Be patient with complexity</strong>
                  <p className="mt-1">Simple explanations are appealing, but reality is often complicated. Be suspicious of anyone claiming to have all the answers to complex problems.</p>
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
                <p className="text-gray-700 italic">"Give me a claim that sounds convincing but has a hidden flaw in its reasoning. Then help me identify what questions I should ask to evaluate it critically."</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">"I just read that [paste a claim]. Walk me through how to evaluate whether this is reliable information. What sources should I check? What biases might be at play?"</p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">"The first principle is that you must not fool yourself—and you are the easiest person to fool."</blockquote>
            <p className="mt-2 text-gray-600">— Richard Feynman, Physicist</p>
          </div>

          {/* Books */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• <em>Factfulness</em> by Hans Rosling — How to see the world more accurately</li>
              <li>• <em>The Demon-Haunted World</em> by Carl Sagan — A toolkit for sceptical thinking</li>
              <li>• <em>Thinking, Fast and Slow</em> by Daniel Kahneman — Understanding how our minds can mislead us</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/critical-thinking" className="text-[#5b21b6] hover:text-[#7c3aed]">← Back to Critical Thinking</Link>
          <Link href="/careers/critical-thinking/spotting-assumptions" className="btn-primary">Next Lesson →</Link>
        </nav>
      </div>
    </div>
  );
}
