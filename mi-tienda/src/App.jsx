import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a MiTienda, tu tienda favorita!" />
    </div>
  );
}

export default App;
