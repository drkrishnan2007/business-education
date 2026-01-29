import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prompting for Better Results - Careers Track - Business Wisdom',
  description: 'Learn techniques to write effective AI prompts. Get better outputs through specificity, context, iteration, and role prompting.',
};

export default function PromptingForBetterResultsLesson() {
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
          <span className="text-sm text-[#f97316] font-medium">Lesson 2 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Prompting for Better Results
          </h1>
          <p className="text-xl text-gray-600">
            The quality of your prompt determines the quality of the output.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Two people using the same AI tool can get wildly different results. The difference isn&apos;t
              the AI—it&apos;s how they ask. &quot;Prompt engineering&quot; sounds technical, but it&apos;s really
              just clear communication. Learning to write good prompts is like learning to brief a
              colleague: the more context and clarity you provide, the better work you get back.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Be Specific About What You Want</strong>
                  <p className="mt-1">Vague prompts get vague results. Instead of &quot;Write something about marketing,&quot; try &quot;Write a 200-word LinkedIn post announcing our new product launch, targeting small business owners, in a professional but friendly tone.&quot; Include format, length, audience, and tone.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Provide Context</strong>
                  <p className="mt-1">AI doesn&apos;t know your situation unless you tell it. Share relevant background: &quot;I&apos;m a junior analyst preparing a report for senior leadership&quot; gets different results than &quot;I&apos;m a student doing homework.&quot; The more context, the more relevant the output.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Iterate and Refine</strong>
                  <p className="mt-1">Your first prompt rarely gets the best result. Treat AI like a conversation. &quot;That&apos;s close, but make it shorter&quot; or &quot;Good, but less formal&quot; or &quot;Now rewrite it for a technical audience.&quot; Iteration is faster than crafting one perfect prompt.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Use Few-Shot Examples</strong>
                  <p className="mt-1">Show, don&apos;t just tell. If you want a specific format, give an example: &quot;Write product descriptions like this: [example]. Now write one for [your product].&quot; Examples are clearer than abstract instructions.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Try Role Prompting</strong>
                  <p className="mt-1">Assigning a role focuses the AI: &quot;Act as a sceptical investor reviewing this pitch&quot; or &quot;You&apos;re an experienced editor—improve this writing.&quot; This technique can surface perspectives you hadn&apos;t considered and improve output quality.</p>
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
                  &quot;I&apos;m going to give you a vague prompt, then improve it. Tell me how much better the second version is. Vague: &apos;Write about teamwork.&apos; Improved: &apos;Write a 150-word paragraph for a job application explaining how I demonstrated teamwork when our project deadline was moved up by two weeks.&apos;&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Act as a prompt engineering coach. I&apos;ll share a task I want help with, and you show me three versions of the prompt: basic, good, and excellent. Explain what makes each one better.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;The single biggest problem in communication is the illusion that it has taken place.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— George Bernard Shaw (applies to AI too)</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Co-Intelligence: Living and Working with AI</em> by Ethan Mollick</li>
              <li>&#8226; <em>AI Snake Oil</em> by Arvind Narayanan &amp; Sayash Kapoor</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/ai-literacy" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to AI Literacy
          </Link>
          <Link href="/careers/ai-literacy/reviewing-ai-work" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
