import { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div style={{ background: '#fff' }}>
      <div style={{ background: '#1A2744', padding: '72px 48px' }}>
        <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#A27021', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ display: 'block', width: 32, height: 1, background: '#A27021' }} />Contact
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 44, fontWeight: 500, color: '#fff', maxWidth: 600, lineHeight: 1.13, margin: 0 }}>
          Let's talk about<br /><em style={{ fontStyle: 'italic', color: '#A27021' }}>your business.</em>
        </h1>
      </div>

      <section style={{ padding: '72px 48px' }}>
        <p style={{ fontSize: 15, color: '#6B6560', maxWidth: 540, lineHeight: 1.75 }}>The first conversation is always free. No pitch, no obligation — just a 30-minute call to understand your business and work out whether we're the right fit.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, marginTop: 52 }}>
          <div>
            {[['Email', 'hello@thefifthcourseconsulting.co.uk'], ['Website', 'thefifthcourseconsulting.co.uk'], ['Location', 'West Midlands, UK']].map(([k, v]) => (
              <div key={k} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#A27021', marginBottom: 3, fontWeight: 500 }}>{k}</div>
                <div style={{ fontSize: 14, color: '#1A2744' }}>{v}</div>
              </div>
            ))}
            <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px solid #C4BAB0' }}>
              <div style={{ fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#A27021', marginBottom: 10, fontWeight: 500 }}>Response times</div>
              <div style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.7 }}>
                <div>Monday – Friday: within 4 business hours</div>
                <div>Weekends: next working day</div>
              </div>
            </div>
            <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px solid #C4BAB0' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, fontStyle: 'italic', color: '#1A2744', lineHeight: 1.5 }}>
                "The first conversation is always free. No pitch. No obligation. Just a conversation."
              </div>
              <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6560', marginTop: 10 }}>Kendal Pierce</div>
            </div>
          </div>

          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#F0F4F8', borderRadius: 6, padding: 48 }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 500, color: '#1A2744', marginBottom: 12 }}>Thank you.</div>
              <p style={{ fontSize: 14, color: '#6B6560', lineHeight: 1.75, maxWidth: 320 }}>We'll be in touch within four business hours to arrange your free discovery call.</p>
              <button onClick={() => setSent(false)} style={{ marginTop: 24, background: 'transparent', color: '#1A2744', padding: '10px 24px', borderRadius: 2, border: '1px solid #C4BAB0', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                <div>
                  <label style={{ fontSize: 12, color: '#6B6560', display: 'block', marginBottom: 6 }}>Your name</label>
                  <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Sarah Brennan" style={{ width: '100%', padding: '10px 14px', border: '1px solid #C4BAB0', borderRadius: 2, fontSize: 13, color: '#1A2744', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: '#6B6560', display: 'block', marginBottom: 6 }}>Business name</label>
                  <input value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} placeholder="e.g. The Corner Table" style={{ width: '100%', padding: '10px 14px', border: '1px solid #C4BAB0', borderRadius: 2, fontSize: 13, color: '#1A2744', outline: 'none' }} />
                </div>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 12, color: '#6B6560', display: 'block', marginBottom: 6 }}>Email address</label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="hello@yourbusiness.co.uk" style={{ width: '100%', padding: '10px 14px', border: '1px solid #C4BAB0', borderRadius: 2, fontSize: 13, color: '#1A2744', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 12, color: '#6B6560', display: 'block', marginBottom: 6 }}>Service of interest</label>
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ width: '100%', padding: '10px 14px', border: '1px solid #C4BAB0', borderRadius: 2, fontSize: 13, color: '#1A2744', background: '#fff', appearance: 'none', outline: 'none' }}>
                  <option value="">Please select...</option>
                  <option>Operational Audit</option>
                  <option>Menu Engineering</option>
                  <option>Revenue Strategy</option>
                  <option>Operations Optimisation</option>
                  <option>Technology Consulting</option>
                  <option>Retained Advisory</option>
                  <option>Not sure — happy to discuss</option>
                </select>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, color: '#6B6560', display: 'block', marginBottom: 6 }}>Tell us about your business</label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="A brief description of your venue and the challenge you're facing…" style={{ width: '100%', padding: '10px 14px', border: '1px solid #C4BAB0', borderRadius: 2, fontSize: 13, color: '#1A2744', background: '#fff', height: 96, resize: 'none', outline: 'none' }} />
              </div>
              <button type="submit" className="btn-gold" style={{ background: '#A27021', color: '#fff', padding: '14px 32px', border: 'none', borderRadius: 2, fontSize: 12, letterSpacing: '0.09em', textTransform: 'uppercase', width: '100%' }}>Send Enquiry</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
