import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import WorkWithUsPage from './components/WorkWithUsPage';
import InsightsPage from './components/InsightsPage';
import ContactPage from './components/ContactPage';
import ChristmasChecksPage, { christmasChecksOpen } from './components/ChristmasChecksPage';

// Each page has a short web address, e.g. thefifthcourseconsulting.co.uk/#christmas
const SLUGS = {
  'Home': 'home',
  'About': 'about',
  'Services': 'services',
  'Work With Us': 'work-with-us',
  'Insights': 'insights',
  'Contact': 'contact',
  'Christmas Checks': 'christmas',
};
const pageFromHash = () => {
  const slug = window.location.hash.replace('#', '').toLowerCase();
  return Object.keys(SLUGS).find(p => SLUGS[p] === slug) || null;
};

const App = () => {
  const [page, setPage] = useState(() => pageFromHash() || sessionStorage.getItem('tfc_page') || 'Home');
  const [contactService, setContactService] = useState('');
  // Normal navigation clears any service chosen on the Christmas page
  const goTo = (p) => { setContactService(''); setPage(p); };

  useEffect(() => {
    sessionStorage.setItem('tfc_page', page);
    const slug = SLUGS[page] || 'home';
    if (window.location.hash !== `#${slug}`) window.history.pushState(null, '', `#${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  useEffect(() => {
    const onHash = () => { const p = pageFromHash(); if (p) setPage(p); };
    window.addEventListener('popstate', onHash);
    window.addEventListener('hashchange', onHash);
    return () => { window.removeEventListener('popstate', onHash); window.removeEventListener('hashchange', onHash); };
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'Home':             return <HomePage setPage={goTo} />;
      case 'About':            return <AboutPage setPage={goTo} />;
      case 'Services':         return <ServicesPage setPage={goTo} />;
      case 'Work With Us':     return <WorkWithUsPage setPage={goTo} />;
      case 'Insights':         return <InsightsPage setPage={goTo} />;
      case 'Contact':          return <ContactPage setPage={goTo} initialService={contactService} />;
      case 'Christmas Checks': return <ChristmasChecksPage setPage={setPage} setContactService={setContactService} />;
      default:                 return <HomePage setPage={goTo} />;
    }
  };

  const showBanner = christmasChecksOpen() && page !== 'Christmas Checks';

  return (
    <div style={{ minHeight: '100vh', background: '#d6d3cf' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', background: '#fff', boxShadow: '0 4px 32px rgba(26,39,68,0.12)' }}>
        {showBanner && (
          <div onClick={() => goTo('Christmas Checks')} style={{
            background: '#A27021', color: '#fff', fontSize: 12, letterSpacing: '0.05em',
            textAlign: 'center', padding: '9px 16px', cursor: 'pointer', lineHeight: 1.5,
          }}>
            <strong style={{ fontWeight: 500 }}>Christmas Menu &amp; Bar Checks</strong> · Know your festive margins in 72 hours · <span style={{ textDecoration: 'underline' }}>Find out more</span>
          </div>
        )}
        <Nav currentPage={page} setPage={goTo} />
        <main key={page}>{renderPage()}</main>
        <Footer setPage={goTo} />
      </div>
    </div>
  );
};

export default App;
