const Nav = ({ currentPage, setPage }) => {
  const links = ['Home', 'About', 'Services', 'Work With Us', 'Insights', 'Contact'];
  return (
    <nav style={{
      background: '#fff', borderBottom: '1px solid #C4BAB0',
      padding: '0 48px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', height: 68, position: 'sticky', top: 0, zIndex: 100
    }}>
      <div onClick={() => setPage('Home')} style={{ cursor: 'pointer' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontWeight: 600, color: '#1A2744', letterSpacing: '0.02em', lineHeight: 1.2 }}>
          The Fifth Course
        </div>
        <div style={{ fontSize: 10, fontWeight: 300, color: '#6B6560', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          Consulting Ltd
        </div>
      </div>
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {links.map(l => (
          <a key={l} className="nav-link" onClick={() => setPage(l)} style={{
            fontSize: 13,
            color: currentPage === l ? '#1A2744' : '#6B6560',
            letterSpacing: '0.04em',
            fontWeight: currentPage === l ? 500 : 400,
            cursor: 'pointer',
          }}>{l}</a>
        ))}
        <button className="btn-gold" onClick={() => setPage('Contact')} style={{
          background: '#1A2744', color: '#fff', fontSize: 12, padding: '9px 20px',
          borderRadius: 2, letterSpacing: '0.07em', textTransform: 'uppercase', border: 'none'
        }}>Book a Call</button>
      </div>
    </nav>
  );
};

export default Nav;
