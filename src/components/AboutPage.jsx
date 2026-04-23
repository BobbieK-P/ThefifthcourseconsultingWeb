import founderImg from '../assets/IMG_3965.PNG';

const AboutPage = ({ setPage }) => (
  <div style={{ background: '#fff' }}>
    <div style={{ background: '#1A2744', padding: '72px 48px' }}>
      <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#A27021', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ display: 'block', width: 32, height: 1, background: '#A27021' }} />About
      </div>
      <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 44, fontWeight: 500, color: '#fff', maxWidth: 600, lineHeight: 1.13, margin: 0 }}>
        The advice is practical because it comes from someone who has <em style={{ fontStyle: 'italic', color: '#A27021' }}>actually done the work.</em>
      </h1>
    </div>

    <section style={{ padding: '72px 48px' }}>
      <div style={{ width: 40, height: 2, background: '#A27021', marginBottom: 20 }} />
      <div style={{ fontSize: 10, letterSpacing: '0.17em', textTransform: 'uppercase', color: '#A27021', marginBottom: 14, fontWeight: 500 }}>Founder Story</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginTop: 44, alignItems: 'start' }}>
        <div>
          {[
            "I'm Kendal Pierce — founder and director of The Fifth Course Consulting Ltd.",
            "I've spent over a decade working inside independent hospitality businesses. From silver service beginnings through multi-site group operations across Scotland and the West Midlands, to independent venue ownership. Kitchens, bars, front of house, management — I've worked across all of it.",
            "Every engagement I take on is grounded in the reality of having operated at every level of this industry. Not studied it. Not advised on it from the outside. Actually done it.",
            "What I found, time and again, was that the best independent operators — the talented, passionate, hard-working people building genuinely brilliant food businesses — were often fighting commercial battles they'd never been equipped to fight.",
            "The Fifth Course exists to change that.",
            "Every service I offer is built around a problem I've seen operators face in the real world. Every fee is fixed. Every engagement is led by me, personally.",
          ].map((t, i) => (
            <p key={i} style={{ fontSize: 14, lineHeight: 1.85, color: '#1A2744', marginBottom: 16 }}>{t}</p>
          ))}
          <button className="btn-outline" onClick={() => setPage('Contact')} style={{ background: 'transparent', color: '#1A2744', padding: '12px 28px', borderRadius: 2, border: '1px solid #C4BAB0', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase', marginTop: 8 }}>Get in touch</button>
        </div>
        <div style={{ background: '#F0F4F8', border: '1px solid #C4BAB0', borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ overflow: 'hidden', flexShrink: 0 }}>
            <img src={founderImg} alt="Kendal Pierce, Founder & Director" style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center top', aspectRatio: '3/4' }} />
          </div>
          <div style={{ padding: '20px 24px', borderTop: '1px solid #C4BAB0' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 500, color: '#1A2744' }}>Kendal Pierce</div>
            <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B6560', marginTop: 4 }}>Founder &amp; Director</div>
          </div>
        </div>
      </div>
    </section>

    <div style={{ height: 1, background: '#C4BAB0' }} />

    <section style={{ padding: '72px 48px', background: '#F0F4F8' }}>
      <div style={{ width: 40, height: 2, background: '#A27021', marginBottom: 20 }} />
      <div style={{ fontSize: 10, letterSpacing: '0.17em', textTransform: 'uppercase', color: '#A27021', marginBottom: 14, fontWeight: 500 }}>Qualifications &amp; Credentials</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: '#C4BAB0', border: '1px solid #C4BAB0', marginTop: 32, borderRadius: 6, overflow: 'hidden' }}>
        {[['10+', 'Years hospitality experience'], ['L3', 'Food Safety in Catering'], ['HACCP', 'Trained & Certified'], ['AA', 'Allergen Awareness Certified']].map(([n, l]) => (
          <div key={n} style={{ background: '#fff', padding: '24px 22px', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 600, color: '#A27021' }}>{n}</div>
            <div style={{ fontSize: 11, color: '#6B6560', marginTop: 5, lineHeight: 1.45 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>

    <div style={{ height: 1, background: '#C4BAB0' }} />

    <section style={{ padding: '72px 48px' }}>
      <div style={{ width: 40, height: 2, background: '#A27021', marginBottom: 20 }} />
      <div style={{ fontSize: 10, letterSpacing: '0.17em', textTransform: 'uppercase', color: '#A27021', marginBottom: 14, fontWeight: 500 }}>Mission &amp; Values</div>
      <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 42, fontWeight: 500, color: '#1A2744', margin: '0 0 16px', lineHeight: 1.1 }}>What We <em style={{ fontStyle: 'italic' }}>Stand For</em></h2>
      <p style={{ fontSize: 15, color: '#6B6560', maxWidth: 540, lineHeight: 1.75 }}>Five principles that shape every engagement we take on.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#C4BAB0', border: '1px solid #C4BAB0', borderRadius: 6, overflow: 'hidden', marginTop: 44 }}>
        {[
          ['Commercial honesty', "You get honest assessments, not comfortable reassurances. If something is not working, we will tell you — and show you how to fix it."],
          ['Operator-first thinking', 'Every recommendation is filtered through the reality of what is actually achievable in an independent kitchen or front of house.'],
          ['Transparency', 'Fixed fees. Clear deliverables. No hidden charges, no supplier commissions, no conflicts of interest.'],
          ['Accountability', 'Outcomes are measured and shared. Results matter more than reports.'],
        ].map(([title, text]) => (
          <div key={title} style={{ background: '#fff', padding: 28 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, color: '#1A2744', marginBottom: 10 }}>{title}</div>
            <div style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.7 }}>{text}</div>
          </div>
        ))}
        <div style={{ background: '#fff', padding: 28, gridColumn: '1/-1' }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, color: '#1A2744', marginBottom: 10 }}>Independence</div>
          <div style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.7 }}>No generalist dilution. No template-first consulting. Deep, current sector expertise — always.</div>
        </div>
      </div>
    </section>

    <div style={{ background: '#1A2744', padding: '72px 48px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 46, fontWeight: 500, color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>The first conversation<br />is always <em style={{ fontStyle: 'italic', color: '#A27021' }}>free.</em></h2>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', margin: '0 0 34px' }}>No pitch. No obligation. Just a conversation about your business and whether we're the right fit.</p>
      <button className="btn-gold" onClick={() => setPage('Contact')} style={{ background: '#A27021', color: '#fff', padding: '14px 30px', borderRadius: 2, border: 'none', fontSize: 13, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Get in touch</button>
    </div>
  </div>
);

export default AboutPage;
