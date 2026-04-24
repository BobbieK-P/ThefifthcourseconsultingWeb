import { useState } from 'react';
import emailjs from '@emailjs/browser';
import useIsMobile from '../hooks/useIsMobile';

const SERVICE_ID  = 'service_ua48i07';
const TEMPLATE_ID = 'template_002yzsz';
const PUBLIC_KEY  = 'bTsAWV7L3JdMV1uev';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('idle');
  const isMobile = useIsMobile();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name:        form.name,
        from_email:       form.email,
        business_name:    form.business,
        phone:            form.phone,
        service_interest: form.service,
        message:          form.message,
      }, PUBLIC_KEY);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = { width: '100%', padding: '10px 14px', border: '1px solid #C4BAB0', borderRadius: 2, fontSize: 13, color: '#1A2744', outline: 'none' };

  return (
    <div style={{ background: '#fff' }}>
      <div style={{ background: '#1A2744', padding: isMobile ? '48px 24px' : '72px 48px' }}>
        <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#A27021', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ display: 'block', width: 32, height: 1, background: '#A27021' }} />Contact
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isMobile ? 32 : 44, fontWeight: 500, color: '#fff', maxWidth: 600, lineHeight: 1.13, margin: 0 }}>
          Let's talk about<br /><em style={{ fontStyle: 'italic', color: '#A27021' }}>your business.</em>
        </h1>
      </div>

      <section style={{ padding: isMobile ? '48px 24px' : '72px 48px' }}>
        <p style={{ fontSize: 15, color: '#6B6560', maxWidth: 540, lineHeight: 1.75 }}>The first conversation is always free. No pitch, no obligation — just a 30-minute call to understand your business and work out whether we're the right fit.</p>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 52, marginTop: 52 }}>
          {/* Contact details */}
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

          {/* Form */}
          {status === 'success' ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#F0F4F8', borderRadius: 6, padding: 48 }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 500, color: '#1A2744', marginBottom: 12 }}>Thank you.</div>
              <p style={{ fontSize: 14, color: '#6B6560', lineHeight: 1.75, maxWidth: 320 }}>We'll be in touch within four business hours to arrange your free discovery call.</p>
              <button onClick={() => { setStatus('idle'); setForm({ name: '', business: '', email: '', phone: '', service: '', message: '' }); }} style={{ marginTop: 24, background: 'transparent', color: '#1A2744', padding: '10px 24px', borderRadius: 2, border: '1px solid #C4BAB0', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14, marginBottom: 14 }}>
                <div>
                  <label style={{ fontSize: 12, color: '#6B6560', display: 'block', marginBottom: 6 }}>Your name *</label>
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Sarah Brennan" style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: '#6B6560', display: 'block', marginBottom: 6 }}>Business name</label>
                  <input value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} placeholder="e.g. The Corner Table" style={inputStyle} />
                </div>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 12, color: '#6B6560', display: 'block', marginBottom: 6 }}>Email address *</label>
                <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="hello@yourbusiness.co.uk" style={inputStyle} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 12, color: '#6B6560', display: 'block', marginBottom: 6 }}>Phone number</label>
                <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="e.g. 07700 900000" style={inputStyle} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 12, color: '#6B6560', display: 'block', marginBottom: 6 }}>Service of interest</label>
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ ...inputStyle, background: '#fff', appearance: 'none' }}>
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
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="A brief description of your venue and the challenge you're facing…" style={{ ...inputStyle, height: 96, resize: 'none' }} />
              </div>
              {status === 'error' && (
                <div style={{ marginBottom: 14, padding: '10px 14px', background: '#fff0f0', border: '1px solid #e0a0a0', borderRadius: 2, fontSize: 12, color: '#9b2020' }}>
                  Something went wrong. Please try again or email us directly at hello@thefifthcourseconsulting.co.uk
                </div>
              )}
              <button type="submit" disabled={status === 'sending'} className="btn-gold" style={{ background: status === 'sending' ? '#b8882e' : '#A27021', color: '#fff', padding: '14px 32px', border: 'none', borderRadius: 2, fontSize: 12, letterSpacing: '0.09em', textTransform: 'uppercase', width: '100%', opacity: status === 'sending' ? 0.8 : 1 }}>
                {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
