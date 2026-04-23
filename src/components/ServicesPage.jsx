const SERVICES = [
  {
    num: '01', name: 'Operational Audit',
    intro: 'A fresh pair of expert eyes on your business.',
    body: 'A structured, evidence-based review of your operational performance, delivered over one or two days on-site and followed by a written report with prioritised recommendations and a clear 30-day improvement plan. The audit covers kitchen efficiency, front of house standards, stock and waste management, labour scheduling, hygiene and compliance, supplier terms and technology usage.',
    deliverable: 'Written audit report (10–15 pages), prioritised action matrix, 30-day improvement plan, 30-day telephone review.',
    bestFor: 'Any established independent operator at a commercial inflection point.',
  },
  {
    num: '02', name: 'Menu Engineering',
    intro: 'Know exactly what is on your menu and what it is costing you.',
    body: "A data-led analysis of menu performance combining sales data, food cost analysis, dish GP modelling and a competitive pricing review. Every dish is classified — Stars, Ploughhorses, Puzzles and Dogs — so you know exactly which items to protect, which to engineer and which to reconsider.",
    deliverable: 'Menu engineering report, GP calculator (Excel), revised pricing recommendations, menu redesign brief.',
    bestFor: "Any operator with 12 or more dishes who hasn't done a systematic profitability review in the past 12 months.",
  },
  {
    num: '03', name: 'Revenue Strategy',
    intro: "Find the revenue that's already there, waiting to be unlocked.",
    body: 'A full review of your revenue streams, daypart performance, covers and occupancy modelling, pricing architecture and events potential. Most independent operators are leaving meaningful revenue on the table — not through any failure of effort, but through untested assumptions about pricing, timing and customer behaviour.',
    deliverable: 'Revenue strategy document, 90-day action plan, modelled revenue scenarios, pricing framework.',
    bestFor: 'Operators seeking to grow revenue beyond current trading patterns, or those facing declining covers despite consistent quality.',
  },
  {
    num: '04', name: 'Operations Optimisation',
    intro: 'Sustained, structured intervention for businesses with multiple operational challenges.',
    body: 'A deep operational engagement covering SOP development, staff training delivery, supplier renegotiation support and a full labour cost review — delivered across multiple on-site visits over 4–6 weeks. Designed for operators facing multiple interconnected operational problems.',
    deliverable: 'SOP library, staff training programme, supplier terms review, labour cost model, 60-day review call.',
    bestFor: 'Operators with multiple interconnected operational problems requiring sustained, hands-on intervention.',
  },
  {
    num: '05', name: 'Technology Consulting',
    intro: 'The right technology advice. Without the sales pitch.',
    body: 'Advisory and implementation support for hospitality technology decisions — EPOS selection, booking system implementation, delivery platform strategy, stock management and KPI reporting setup. No commissions. No preferred suppliers. Just the right answer for your specific business.',
    deliverable: 'Technology audit report, scored system shortlist, implementation timeline, staff training guidance.',
    bestFor: 'Operators making a technology change, or managing inefficiencies caused by disconnected or outdated systems.',
  },
  {
    num: '06', name: 'Retained Advisory',
    intro: 'A senior advisor in your corner. Every single month.',
    body: 'An ongoing monthly advisory relationship providing strategic oversight, KPI monitoring, team coaching, supplier management support and senior advisory access. Retained clients receive a structured monthly strategy session, a written monthly performance report and priority access for ad hoc queries.',
    deliverable: 'Monthly KPI report, monthly strategy session, ad hoc advisory access, quarterly on-site session.',
    bestFor: 'Operators who have completed a project engagement and want ongoing senior advisory support.',
  },
];

const ServicesPage = ({ setPage }) => (
  <div style={{ background: '#fff' }}>
    <div style={{ background: '#1A2744', padding: '72px 48px' }}>
      <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#A27021', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ display: 'block', width: 32, height: 1, background: '#A27021' }} />Services
      </div>
      <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 44, fontWeight: 500, color: '#fff', maxWidth: 600, lineHeight: 1.13, margin: 0 }}>
        Six services. All fixed-fee.<br /><em style={{ fontStyle: 'italic', color: '#A27021' }}>All built around problems</em><br />operators actually have.
      </h1>
    </div>

    <section style={{ padding: '48px 48px 0' }}>
      <p style={{ fontSize: 15, color: '#6B6560', maxWidth: 620, lineHeight: 1.75 }}>Every service line has been designed around a specific, recurrent commercial or operational challenge faced by independent food and drink businesses. You know exactly what you'll receive, and exactly what you'll pay, before any work begins.</p>
    </section>

    {SERVICES.map((s, i) => (
      <div key={s.num} style={{ padding: '48px 48px', borderBottom: '1px solid #C4BAB0', background: i % 2 === 1 ? '#F0F4F8' : '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 500, color: '#1A2744' }}>{s.num} &nbsp; {s.name}</div>
        </div>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontStyle: 'italic', color: '#1A2744', marginBottom: 14, lineHeight: 1.5 }}>{s.intro}</div>
        <div style={{ fontSize: 14, color: '#6B6560', lineHeight: 1.82, marginBottom: 22 }}>{s.body}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: '#EEF2F7', borderLeft: '2px solid #A27021', padding: '14px 18px', borderRadius: '0 4px 4px 0' }}>
            <div style={{ fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#A27021', marginBottom: 5, fontWeight: 500 }}>Deliverable</div>
            <div style={{ fontSize: 12, color: '#1A2744', lineHeight: 1.65 }}>{s.deliverable}</div>
          </div>
          <div style={{ background: '#EEF2F7', borderLeft: '2px solid #A27021', padding: '14px 18px', borderRadius: '0 4px 4px 0' }}>
            <div style={{ fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#A27021', marginBottom: 5, fontWeight: 500 }}>Best For</div>
            <div style={{ fontSize: 12, color: '#1A2744', lineHeight: 1.65 }}>{s.bestFor}</div>
          </div>
        </div>
      </div>
    ))}

    <section style={{ padding: '72px 48px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 38, fontWeight: 500, color: '#1A2744', margin: '0 0 12px', lineHeight: 1.1 }}>Not sure which service<br />is right for you?</h2>
      <p style={{ fontSize: 15, color: '#6B6560', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.75 }}>Get in touch for a free 30-minute discovery call. We'll talk through your business, understand what's working and what isn't, and recommend the most appropriate starting point.</p>
      <button className="btn-gold" onClick={() => setPage('Contact')} style={{ background: '#A27021', color: '#fff', padding: '14px 30px', borderRadius: 2, border: 'none', fontSize: 13, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Book a Discovery Call</button>
    </section>
  </div>
);

export default ServicesPage;
