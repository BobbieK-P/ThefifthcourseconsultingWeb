import { useState } from 'react';
import useIsMobile from '../hooks/useIsMobile';

const Nav = ({ currentPage, setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const links = ['Home', 'About', 'Services', 'Work With Us', 'Insights', 'Contact'];

  const navigate = (page) => { setPage(page); setMenuOpen(false); };

  return (
    <>
      <nav style={{
        background: '#fff', borderBottom: '1px solid #C4BAB0',
        padding: isMobile ? '0 24px' : '0 48px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 68,
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div onClick={() => navigate('Home')} style={{ cursor: 'pointer' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontWeight: 600, color: '#1A2744', letterSpacing: '0.02em', lineHeight: 1.2 }}>
            The Fifth Course
          </div>
          <div style={{ fontSize: 10, fontWeight: 300, color: '#6B6560', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Consulting Ltd
          </div>
        </div>

        {isMobile ? (
          <button onClick={() => setMenuOpen(o => !o)} style={{
            background: 'none', border: 'none', padding: '8px', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 5,
          }}>
            <span style={{ display: 'block', width: 22, height: 2, background: menuOpen ? 'transparent' : '#1A2744', transition: 'background 0.15s' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#1A2744', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', transition: 'transform 0.2s' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#1A2744', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', transition: 'transform 0.2s' }} />
          </button>
        ) : (
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {links.map(l => (
              <a key={l} className="nav-link" onClick={() => navigate(l)} style={{
                fontSize: 13, color: currentPage === l ? '#1A2744' : '#6B6560',
                letterSpacing: '0.04em', fontWeight: currentPage === l ? 500 : 400, cursor: 'pointer',
              }}>{l}</a>
            ))}
            <button className="btn-gold" onClick={() => navigate('Contact')} style={{
              background: '#1A2744', color: '#fff', fontSize: 12, padding: '9px 20px',
              borderRadius: 2, letterSpacing: '0.07em', textTransform: 'uppercase', border: 'none',
            }}>Book a Call</button>
          </div>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, bottom: 0,
          background: '#fff', zIndex: 99, borderTop: '1px solid #C4BAB0',
          display: 'flex', flexDirection: 'column', padding: '24px',
          overflowY: 'auto',
        }}>
          {links.map(l => (
            <a key={l} onClick={() => navigate(l)} style={{
              fontSize: 18, fontFamily: "'Cormorant Garamond',serif", fontWeight: currentPage === l ? 600 : 400,
              color: currentPage === l ? '#1A2744' : '#6B6560',
              padding: '16px 0', borderBottom: '1px solid #f0ede9', cursor: 'pointer',
              letterSpacing: '0.02em',
            }}>{l}</a>
          ))}
          <button onClick={() => navigate('Contact')} style={{
            marginTop: 24, background: '#A27021', color: '#fff', padding: '14px',
            borderRadius: 2, border: 'none', fontSize: 13, letterSpacing: '0.07em',
            textTransform: 'uppercase', width: '100%',
          }}>Book a Call</button>
        </div>
      )}
    </>
  );
};

export default Nav;
