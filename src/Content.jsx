import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";
export function Content() {
  // eslint-disable-next-line no-undef
  const [products, setProducts] = useState([]);
  //Products Show
  const [currentProduct, setCurrentProduct] = useState({});
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);

  //funcion below does a get request to get all the posts
  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then(function (response) {
      console.log(response);
      /* This code passes in the get response to the SetProducts function the results are stored in the products array, which is ultimately what is passed to the component where it is iterated and displayed in the format specified in ProductsIndex  */
      setProducts(response.data);
    });
  };

  const handleShowProduct = (product) => {
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };
  const handleClose = () => {
    setIsProductsShowVisible(false);
  };

  /* This code calls the code that triggers the get request to get our products from the DB */
  useEffect(handleIndexProducts, []);
  return (
    <div>
      <h1>Products</h1>
      <Signup />
      <Login />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} />
      </Modal>
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
    </div>
  );
}
