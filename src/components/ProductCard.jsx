import { Link } from "react-router-dom";

const ProductCard = ({ id, image, name, price, priceDiscount }) => {
  return (
      <div className="w-full max-w-[300px] mx-auto cursor-pointer">
        <Link to={`/produtos/${id}`}>
        <img src={image} alt={name} className="w-full h-[300px] object-cover mb-2"/>
        
        <p className="text-[16px] text-[#474747] mb-1">{name}</p>

        <div className="flex items-center gap-2">
          <span className="text-[24px] text-[#cccccc] line-through"> R${price} </span>
          <span className="text-[24px] text-[#1F1F1F]"> R${priceDiscount} </span>
        </div>
        </Link>
      </div>
  );
};

export default ProductCard;
