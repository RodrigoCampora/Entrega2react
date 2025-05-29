import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const fakeFetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', name: 'Remera Roja', category: 'remeras' },
        { id: '2', name: 'Pantalón Azul', category: 'pantalones' },
        { id: '3', name: 'Zapatillas', category: 'calzado' }
      ]);
    }, 500);
  });
};

const ItemListContainer = ({ mensaje }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fakeFetchProducts().then((data) => {
      if (categoryId) {
        setProducts(data.filter(p => p.category === categoryId));
      } else {
        setProducts(data);
      }
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h2>{mensaje}</h2>
      <h3>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h3>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link to={`/product/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
