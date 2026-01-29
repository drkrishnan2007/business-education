import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing Clear Emails - Careers Track - Aryash Guru',
  description: 'Learn to write professional emails that get read, understood, and actioned. Master email etiquette for your career.',
};

export default function WritingClearEmailsLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/communication" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Communication
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 1 of 5</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            Writing Clear Emails
          </h1>
          <p className="text-xl text-gray-600">
            The email you send is often your first impression. Make it count.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Email is the most common form of written communication in professional settings.
              A clear, well-structured email shows competence and respect for the reader&apos;s time.
              Poorly written emails create confusion, delay decisions, and can damage your professional reputation.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Clear Subject Line</strong>
                  <p className="mt-1">Your subject line should tell the reader exactly what the email is about and what action is needed. &quot;Q3 Budget Review - Decision Needed by Friday&quot; is better than &quot;Budget&quot;.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Bottom Line Up Front (BLUF)</strong>
                  <p className="mt-1">State your main point or request in the first sentence. Busy people often only read the first paragraph. Don&apos;t bury the key message.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>One Topic Per Email</strong>
                  <p className="mt-1">Mixing topics makes emails hard to respond to and impossible to search for later. Keep each email focused on a single subject.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>Actionable Requests</strong>
                  <p className="mt-1">Be specific about what you need. &quot;Please review and approve by Wednesday 5pm&quot; is clearer than &quot;Let me know what you think&quot;.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Professional Tone</strong>
                  <p className="mt-1">Match the formality to your audience and relationship. When in doubt, err on the side of being more formal. Avoid all caps, excessive exclamation marks, and overly casual language.</p>
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
                  &quot;You&apos;re a junior analyst. I&apos;ll send you an email I&apos;ve drafted. Give me honest feedback on: clarity, tone, and whether my request is clear. Here&apos;s my email: [paste email]&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;Act as my manager. I&apos;m going to send you a work email. Tell me what&apos;s good about it and what could be clearer. Be direct.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;The meaning of your communication is the response you get.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">— NLP Principle (quoted in Crucial Conversations)</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>The Elements of Style</em> by Strunk &amp; White</li>
              <li>&#8226; <em>On Writing Well</em> by William Zinsser</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/communication" className="text-[#5b21b6] hover:text-[#7c3aed]">
            ← Back to Communication
          </Link>
          <Link href="/careers/communication/speaking-up-in-meetings" className="btn-primary">
            Next Lesson →
          </Link>
        </nav>
      </div>
    </div>
  );
}
