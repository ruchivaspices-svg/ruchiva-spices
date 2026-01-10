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
      <main style={{ flex: 1 }}>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
