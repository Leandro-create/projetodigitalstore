const Logos = ({ logocolorida, logobranca }) => {
  const logoAssets = logocolorida || logobranca;

  return (
    <img src={logoAssets} alt="Logo da loja" className="w-[253px] h-[44px]"/>
  );
};

export default Logos;
