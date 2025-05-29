import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const fakeFetchProductById = (id) => {
  const products = [
    { id: '1', name: 'Remera Roja', description: 'Remera de algodón color rojo', price: 1500 },
    { id: '2', name: 'Pantalón Azul', description: 'Pantalón de jean azul', price: 3200 },
    { id: '3', name: 'Zapatillas', description: 'Zapatillas deportivas negras', price: 5000 }
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(p => p.id === id));
    }, 500);
  });
};

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fakeFetchProductById(productId).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [productId]);

  const handleAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} unidad(es) al carrito`);
  };

  if (loading) return <p>Cargando detalle del producto...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount stock={5} initial={1} onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetailContainer;
