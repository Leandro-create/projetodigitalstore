import { Rating } from 'primereact/rating';
import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.min.css';

const BuyBox = ({name, reference, stars, rating, price, priceDiscount, description, children}) => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      <h1 className="text-[32px] text-[#1f1f1f]">{name}</h1>
      <p className="text-[12px] text-[#666666]">Ref: {reference}</p>

      <div className="flex items-center gap-2">
        <Rating value={stars} readOnly stars={5} cancel={false} />
        <div className="flex items-center gap-1 bg-[#f6aa1c] text-white text-[14px] rounded-[4px] px-2 py-1">
          {stars}
          <img src="/projetodigitalstore/images/star-icon.svg" alt="estrela" className="w-4 h-4" />
        </div>
        <p className="text-[14px] text-[#8f8f8f]">{rating} avaliações</p>
      </div>

      <div className="flex items-center gap-2">
        {priceDiscount ? (
          <>
            <p className="text-[32px] text-[#474747]">
              R$ {priceDiscount.toFixed(2)}
            </p>
            <p className="text-[16px] text-[#cccccc] line-through">
              R$ {price.toFixed(2)}
            </p>
          </>
        ) : (
          <p className="text-[32px] text-[#474747]">R$ {price.toFixed(2)}</p>
        )}
      </div>

      <p className="text-[14px] text-[#474747]"> {description} </p>
      <div className="flex flex-col gap-4"> {children} </div>
      <button className="bg-[#f6aa1c] text-white text-[16px] py-2 px-4 rounded cursor-pointer"> COMPRAR </button>
    </div>
  );
};

export default BuyBox;
