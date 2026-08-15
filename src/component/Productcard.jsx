import "../index.css";
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {product.title}
        </h2>

        <p className="text-gray-600 mb-4">
          {product.description}
        </p>

        <h3 className="text-lg font-bold text-blue-600">
          ${product.price}
        </h3>
      </div>

    </div>
  );
};

export default ProductCard;