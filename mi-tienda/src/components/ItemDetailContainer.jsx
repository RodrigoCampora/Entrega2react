import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const fakeFetchProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [
        { id: '1', name: 'Remera Roja', category: 'remeras', description: 'Una remera roja muy cómoda.' },
        { id: '2', name: 'Pantalón Azul', category: 'pantalones', description: 'Un pantalón azul elegante.' },
        { id: '3', name: 'Zapatillas', category: 'calzado', description: 'Zapatillas para correr.' }
      ];
      const product = products.find(p => p.id === id);
      resolve(product);
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

  if (loading) return <p>Cargando detalles del producto...</p>;

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Categoría: {product.category}</p>
      <p>{product.description}</p>
      { }
    </div>
  );
};

export default ItemDetailContainer;
