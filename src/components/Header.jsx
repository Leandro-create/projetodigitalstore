import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cart from '/digitalstore/images/mini-cart.svg';
import Logos from "./Logo";
import logoheader from "/digitalstore/images/logo-header.svg";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showSidebar]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/produtos", label: "Produtos" },
    { to: "/categorias", label: "Categorias" },
    { to: "/meuspedidos", label: "Meus Pedidos" },
  ];

  const navClass = ({ isActive }) =>
    isActive ? "text-[#C92071] font-bold" : "hover:text-[#C92071]";

  const handleSidebar = () => setShowSidebar(s => !s);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-4 py-3 bg-white md:hidden shadow fixed top-0 left-0 w-full z-50">
        <button onClick={handleSidebar} className="text-2xl z-50">
          <i className="pi pi-bars"></i>
        </button>

        <div className="flex-1 flex justify-center">
          <Logos logocolorida={logoheader}/>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setShowSearch(s => !s)} className="text-2xl">
            <i className="pi pi-search"></i>
          </button>
          <img src={cart} alt="Carrinho" className="w-5 h-8" />
        </div>

      </div>

      <div className="md:hidden h-[56px]"></div>

      {showSearch && (
        <div className="md:hidden bg-white px-4 py-2 shadow z-40 relative">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="w-full h-12 rounded-lg bg-[#f5f5f5] px-4 text-[#666666] placeholder-[#666666] border-2 border-[#C92071]"
          />
        </div>
      )}

      {showSidebar && (
        <div className="fixed inset-0 z-40 md:hidden">
          <aside className="fixed top-0 left-0 h-full w-[270px] bg-white shadow-lg z-50 pt-[56px]">

            <div className="flex flex-col h-full">
              <div className="flex-1 px-6 py-5">
                <div className="font-semibold text-[#474747] mb-2">Páginas</div>
                <nav className="flex flex-col gap-2">
                  {navLinks.map(link => (
                    <NavLink key={link.to} to={link.to} onClick={handleSidebar} className={navClass}>
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
              </div>

              <div className="mt-auto px-6 pb-6">
                <hr className="mb-5"/>
                <button className="bg-[#C92071] w-full h-10 rounded-lg text-white font-bold mb-2">Entrar</button>
                <div className="text-center underline text-[#666] cursor-pointer">Cadastre-se</div>
              </div>

            </div>
          </aside>

          <div className="fixed top-0 left-[270px] h-full w-[calc(100vw-270px)] bg-gray-300 bg-opacity-30" onClick={handleSidebar}> </div>
        </div>
      )}

      <div className="hidden md:flex flex-col bg-white shadow">
        <div className="flex justify-around items-center py-3">
          <Logos logocolorida={logoheader}/>
          <div className="relative w-[559px] h-[60px]">
            <input type="text" placeholder="Pesquisar produtos..." className="w-full h-full rounded-[8px] bg-[#f5f5f5] px-4 text-[#474747] placeholder-[#666] focus:outline-none border"/>
            <i className="pi pi-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer opacity-25" style={{ fontSize: '1.5rem' }}></i>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-[16px] text-[#474747] underline underline-offset-2 cursor-pointer whitespace-nowrap">Cadastre-se</div>
            <div className="bg-[#C92071] text-white text-[14px] w-[114px] h-[40px] flex items-center justify-center rounded-lg cursor-pointer">Entrar</div>
            <img src={cart} alt="Carrinho" className="w-5 h-8" />
          </div>

        </div>

        <nav className="flex justify-start gap-7 ml-[73px] mt-[10px] text-gray-700">
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive
              ? "text-[#C92071] border-b-2 border-[#C92071] pb-1"
              : "hover:text-[#C92071]"}>{link.label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;