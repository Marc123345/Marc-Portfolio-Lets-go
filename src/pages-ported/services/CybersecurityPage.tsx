"use client";

import {
  ServiceMasthead,
  ServiceMarquee,
  EditorialSection,
  ProblemQuote,
  DeliverableRow,
  ProcessChapter,
  StatsBar,
  WorkRow,
  ServiceColophon,
  ServiceNavigator,
} from '@/components/ServiceEditorial';

export default function CybersecurityPage() {
  return (
    <>
      <ServiceMasthead
        kicker="Service · Cybersecurity Assessment Services"
        title="Secure by"
        italicWord="Design."
        volumeNumber="05"
        tagline={
          <>
            Cybersecurity assessment services and cyber security penetration testing
            services for product teams who can&apos;t afford to bolt security on after
            a breach. IT security assessments, dashboards, auth, and access control
            built for SOC-grade reality.
          </>
        }
        meta={['OWASP-aware', 'SOC-grade UX', 'Pen-test friendly']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg"
      />

<EditorialSection
        chapter="01"
        label="Who it's for"
        title="If security"
        italicTitle="is an afterthought."
        lead="Most teams call me after a close call or a compliance deadline they suddenly can't ignore."
      >
        <div className="space-y-16">
          {[
            {
              text: "Our pen test report came back ugly and we need to ship fixes fast.",
              align: 'left' as const,
              size: 'lg' as const,
            },
            {
              text: "Our SOC analysts are drowning in alerts because the dashboard is unreadable.",
              align: 'right' as const,
              size: 'md' as const,
            },
            {
              text: "We're chasing SOC 2 and half our UI ignores access control.",
              align: 'left' as const,
              size: 'md' as const,
            },
            {
              text: "We need security features in-product but they can't slow users down.",
              align: 'right' as const,
              size: 'lg' as const,
            },
          ].map((p, i) => (
            <div
              key={i}
              className={`flex ${p.align === 'right' ? 'justify-end' : 'justify-start'}`}
            >
              <ProblemQuote text={p.text} align={p.align} size={p.size} />
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="02"
        label="What you get"
        title="Security, made"
        italicTitle="usable."
        lead="Cybersecurity assessments aren't a checkbox here — they're how every engagement starts. IT security assessment, cyber security audit and compliance, and remediation rolled into a single SOW."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="SOC & Threat Dashboards"
            description="Interfaces tuned for analysts working under pressure. 5-level severity systems, live alert queues, and component libraries that make triage fast."
          />
          <DeliverableRow
            number="02"
            title="Auth + Access Control"
            description="Secure login flows, MFA, session handling, and role-based access — built so they don't feel like obstacles to legitimate users."
          />
          <DeliverableRow
            number="03"
            title="Compliance-Ready UX"
            description="Consent flows, audit trails, data export, and deletion UIs that check the SOC 2 / GDPR / HIPAA boxes without breaking the product."
          />
          <DeliverableRow
            number="04"
            title="Sentinel DS"
            description="An enterprise cybersecurity design system — tokens, components, and documentation purpose-built for security interfaces. Published as open source."
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="03"
        label="The Process"
        title="Model the threat,"
        italicTitle="build the defence."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Threat Model"
            description="What are we defending, against whom, and how much friction are we allowed to add?"
            items={[
              'Asset inventory',
              'Attacker personas',
              'Abuse + misuse cases',
              'Risk register',
            ]}
          />
          <ProcessChapter
            numeral="II."
            title="Design"
            description="Security features designed alongside the product — not after. Friction where it matters, frictionless everywhere else."
            items={[
              'Auth + session design',
              'Role-based UI states',
              'Alerting + incident flows',
              'Consent + audit surfaces',
            ]}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Build"
            description="Production-grade implementation — secure by default, with observability baked in."
            items={[
              'OWASP-aware frontend',
              'Hardened backend',
              'Audit logging',
              'Pen-test preparation',
            ]}
          />
          <ProcessChapter
            numeral="IV."
            title="Verify"
            description="Handoff to pen testers, walkthrough with auditors, and a remediation plan for findings."
            items={[
              'Pen-test coordination',
              'Audit-ready docs',
              'Remediation plan',
              'Security design system',
            ]}
            reverse
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="04"
        label="Proof"
        title="Built for"
        italicTitle="the real attack surface."
        bg="bg-[#0a0a0a]"
      >
        <StatsBar
          stats={[
            { value: 'AA', label: 'Accessibility' },
            { value: 'OWASP', label: 'Top 10 Aware' },
            { value: '5-Lvl', label: 'Severity Scale' },
            { value: 'Open', label: 'Source DS' },
          ]}
        />
        <WorkRow
          items={[
            {
              href: '/services/design-systems/',
              title: 'Sentinel DS',
              blurb:
                'Open-source cybersecurity design system — tokens, components, SOC-ready patterns.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
              tags: ['DS', 'Security'],
            },
            {
              href: '/work/case-studies/automarginx/',
              title: 'AutoMarginX',
              blurb:
                'Role-based dealer analytics platform with secure auth and auditable data flows.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp',
              tags: ['Auth', 'Analytics'],
            },
          ]}
        />
      </EditorialSection>

      {/* Chapter 05 — Specialties (long-tail security keyword anchors) */}
      <EditorialSection
        chapter="05"
        label="Specialties"
        title="Cyber security assessment"
        italicTitle="and management, end-to-end."
        lead="A cybersecurity assessment without a remediation plan is just an expensive scare. Every engagement here pairs the audit with the build — cyber security assessment and management together, not separately invoiced."
      >
        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              01
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Cybersecurity assessment services
            </h3>
            <p className="text-white/70 leading-relaxed">
              Full cybersecurity assessment services — OWASP Top 10 review,
              architecture audit, secret scanning, dependency CVE check, and a
              remediation roadmap ranked by exploit likelihood × business impact.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              02
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Cyber security penetration testing services
            </h3>
            <p className="text-white/70 leading-relaxed">
              Manual + automated cyber security penetration testing services, plus
              website penetration testing service work and web security services for
              SaaS apps and customer portals. Includes hands-on website security
              services — findings ranked, scoped to fix, and re-tested after
              remediation.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              03
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Cyber security audit and compliance
            </h3>
            <p className="text-white/70 leading-relaxed">
              Cyber security audit and compliance work for teams chasing SOC 2,
              ISO 27001, GDPR, or HIPAA. Cyber security auditing focused on the
              gaps that actually block your auditor — not theatre for the board deck.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              04
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              IT security assessments + remediation
            </h3>
            <p className="text-white/70 leading-relaxed">
              Full IT security assessments covering infrastructure, identity, and
              data — not just app code. Then the same hands that ran the IT security
              assessment ship the fixes, so nothing gets lost between audit and build.
            </p>
          </div>
        </div>
      </EditorialSection>

      <ServiceNavigator currentSlug="cybersecurity" />
      <ServiceColophon
        headline="Security that"
        italicHeadline="doesn&apos;t get in the way."
        lead="Book a call and I'll walk through what a real cybersecurity assessment looks like for your specific product — and where yours is likely leaking."
      />
    </>
  );
}
