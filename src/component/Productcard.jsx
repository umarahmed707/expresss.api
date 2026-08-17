import "../index.css";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image Section */}
      <div className="relative h-64 overflow-hidden bg-gray-100">

        <img
          src={product?.image}
          alt={product?.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Sale Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          New
        </span>

        {/* Wishlist */}
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md backdrop-blur transition hover:bg-black hover:text-white">
          ♡
        </button>

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Rating */}
        <div className="mb-2 flex items-center gap-1 text-sm">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-gray-400">(4.8)</span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {product?.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 min-h-[48px] text-sm leading-6 text-gray-500">
          {product?.description}
        </p>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">

          {/* Price */}
          <div>
            <p className="text-xs font-medium text-gray-400">
              Price
            </p>

            <h3 className="text-2xl font-extrabold text-gray-900">
              ${product?.price}
            </h3>
          </div>
<br />
          {/* Add Button */}
          <button className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;