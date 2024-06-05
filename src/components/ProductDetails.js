import { Link, useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product; 

  if (!product) {
    return <div>No product details available</div>;
  }

  return (
    <div className="bg-blue-100">
      <div className="m-8"><Link to='/'>⬅ Back</Link> </div>
      <div className="p-4 bg-gray-200 w-3/6 ml-36 mt-4">
        <img src={product.image} alt={product.title} className="w-40" />
        <b>{product.title}</b>
        <br />
        <i>{product.description}</i>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
