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
      boxSizing: 'border-box' // evita que padding colapse con el ancho
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        MiTienda
      </div>
      <ul style={{
        display: 'flex',
        gap: '1.5rem',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Inicio</a></li>
        <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Ropa</a></li>
        <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Calzado</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
