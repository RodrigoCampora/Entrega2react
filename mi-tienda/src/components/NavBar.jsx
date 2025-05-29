import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{
      width: "100%",
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #ddd',
      boxSizing: 'border-box'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>MiTienda</Link>
      </div>
      <ul style={{
        display: 'flex',
        gap: '1.5rem',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li><Link to="/category/remeras" style={{ textDecoration: 'none', color: '#333' }}>Remeras</Link></li>
        <li><Link to="/category/pantalones" style={{ textDecoration: 'none', color: '#333' }}>Pantalones</Link></li>
        <li><Link to="/category/calzado" style={{ textDecoration: 'none', color: '#333' }}>Calzado</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
