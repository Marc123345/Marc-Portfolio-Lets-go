import type { Metadata } from 'next';

const title = 'Accessibility Statement';
const description =
  "Marc Friedman's commitment to digital accessibility: our WCAG 2.1 AA conformance target, the accessibility features built into this site, and how to report any barriers you encounter.";
const url = 'https://www.marcfriedmanportfolio.com/accessibility-statement/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default function Page() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
          Accessibility Statement
        </h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p>
            Marc Friedman is committed to ensuring digital accessibility for people with
            disabilities. We are continually improving the user experience for everyone and
            applying the relevant accessibility standards.
          </p>

          <h2>Conformance status</h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) define requirements for designers and
            developers to improve accessibility for people with disabilities, across three levels
            of conformance: Level A, Level AA, and Level AAA. This website aims to conform to{' '}
            <strong>WCAG 2.1 Level AA</strong>. We test against those criteria and treat any gap we
            find as a defect to fix.
          </p>

          <h2>Accessibility features</h2>
          <p>This site is built with the following accessibility features:</p>
          <ul>
            <li>Semantic HTML structure that conveys headings, landmarks, and reading order</li>
            <li>Full keyboard navigation, with visible focus indicators on interactive elements</li>
            <li>ARIA attributes where native semantics are not enough for assistive technology</li>
            <li>Descriptive alt text for meaningful images</li>
            <li>Text that resizes and reflows without loss of content or functionality</li>
            <li>Color contrast that meets the WCAG AA minimums for text and interface elements</li>
            <li>Screen reader support, tested with common readers</li>
          </ul>

          <h2>Keyboard navigation</h2>
          <p>
            The site is operable with a keyboard alone. Use <strong>Tab</strong> and{' '}
            <strong>Shift+Tab</strong> to move between interactive elements, and{' '}
            <strong>Enter</strong> or <strong>Space</strong> to activate them.
          </p>

          <h2>Assessment approach</h2>
          <p>Marc Friedman assesses the accessibility of this website through:</p>
          <ul>
            <li>Self-evaluation against the WCAG 2.1 AA criteria</li>
            <li>Automated testing tools (Axe, WAVE, Lighthouse)</li>
            <li>Manual testing with a keyboard and screen readers</li>
          </ul>

          <h2>Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of this website. If you encounter a
            barrier, please let us know so we can fix it:
          </p>
          <ul>
            <li>
              Email:{' '}
              <a href="mailto:marcf@marcfriedmanwebdesign.com">marcf@marcfriedmanwebdesign.com</a>
            </li>
            <li>
              Contact form: <a href="/contact/">Contact page</a>
            </li>
          </ul>
          <p>We aim to respond to accessibility feedback within five business days.</p>
        </div>
      </div>
    </section>
  );
}
