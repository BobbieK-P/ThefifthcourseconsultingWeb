import useIsMobile from '../hooks/useIsMobile';

const Rule = () => <div style={{ width: 40, height: 2, background: '#A27021', marginBottom: 20 }} />;

const SLabel = ({ children }) => (
  <div style={{ fontSize: 10, letterSpacing: '0.17em', textTransform: 'uppercase', color: '#A27021', marginBottom: 14, fontWeight: 500 }}>{children}</div>
);

const Eyebrow = ({ children }) => (
  <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#A27021', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
    <span style={{ display: 'block', width: 32, height: 1, background: '#A27021' }} />
    {children}
  </div>
);

const services = [
  { num: '01', name: 'Operational Audit', desc: 'A structured, evidence-based review of your business. On-site delivery, written report and a 30-day improvement plan.' },
  { num: '02', name: 'Menu Engineering', desc: 'A data-led analysis of every dish on your menu. GP modelling, pricing review and a clear plan to improve profitability.' },
  { num: '03', name: 'Revenue Strategy', desc: 'A full review of your revenue streams, daypart performance and pricing — with a 90-day action plan.' },
  { num: '04', name: 'Operations Optimisation', desc: 'Sustained operational intervention: SOP development, staff training and supplier renegotiation over 4–6 weeks.' },
  { num: '05', name: 'Technology Consulting', desc: 'Unbiased advisory on EPOS, booking systems and delivery platforms — without the sales pitch.' },
  { num: '06', name: 'Retained Advisory', desc: 'An ongoing monthly relationship. A senior advisor in your corner, every month.' },
];

const creds = [
  { n: '10+', l: 'Years hospitality experience' },
  { n: 'L3',  l: 'Food Safety in Catering' },
  { n: 'HACCP', l: 'Trained & Certified' },
  { n: 'AA', l: 'Allergen Awareness Certified' },
];

