import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import WorkWithUsPage from './components/WorkWithUsPage';
import InsightsPage from './components/InsightsPage';
import ContactPage from './components/ContactPage';

const App = () => {
  const [page, setPage] = useState(() => sessionStorage.getItem('tfc_page') || 'Home');

  useEffect(() => {
    sessionStorage.setItem('tfc_page', page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'Home':         return <HomePage setPage={setPage} />;
      case 'About':        return <AboutPage setPage={setPage} />;
      case 'Services':     return <ServicesPage setPage={setPage} />;
      case 'Work With Us': return <WorkWithUsPage setPage={setPage} />;
      case 'Insights':     return <InsightsPage setPage={setPage} />;
      case 'Contact':      return <ContactPage setPage={setPage} />;
      default:             return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#d6d3cf' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', background: '#fff', boxShadow: '0 4px 32px rgba(26,39,68,0.12)' }}>
        <Nav currentPage={page} setPage={setPage} />
        <main>{renderPage()}</main>
        <Footer setPage={setPage} />
      </div>
    </div>
  );
};

export default App;
