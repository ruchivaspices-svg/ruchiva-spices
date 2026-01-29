import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Recipes from './pages/Recipes.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  const [page, setPage] = useState('Home');

  function renderPage() {
    switch (page) {
      case 'Products':
        return <Products onNavigate={setPage} />;
      case 'About':
        return <About onNavigate={setPage} />;
      case 'Recipes':
        return <Recipes onNavigate={setPage} />;
      case 'Contact':
        return <Contact onNavigate={setPage} />;
      default:
        return <Home onNavigate={setPage} />;
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header currentPage={page} onNavigate={setPage} />
      
      {/* Scrolling Announcement Ticker */}
      <div className="ticker-bar">
        <div className="ticker-track">
          <span className="ticker-item">🌟 Coming Soon to Markets Near You! Our Premium Authentic Products Will Be Available Very Soon - Stay Tuned for Updates!</span>
          <span className="ticker-item">🌟 Coming Soon to Markets Near You! Our Premium Authentic Products Will Be Available Very Soon - Stay Tuned for Updates!</span>
          <span className="ticker-item">🌟 Coming Soon to Markets Near You! Our Premium Authentic Products Will Be Available Very Soon - Stay Tuned for Updates!</span>
          <span className="ticker-item">🌟 Coming Soon to Markets Near You! Our Premium Authentic Products Will Be Available Very Soon - Stay Tuned for Updates!</span>
        </div>
      </div>

      {/* Spacer to offset the fixed ticker height so content doesn't hide underneath */}
      <div className="ticker-spacer" aria-hidden="true" />
      
      <main style={{ flex: 1 }}>{renderPage()}</main>
      <Footer onNavigate={setPage} />
    </div>
  );
}

export default App;
