const getProducts = async () => {
  // TODO Fetch products and prices from the Stripe API
  // Use the following URL for your fetch request
  const url = await fetch ("https://react-online-shop-passthorugh.onrender.com/products");

  const products = [];

  return products;
};

export { getProducts };
