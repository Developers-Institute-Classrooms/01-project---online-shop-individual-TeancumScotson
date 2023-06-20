const Product = ({ name, description, src, price, onCheckout }) => {
  return (
    <li className="product-grid-item">
      <img className="image"src={src} alt={name}/>
      <p>${price}</p>
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={onCheckout}>Buy now</button>
    </li>
  );
};

export default Product;
