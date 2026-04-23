const STEPS = [
  ['01', 'Get in touch', "Send us a message, call or fill in the contact form. We'll respond within four business hours."],
  ['02', 'Discovery call', "A free 30-minute call to understand your business, your challenge and whether we're the right fit. No obligation."],
  ['03', 'Written proposal', "If there's a clear fit, we'll send a written proposal within 48 hours. Fixed fee, clear scope, defined deliverables."],
  ['04', 'Contract and deposit', 'A simple engagement letter and 50% deposit invoice. Work begins once both are received.'],
  ['05', 'Kick-off session', 'A structured conversation to agree the scope in detail, confirm data requirements and set the timeline.'],
  ['06', 'Delivery', 'Work conducted to the agreed schedule, with regular progress updates throughout.'],
  ['07', 'Findings and recommendations', 'All deliverables presented in person or by video. A feedback session to make sure everything lands clearly.'],
  ['08', '30-day follow-up', 'A follow-up call at the 30-day mark to review progress, answer questions and agree next steps. Included at no extra charge.'],
];

const FAQS = [
  ['How long does an engagement take?', "It depends on the service. An Operational Audit is typically completed within two weeks of the on-site visit. Menu Engineering takes 3–4 weeks. Full timelines are included in your written proposal before any work begins."],
  ["Do I need to prepare anything in advance?", "For most engagements, we'll ask for some basic information beforehand — sales data, current menus, a recent P&L. We'll send a clear checklist after the discovery call. Nothing onerous."],
  ['What areas do you cover?', 'We work primarily across the West Midlands and surrounding regions. Travel is included within 40 miles of base. Beyond that, travel costs are agreed in advance and charged at cost.'],
  ['Do you work with struggling businesses, or just those looking to grow?', 'Both. Some clients come with a specific problem to solve. Others are doing well and want to do better. Both conversations are equally welcome.'],
  ['Is everything confidential?', 'Completely. All information shared during an engagement is treated as strictly confidential. Our contract includes a full confidentiality clause.'],
  ["What happens after the engagement ends?", "Most project clients move on to a retained advisory relationship. If a retainer isn't right for you, the 30-day follow-up call is included in every engagement at no extra charge."],
];

const WorkWithUsPage = ({ setPage }) => (
  <div style={{ background: '#fff' }}>
    <div style={{ background: '#1A2744', padding: '72px 48px' }}>
      <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#A27021', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ display: 'block', width: 32, height: 1, background: '#A27021' }} />Work With Us
      </div>
      <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 44, fontWeight: 500, color: '#fff', maxWidth: 600, lineHeight: 1.13, margin: 0 }}>
        A clear, professional process<br />from first conversation to<br /><em style={{ fontStyle: 'italic', color: '#A27021' }}>final outcome.</em>
      </h1>
    </div>

    <section style={{ padding: '72px 48px' }}>
      <p style={{ fontSize: 15, color: '#6B6560', maxWidth: 560, lineHeight: 1.75 }}>Every engagement follows the same structured process. You know what happens next at every stage — no surprises, no ambiguity, no open-ended scope.</p>
      <p style={{ fontSize: 13, color: '#6B6560', marginTop: 12 }}>All services are fixed-fee. A 50% deposit is due on signing. The balance is due on delivery of the final output.</p>
      <div style={{ marginTop: 48 }}>
        {STEPS.map(([n, title, desc]) => (
          <div key={n} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 24, alignItems: 'start', paddingBottom: 28, marginBottom: 28, borderBottom: '1px solid #C4BAB0' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 400, color: '#A27021', lineHeight: 1, marginTop: 2 }}>{n}</div>
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 500, color: '#1A2744', margin: '0 0 5px' }}>{title}</h4>
              <p style={{ fontSize: 13, color: '#6B6560', margin: 0, lineHeight: 1.65 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <div style={{ height: 1, background: '#C4BAB0' }} />

    <section style={{ padding: '72px 48px', background: '#F0F4F8' }}>
      <div style={{ width: 40, height: 2, background: '#A27021', marginBottom: 20 }} />
      <div style={{ fontSize: 10, letterSpacing: '0.17em', textTransform: 'uppercase', color: '#A27021', marginBottom: 14, fontWeight: 500 }}>Frequently Asked Questions</div>
      <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 42, fontWeight: 500, color: '#1A2744', margin: '0 0 32px', lineHeight: 1.1 }}>Common <em style={{ fontStyle: 'italic' }}>Questions</em></h2>
      {FAQS.map(([q, a]) => (
        <div key={q} className="faq-item" style={{ borderBottom: '1px solid #C4BAB0', padding: '22px 0' }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, color: '#1A2744', marginBottom: 10 }}>{q}</div>
          <div style={{ fontSize: 14, color: '#6B6560', lineHeight: 1.75 }}>{a}</div>
        </div>
      ))}
    </section>

    <div style={{ background: '#1A2744', padding: '72px 48px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 46, fontWeight: 500, color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>Ready to get<br /><em style={{ fontStyle: 'italic', color: '#A27021' }}>started?</em></h2>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', margin: '0 0 34px' }}>Book a free 30-minute discovery call. No pitch, no obligation — just a conversation.</p>
      <button className="btn-gold" onClick={() => setPage('Contact')} style={{ background: '#A27021', color: '#fff', padding: '14px 30px', borderRadius: 2, border: 'none', fontSize: 13, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Book a Discovery Call</button>
    </div>
  </div>
);

export default WorkWithUsPage;
