import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
// import { addToCart } from "../../utilities/fakedb2";

const Shop = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    // step 1 : get id
    for (const id in storedCart) {
      // step 2 : get the product by using id
      const addedProduct = products.find((product) => product.id === id);
      //step 3: get quantity of the product
      // if (addedProduct) {
        const quantity = storedCart[id];
        console.log("-------", quantity, id);
        addedProduct.quantity = quantity;
        console.log("kkkkk", addedProduct);
      
    }
  }, [products]);

  const handelAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // addToCart(product.id);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
