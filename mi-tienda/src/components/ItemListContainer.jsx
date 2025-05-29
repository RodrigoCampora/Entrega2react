const ItemListContainer = ({ mensaje }) => {
  return (
    <div style={{
      padding: '3rem 2rem',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', color: '#555' }}>{mensaje}</h2>
    </div>
  );
};

export default ItemListContainer;
