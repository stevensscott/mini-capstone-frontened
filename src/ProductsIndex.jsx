export function ProductsIndex(props) {
  console.log(props);

  return (
    <div id="products-index">
      <h1>Products Index</h1>
      {props.products.map((product) => (
        <div key={product.id} className="products">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.inventory_count}</p>
          <p>{product.supplier_id}</p>
          <button onClick={() => props.onShowProduct(product)}>More info</button>
          <p>------------------------------------</p>
        </div>
      ))}
    </div>
  );
}
