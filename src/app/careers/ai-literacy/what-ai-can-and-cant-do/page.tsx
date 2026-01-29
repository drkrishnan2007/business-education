import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What AI Can and Can\'t Do - Careers Track - Business Wisdom',
  description: 'Understand AI\'s real capabilities and limitations. Learn about pattern matching, hallucinations, and how AI systems actually work.',
};

export default function WhatAICanAndCantDoLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 1 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            What AI Can (and Can&apos;t) Do
          </h1>
          <p className="text-xl text-gray-600">
            Understanding AI&apos;s capabilities starts with understanding its limitations.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              AI tools like ChatGPT and Claude are transforming how we work. But much of what you hear
              about AI is either overblown hype or unnecessary fear. To use AI effectively, you need
              to understand what it actually does—and just as importantly, what it doesn&apos;t do.
              Professionals who understand both will outperform those who either avoid AI entirely or
              trust it blindly.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Pattern Matching, Not Understanding</strong>
                  <p className="mt-1">AI models like ChatGPT work by predicting what word comes next based on patterns in their training data. They don&apos;t &quot;understand&quot; what they&apos;re saying in the way humans do. They&apos;re incredibly good at pattern matching, which is useful—but it&apos;s not the same as thinking.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Confident but Wrong: Hallucinations</strong>
                  <p className="mt-1">AI will sometimes generate false information with complete confidence. It might cite studies that don&apos;t exist, quote people who never said those words, or make up statistics. This isn&apos;t rare—it&apos;s a fundamental feature of how these systems work. Never assume AI output is accurate without verification.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>What AI Does Well</strong>
                  <p className="mt-1">AI excels at: drafting text you&apos;ll edit, brainstorming ideas, explaining concepts in different ways, summarising long documents, translating between languages, writing code, and finding patterns in data. Use it for these tasks as a starting point, not a final answer.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>What AI Does Poorly</strong>
                  <p className="mt-1">AI struggles with: mathematical reasoning, factual accuracy (especially recent events), understanding context you haven&apos;t provided, making judgements about nuanced human situations, and anything requiring real-world knowledge it wasn&apos;t trained on. It has no access to the internet unless specifically enabled.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Rapidly Evolving Capabilities</strong>
                  <p className="mt-1">What AI can do changes fast. Features impossible last year may be routine today. Stay curious and experiment regularly, but maintain healthy scepticism. Each new capability comes with new limitations—the goalposts keep moving.</p>
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
                  &quot;I want to test your limitations. Give me a confident-sounding answer about [obscure topic you know well]. Then I&apos;ll tell you what you got wrong. This helps me understand where you tend to make mistakes.&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Explain to me how you actually work. What&apos;s the difference between pattern matching and true understanding? What kinds of tasks should I not trust you with?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;AI is a tool. It&apos;s not going to take your job. Someone who knows how to use AI is going to take your job.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— Widely attributed in tech circles</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Co-Intelligence: Living and Working with AI</em> by Ethan Mollick</li>
              <li>&#8226; <em>AI Snake Oil</em> by Arvind Narayanan &amp; Sayash Kapoor</li>
              <li>&#8226; <em>The Alignment Problem</em> by Brian Christian</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/ai-literacy" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to AI Literacy
          </Link>
          <Link href="/careers/ai-literacy/prompting-for-better-results" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
