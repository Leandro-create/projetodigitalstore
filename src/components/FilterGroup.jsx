const FilterGroup = ({ title, inputType = "checkbox", options = [] }) => {
  return (
    <div className="w-[308px] bg-white p-4">

      <h3 className="text-[14px] text-[#474747] font-semibold mb-2">{title}</h3>

      <div className="flex flex-col gap-2">
        {options.map((option, index) => {
          const value = option.value || option.text;

          return (
            <label key={index} className="flex items-center gap-2">
              <input
                type={inputType}
                value={value}
                className="w-[22px] h-[22px] accent-[#c92071]"
                name={title}
              />
              <span className="text-[#474747] text-[14px]">{option.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilterGroup;
