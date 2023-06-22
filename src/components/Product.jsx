const Product = ({ name, description, src, price, onCheckout }) => {
  return (
    <li className="product-grid-item">
      <img className="image" src={src} alt={name} />
      <p className="price">${price}.00</p>
      <h3 className="name">{name}</h3>
      <p className="desc">{description}</p>
      <button className="buybutton" onClick={onCheckout}>
        Buy now
      </button>
    </li>
  );
};

export default Product;
