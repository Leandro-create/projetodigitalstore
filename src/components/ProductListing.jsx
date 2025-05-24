import ProductCard from './ProductCard';

const ProductListing = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};

export default ProductListing;