const HomePage = ({ setPage }) => {
  const isMobile = useIsMobile();
  const px = isMobile ? '24px' : '48px';
  const sectionPad = isMobile ? '48px 24px' : '72px 48px';

  return (
    <div style={{ background: '#fff' }}>
      {/* HERO */}
      <section style={{ background: '#1A2744', padding: isMobile ? '56px 24px 48px' : '88px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, border: '1px solid rgba(162,112,33,0.14)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -50, right: 80, width: 200, height: 200, border: '1px solid rgba(162,112,33,0.09)', borderRadius: '50%', pointerEvents: 'none' }} />
        <Eyebrow>Specialist hospitality consultancy</Eyebrow>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 38 : 60, fontWeight: 500, lineHeight: 1.1, color: '#fff', margin: '0 0 24px', maxWidth: 580 }}>
          Running a great food<br />business is hard enough.<br /><em style={{ fontStyle: 'italic', color: '#A27021' }}>Running a profitable one</em><br />takes something more.
        </h1>
        <p style={{ fontSize: isMobile ? 15 : 16, color: 'rgba(255,255,255,0.62)', maxWidth: 480, margin: '0 0 32px', lineHeight: 1.75 }}>
          The Fifth Course is a specialist consultancy for independent restaurants, cafés, bars, pubs and food businesses across the UK. We help operators become more profitable, more efficient and more sustainable — without losing what makes them brilliant.
        </p>
        <div style={{ display: 'flex', gap: 12, flexDirection: isMobile ? 'column' : 'row' }}>
          <button className="btn-gold" onClick={() => setPage('Contact')} style={{ background: '#A27021', color: '#fff', padding: '14px 30px', borderRadius: 2, border: 'none', fontSize: 13, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Get in Touch</button>
          <button className="btn-ghost" onClick={() => setPage('Services')} style={{ background: 'transparent', color: '#fff', padding: '13px 30px', borderRadius: 2, border: '1px solid rgba(255,255,255,0.28)', fontSize: 13, letterSpacing: '0.07em', textTransform: 'uppercase' }}>See Our Services</button>
        </div>
      </section>

      {/* VALUE STRIP */}
      <div style={{ background: '#F0F4F8', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', borderBottom: '1px solid #C4BAB0' }}>
        {[
          ['Fixed Fees', "You know exactly what you'll pay before we start."],
          ['Founder-Led', 'Every engagement led personally by Kendal Pierce.'],
          ['Independents Only', 'We work exclusively with independent operators. Always.'],
        ].map(([label, text]) => (
          <div key={label} style={{ padding: isMobile ? '20px 24px' : '30px 36px', borderBottom: isMobile ? '1px solid #C4BAB0' : 'none', borderRight: isMobile ? 'none' : '1px solid #C4BAB0' }}>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A27021', fontWeight: 500, marginBottom: 8 }}>{label}</div>
            <div style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.55 }}>{text}</div>
          </div>
        ))}
      </div>

      {/* INTRO */}
      <section style={{ padding: sectionPad, background: '#fff' }}>
        <Rule /><SLabel>Our approach</SLabel>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 32 : 42, fontWeight: 500, color: '#1A2744', margin: '0 0 16px', lineHeight: 1.1 }}>
          Most consultancies <em style={{ fontStyle: 'italic' }}>talk</em><br />about hospitality.<br />We've worked in it.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 32 : 60, alignItems: 'start', marginTop: 44 }}>
          <div style={{ fontSize: 15, lineHeight: 1.8, color: '#1A2744' }}>
            <p style={{ margin: '0 0 18px' }}>Over a decade across kitchens, bars, front of house and management — in independent venues across the West Midlands and Scotland. The advice we give is practical because it comes from someone who has actually stood where you're standing.</p>
            <p style={{ margin: '0 0 18px' }}>The Fifth Course works with independent food and drink operators at every stage — from established venues looking to tighten their margins, to businesses preparing to open their second site.</p>
            <p>No jargon. No corporate playbook. No generalist advice adapted from somewhere else. Just honest, commercial support from someone who gets it.</p>
          </div>
          <div style={{ borderLeft: '2px solid #A27021', padding: '22px 26px', background: '#EEF2F7', borderRadius: '0 6px 6px 0' }}>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 19 : 23, fontStyle: 'italic', color: '#1A2744', margin: '0 0 14px', lineHeight: 1.42 }}>
              "Good independent operators deserve the kind of commercial support that has always been available to the big groups — but never really to them."
            </p>
            <cite style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6560', fontStyle: 'normal' }}>Kendal Pierce, Founder &amp; Director</cite>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: '#C4BAB0' }} />

      {/* SERVICES */}
      <section style={{ padding: sectionPad, background: '#F0F4F8' }}>
        <Rule /><SLabel>What We Do</SLabel>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 32 : 42, fontWeight: 500, color: '#1A2744', margin: '0 0 16px', lineHeight: 1.1 }}>
          Six services. All fixed-fee.<br /><em style={{ fontStyle: 'italic' }}>All deliverable-led.</em>
        </h2>
        <p style={{ fontSize: 15, color: '#6B6560', maxWidth: 540, lineHeight: 1.75 }}>Built around the real challenges independent operators face. You know exactly what you'll receive, and what you'll pay, before any work begins.</p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 1, background: '#C4BAB0', border: '1px solid #C4BAB0', marginTop: 52, borderRadius: 6, overflow: 'hidden' }}>
          {services.map(s => (
            <div key={s.num} className="service-card" style={{ background: '#fff', padding: '30px 30px 26px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, color: '#A27021', letterSpacing: '0.1em', marginBottom: 12, fontWeight: 500 }}>{s.num}</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 23, fontWeight: 600, color: '#1A2744', margin: '0 0 9px', lineHeight: 1.2 }}>{s.name}</div>
              <div style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.65, margin: '0 0 18px' }}>{s.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <button className="btn-outline" onClick={() => setPage('Services')} style={{ background: 'transparent', color: '#1A2744', padding: '12px 28px', borderRadius: 2, border: '1px solid #C4BAB0', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase' }}>See all services</button>
        </div>
      </section>

      {/* FOUNDER */}
      <div style={{ background: '#1A2744', padding: isMobile ? '48px 24px' : '64px 48px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr', gap: isMobile ? 24 : 52, alignItems: 'center' }}>
        <div style={{ width: 84, height: 84, borderRadius: '50%', background: 'rgba(162,112,33,0.15)', border: '1px solid rgba(162,112,33,0.42)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 500, color: '#A27021', flexShrink: 0 }}>KP</div>
        <div>
          <Eyebrow>About Kendal</Eyebrow>
          <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 28 : 34, fontWeight: 500, color: '#fff', margin: '0 0 14px' }}>Meet Kendal Pierce</h3>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: '0 0 22px', lineHeight: 1.75 }}>I spent over a decade in hospitality — from silver service and shift supervision through to General Manager Designate. I started The Fifth Course because good independent operators deserve practical, honest support built on real experience.</p>
          <button className="btn-ghost" onClick={() => setPage('About')} style={{ background: 'transparent', color: '#fff', padding: '9px 22px', borderRadius: 2, border: '1px solid rgba(255,255,255,0.28)', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase' }}>More about me</button>
        </div>
      </div>

      {/* CREDS */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: 1, background: '#C4BAB0', borderBottom: '1px solid #C4BAB0' }}>
        {creds.map(c => (
          <div key={c.n} style={{ background: '#fff', padding: '24px 22px', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 600, color: '#A27021' }}>{c.n}</div>
            <div style={{ fontSize: 11, color: '#6B6560', marginTop: 5, lineHeight: 1.45 }}>{c.l}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: '#1A2744', padding: isMobile ? '56px 24px' : '72px 48px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 36 : 46, fontWeight: 500, color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>The first conversation<br />is always <em style={{ fontStyle: 'italic', color: '#A27021' }}>free.</em></h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', margin: '0 0 34px' }}>No pitch. No obligation. Just a conversation about your business and whether we're the right fit.</p>
        <button className="btn-gold" onClick={() => setPage('Contact')} style={{ background: '#A27021', color: '#fff', padding: '14px 30px', borderRadius: 2, border: 'none', fontSize: 13, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Get in touch</button>
      </div>
    </div>
  );
};

export default HomePage;
