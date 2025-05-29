import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';

function AppContent() {
  const location = useLocation();

  // Ocultamos NavBar solo en la ruta /404 (página no encontrada)
  const hideNavBar = location.pathname === '/404';

  return (
    <>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a MiTienda, tu tienda favorita!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer mensaje="¡Bienvenido a MiTienda, tu tienda favorita!" />} />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path="/404" element={<NotFound />} />
        {/* Redirigimos cualquier ruta inválida a /404 */}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
