import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Your Company Makes Money - Careers Track - Business Wisdom',
  description: 'Understand your employer\'s business model, revenue streams, and cost structure. Essential commercial awareness for career success.',
};

export default function HowYourCompanyMakesMoneyLesson() {
  return (
    <div className="bg-gradient-warm">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/careers/commercial-awareness" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; Commercial Awareness
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="text-sm text-[#f97316] font-medium">Lesson 1 of 4</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#5b21b6] mt-2 mb-4">
            How Your Company Makes Money
          </h1>
          <p className="text-xl text-gray-600">
            Before you can add value, you need to understand where the value comes from.
          </p>
        </header>

        {/* Core Content */}
        <article className="prose prose-lg max-w-none">
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Why This Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Most employees have only a vague understanding of how their company actually makes money. They know their own role, but not how it connects to revenue and profit. This blind spot limits your career. When you understand your company&apos;s business model - where money comes in, what it costs to operate, and what determines profitability - you can make better decisions, spot opportunities others miss, and speak the language of senior leadership.
            </p>
          </section>

          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Key Principles</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">1.</span>
                <div>
                  <strong>Revenue Streams</strong>
                  <p className="mt-1">Every company has one or more ways it brings in money. A software company might sell subscriptions. A retailer sells products. A consultancy sells expertise by the hour. Learn exactly what your company sells, to whom, and at what price points. Is revenue recurring or one-time? Growing or shrinking? Concentrated in a few big customers or spread across many?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">2.</span>
                <div>
                  <strong>Cost Structure</strong>
                  <p className="mt-1">Revenue is only half the picture. What does it cost to operate? The biggest costs are usually people, premises, and technology. Some costs are fixed (rent, salaries) while others are variable (materials, commissions). Understanding cost structure helps you see why some decisions get made and others don&apos;t.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">3.</span>
                <div>
                  <strong>Profit Margins</strong>
                  <p className="mt-1">Profit is revenue minus costs. But not all revenue is equal. Some products or services have high margins (software) while others are razor-thin (supermarkets). Know what your company&apos;s margins look like and where the most profitable business comes from. This tells you what the company will protect and invest in.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">4.</span>
                <div>
                  <strong>The Business Model Canvas</strong>
                  <p className="mt-1">A useful framework: who are your customers? What value do you provide them? How do you reach them? What relationships do you maintain? What are your key activities, resources, and partners? What are your costs and revenue streams? Mapping these out for your company gives you a complete picture.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316] font-bold">5.</span>
                <div>
                  <strong>Connect Your Role to Revenue</strong>
                  <p className="mt-1">Every role either directly generates revenue, supports those who do, or reduces costs. Figure out which category you&apos;re in and trace the line from your daily work to the company&apos;s financial performance. This isn&apos;t about being mercenary - it&apos;s about understanding how your contribution fits into the bigger picture.</p>
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
                  &quot;I work at [company name/type]. Help me map out the business model: what are the likely revenue streams, major costs, and profit drivers? What questions should I research to understand it better?&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#f97316]">
                <p className="font-medium text-[#f97316] mb-2">Get Feedback:</p>
                <p className="text-gray-700 italic">
                  &quot;My role is [describe your job]. Help me trace the connection between what I do daily and how the company makes money. How does my work impact revenue or reduce costs?&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Key Insight */}
          <div className="wisdom-box mb-8">
            <p className="font-medium text-[#5b21b6] mb-2">Key Insight</p>
            <blockquote className="text-lg font-serif text-[#5b21b6] italic">
              &quot;A business model describes the rationale of how an organization creates, delivers, and captures value.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">&mdash; Alexander Osterwalder, Business Model Generation</p>
          </div>

          {/* Books to Explore */}
          <section className="card p-8 mb-8">
            <h2 className="text-2xl font-serif text-[#5b21b6] mb-4">Books to Explore</h2>
            <ul className="space-y-2 text-gray-700">
              <li>&#8226; <em>Business Model Generation</em> by Alexander Osterwalder &amp; Yves Pigneur</li>
              <li>&#8226; <em>The Personal MBA</em> by Josh Kaufman</li>
              <li>&#8226; <em>Financial Intelligence</em> by Karen Berman &amp; Joe Knight</li>
            </ul>
          </section>
        </article>

        {/* Navigation */}
        <nav className="flex justify-between items-center pt-8 border-t">
          <Link href="/careers/commercial-awareness" className="text-[#5b21b6] hover:text-[#7c3aed]">
            &larr; Back to Commercial Awareness
          </Link>
          <Link href="/careers/commercial-awareness/understanding-your-industry" className="btn-primary">
            Next Lesson &rarr;
          </Link>
        </nav>
      </div>
    </div>
  );
}
