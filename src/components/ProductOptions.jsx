import { useState } from 'react';

const ProductOptions = () => {
  const colors = ['#52CA76', '#F6AA1C', '#B5B6F2', '#000000'];
  const sizes = ['38', '39', '40', '41', '42'];

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="flex flex-col gap-3">
      
      <p className="text-[#8F8F8F] text-sm">Cores</p>
      
      <div className="flex gap-3">
        {colors.map((color, index) => {
          const isSelected = selectedColor === color;

          return (
            <div
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`
                w-[31px] h-[31px] rounded-full cursor-pointer transition-shadow
                ${isSelected ? 'ring-2 ring-[#c92071]' : ''}
              `}
              style={{ backgroundColor: color }}
            />
          );
        })}
      </div>

      <p className="text-[#8F8F8F] text-sm">Tamanhos</p>
      
      <div className="flex gap-3 flex-wrap">
        {sizes.map((size, index) => {
          const isSelected = selectedSize === size;

          return (
            <div
              key={index}
              onClick={() => setSelectedSize(size)}
              className={`
                w-[46px] h-[46px] rounded-md border border-[#CCCCCC]
                flex items-center justify-center text-[18px] font-medium
                cursor-pointer transition-all
                ${isSelected ? 'bg-[#c92071] text-white' : 'bg-white text-black'}
              `}
            >
              {size}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductOptions;
