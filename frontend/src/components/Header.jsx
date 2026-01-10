import logo from '../assets/images/ruchiva-logo.png';

function Header({ currentPage, onNavigate }) {
  return (
    <header style={{
      backgroundColor: 'var(--primary-red)',
      padding: '12px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'white',
      borderBottom: '3px solid rgba(0,0,0,0.06)'
    }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <img
          src={logo}
          alt="Ruchiva Spices Logo"
          style={{ height: '54px', cursor: 'pointer' }}
          onClick={() => onNavigate('Home')}
        />
      </div>

      <nav style={{ display: 'flex', gap: '22px', alignItems: 'center' }}>
        {['Home', 'Products', 'About', 'Recipes', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item)}
            style={{
              background: 'transparent',
              border: 'none',
              color: currentPage === item ? 'var(--accent-yellow)' : 'rgba(255,255,255,0.95)',
              fontWeight: currentPage === item ? 700 : 600,
              cursor: 'pointer',
              padding: '6px 8px'
            }}
          >
            {item}
          </button>
        ))}
      </nav>

    </header>
  );
}

export default Header;
