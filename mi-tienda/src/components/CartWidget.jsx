const CartWidget = () => {
  return (
    <div style={{ fontSize: '1.5rem', position: 'relative' }}>
      🛒
      <span style={{
        position: 'absolute',
        top: '-8px',
        right: '-10px',
        background: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '0.8rem'
      }}>
        3
      </span>
    </div>
  );
};

export default CartWidget;
