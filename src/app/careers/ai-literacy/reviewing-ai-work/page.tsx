import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviewing AI Work - Careers Track - Business Wisdom',
  description: 'Learn to critically evaluate AI outputs. Develop skills for fact-checking, bias detection, and quality control when working with AI.',
};

export default function ReviewingAIWorkLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/ai-literacy" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← AI Literacy
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 3 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Reviewing AI Work
          </h1>
          <p className="text-xl text-gray-600">
            Using AI without verifying its output is like trusting a stranger&apos;s first draft.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              AI can produce impressive-looking work in seconds. But impressive-looking isn&apos;t the same
              as accurate, appropriate, or good. The professionals who use AI well aren&apos;t the ones who
              copy-paste without reading—they&apos;re the ones who review carefully and catch problems.
              Your reputation depends on the work you submit, not on the tool that helped create it.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Verify Every Fact</strong>
                  <p className="mt-1">AI confidently states false information. Check claims against reliable sources. If AI cites a study, find that study. If it quotes someone, verify the quote. If it gives statistics, confirm them. Never assume accuracy.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Watch for Confident Nonsense</strong>
                  <p className="mt-1">The more confident AI sounds, the more cautious you should be. AI doesn&apos;t signal uncertainty—it makes everything sound equally certain. Learn to spot patterns: invented citations, too-perfect examples, suspiciously specific numbers, and plausible-sounding claims you&apos;ve never heard before.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Check for Bias</strong>
                  <p className="mt-1">AI reflects biases in its training data. Does the output make assumptions about gender, race, or culture? Does it present one perspective as universal? Does it favour certain viewpoints? You&apos;re responsible for catching bias before it goes out with your name on it.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Evaluate for Your Context</strong>
                  <p className="mt-1">AI writes generically. Does this output actually fit your specific situation, audience, and purpose? Generic advice might be technically correct but wrong for your context. Always adapt AI output to your specific needs.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Know When Something Is Off</strong>
                  <p className="mt-1">Develop your intuition. If something feels wrong—too smooth, too generic, slightly off-tone—investigate. Trust your domain expertise. You know your field better than AI does. If output contradicts what you know, you&apos;re probably right and AI is probably wrong.</p>
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
                  &quot;Write a paragraph about [topic in your field] that includes 3 specific facts or statistics. I&apos;m going to fact-check everything you say. Don&apos;t make anything up—but let&apos;s see if I can catch you if you do.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;I&apos;m practising reviewing AI output. Here&apos;s a piece of AI-generated text: [paste text]. Act as a critical editor. What should I verify? What might be biased or wrong? What would you flag for review?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;Trust, but verify.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Russian proverb (popularised by Ronald Reagan)</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>AI Snake Oil</em> by Arvind Narayanan &amp; Sayash Kapoor</li>
              <li>&#8226; <em>The Alignment Problem</em> by Brian Christian</li>
              <li>&#8226; <em>Weapons of Math Destruction</em> by Cathy O&apos;Neil</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/ai-literacy" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to AI Literacy
          </Link>
          <Link href="/careers/ai-literacy/when-not-to-use-ai" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
