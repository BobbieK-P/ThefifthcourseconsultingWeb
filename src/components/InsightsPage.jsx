const POSTS = [
  { tag: 'Menu', title: "Why your menu is probably too long — and what to do about it", excerpt: "Most independent operators have added dishes over time without a systematic review. Here's what the data says about menu length and profitability." },
  { tag: 'Finance', title: "The four numbers every independent restaurant owner should know", excerpt: "GP percentage, labour cost ratio, RevPASH, and average cover spend. If you don't know these weekly, you're flying blind." },
  { tag: 'Operations', title: "What a good operational audit actually looks at — and what it finds", excerpt: "The areas where independent venues consistently over-spend, under-perform and leave money on the table." },
  { tag: 'Compliance', title: "The NLW increase: what it means for your wage bill and what to do before April", excerpt: "The National Living Wage rise will hit independent operators harder than most. Here's how to model the impact and respond ahead of time." },
  { tag: 'Technology', title: "AI in hospitality — is it actually useful for independent operators?", excerpt: "A grounded look at where AI tools genuinely help independent venues, and where the hype outpaces the reality." },
];

const InsightsPage = ({ setPage }) => (
  <div style={{ background: '#fff' }}>
    <div style={{ background: '#1A2744', padding: '72px 48px' }}>
      <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#A27021', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ display: 'block', width: 32, height: 1, background: '#A27021' }} />Insights
      </div>
      <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 44, fontWeight: 500, color: '#fff', maxWidth: 600, lineHeight: 1.13, margin: 0 }}>
        Practical thinking for<br /><em style={{ fontStyle: 'italic', color: '#A27021' }}>independent operators.</em>
      </h1>
    </div>

    <section style={{ padding: '72px 48px' }}>
      <p style={{ fontSize: 15, color: '#6B6560', maxWidth: 580, lineHeight: 1.75 }}>Honest observations, practical advice and commercial thinking on the issues that matter most to independent food and drink businesses. No opinion pieces for the sake of it. Just things that are actually useful.</p>
      <p style={{ fontSize: 13, color: '#6B6560', marginTop: 12 }}>Written by Kendal Pierce. Published at minimum twice per month.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 44 }}>
        {POSTS.map(p => (
          <div key={p.title} className="insight-card" style={{ border: '1px solid #C4BAB0', borderRadius: 6, padding: 26, background: '#fff', cursor: 'pointer' }}>
            <div style={{ fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#A27021', marginBottom: 11, fontWeight: 500 }}>{p.tag}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 21, fontWeight: 600, color: '#1A2744', lineHeight: 1.26, margin: '0 0 9px' }}>{p.title}</div>
            <p style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.65, margin: 0 }}>{p.excerpt}</p>
          </div>
        ))}
        <div style={{ background: '#F0F4F8', border: '1px dashed #C4BAB0', borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 30px' }}>
          <div style={{ fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#A27021', marginBottom: 8, fontWeight: 500 }}>Coming soon</div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 600, color: '#1A2744', lineHeight: 1.26 }}>More posts every fortnight</div>
          <p style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.65, margin: '8px 0 0' }}>Written by Kendal Pierce, direct from the field.</p>
        </div>
      </div>
    </section>

    <div style={{ background: '#1A2744', padding: '72px 48px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 46, fontWeight: 500, color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>Want to talk through<br />what you've <em style={{ fontStyle: 'italic', color: '#A27021' }}>read?</em></h2>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', margin: '0 0 34px' }}>Get in touch for a free discovery call — no pitch, no obligation.</p>
      <button className="btn-gold" onClick={() => setPage('Contact')} style={{ background: '#A27021', color: '#fff', padding: '14px 30px', borderRadius: 2, border: 'none', fontSize: 13, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Get in touch</button>
    </div>
  </div>
);

export default InsightsPage;
