import { useState, useRef, useEffect } from 'react';
import logo from '../assets/images/ruchiva-logo.png';

function Header({ currentPage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const [menuPos, setMenuPos] = useState(null);

  const handleNavigate = (item) => {
    // Always land on Home for in-page sections, then set the hash to scroll
    if (item === 'Home') {
      window.location.hash = '#home';
      onNavigate('Home');
    } else if (['About','Products','Recipes','Contact'].includes(item)) {
      window.location.hash = `#${item.toLowerCase()}`;
      onNavigate('Home');
    } else {
      onNavigate(item);
    }
    setMobileOpen(false);
    setMenuPos(null);
  };

  const toggleMenu = () => {
    setMobileOpen((prev) => {
      const next = !prev;
      if (next && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setMenuPos({ top: rect.bottom + window.scrollY + 6, right: (window.innerWidth - rect.right) + 12 });
      } else {
        setMenuPos(null);
      }
      return next;
    });
  };

  useEffect(() => {
    if (!mobileOpen) return;
    function onDocClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
        setMobileOpen(false);
        setMenuPos(null);
      }
    }
    function onResize() {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setMenuPos({ top: rect.bottom + window.scrollY + 6, right: (window.innerWidth - rect.right) + 12 });
      }
    }
    document.addEventListener('click', onDocClick);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize, { passive: true });
    // initial position
    onResize();
    return () => {
      document.removeEventListener('click', onDocClick);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize);
    };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo-wrap" onClick={() => handleNavigate('Home')} style={{ cursor: 'pointer', paddingTop: 6, paddingBottom: 6 }}>
          <img src={logo} alt="Ruchiva Spices Logo" className="site-logo" style={{ height: 72, display: 'block' }} />
        </div>

        <nav className="main-nav">
          {['Home', 'About', 'Products', 'Recipes', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigate(item)}
              className={`nav-link ${currentPage === item ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="call-wrap">
          <button ref={buttonRef} type="button" className="mobile-menu-btn" aria-label="Menu" aria-expanded={mobileOpen} onClick={toggleMenu}>
            <svg className="hamb-svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
              <rect x="3" y="5" width="18" height="2" rx="1" fill="currentColor" />
              <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
              <rect x="3" y="17" width="18" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && menuPos && (
        <nav ref={menuRef} className="mobile-nav" role="menu" aria-hidden={!mobileOpen} style={{ position: 'fixed', top: menuPos.top, right: menuPos.right, left: 'auto' }}>
          <button type="button" className="mobile-nav-close" aria-label="Close menu" onClick={() => { setMobileOpen(false); setMenuPos(null); }}>✕</button>
          {['Home', 'About', 'Products', 'Recipes', 'Contact'].map((item) => (
            <button key={item} onClick={() => handleNavigate(item)} className={`nav-link ${currentPage === item ? 'active' : ''}`}>
              {item}
            </button>
          ))}
        </nav>
      )}

    </header>
  );
}

export default Header;
