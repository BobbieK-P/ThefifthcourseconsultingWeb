const Footer = ({ setPage }) => (
  <footer style={{
    background: '#10192E', padding: '52px 48px 30px',
    display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48,
    borderTop: '1px solid rgba(162,112,33,0.2)'
  }}>
    <div>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 21, fontWeight: 600, color: '#fff', marginBottom: 8 }}>The Fifth Course</div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.11em', textTransform: 'uppercase', marginBottom: 16 }}>Refining the Business of Hospitality</div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 1.8 }}>
        The Fifth Course Consulting Ltd<br />West Midlands, UK<br />hello@thefifthcourseconsulting.co.uk<br />thefifthcourseconsulting.co.uk
      </div>
    </div>
    <div>
      <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A27021', marginBottom: 16, fontWeight: 500 }}>Services</div>
      {['Operational Audit', 'Menu Engineering', 'Revenue Strategy', 'Operations Optimisation', 'Technology Consulting', 'Retained Advisory'].map(s => (
        <div key={s} onClick={() => setPage('Services')} style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)', marginBottom: 9, cursor: 'pointer' }}>{s}</div>
      ))}
    </div>
    <div>
      <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A27021', marginBottom: 16, fontWeight: 500 }}>Company</div>
      {['About', 'Work With Us', 'Insights', 'Contact'].map(p => (
        <div key={p} onClick={() => setPage(p)} style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)', marginBottom: 9, cursor: 'pointer' }}>{p}</div>
      ))}
    </div>
    <div style={{ gridColumn: '1/-1', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 22, marginTop: 8, display: 'flex', justifyContent: 'space-between' }}>
      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)' }}>© 2025 The Fifth Course Consulting Ltd. All rights reserved.</span>
      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)' }}>thefifthcourseconsulting.co.uk</span>
    </div>
  </footer>
);

export default Footer;
