export function ProductsShow(props) {
  const handleSubmit = (event) => {
    console.log("I am here");
    event.preventDefault();
  };

  return (
    <div>
      <div>
        <h2>Product Name: {props.product.name}</h2>
        <p>Test to make sure this is working</p>
        <p>Price:{props.product.price}</p>
        <p>Description: {props.product.description}</p>
      </div>
    </div>
  );
}
