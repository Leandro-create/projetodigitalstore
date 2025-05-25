import logofooter from "../../public/images/logo-footer.svg"
import facebook from "../../public/images/facebook.svg"
import instagram from "../../public/images/instagram.svg"
import x from "../../public/images/twitter.svg"
import Logos from "./Logo"


const Footer = () => {
    const informacoes = [
        { text: "Sobre Drip Store", link: "/" },
        { text: "Segurança", link: "/" },
        { text: "Wishlist", link: "/" },
        { text: "Blog", link: "/" },
        { text: "Trabalhe conosco", link: "/" },
        { text: "Meus pedidos", link: "/meuspedidos" },
    ];

    const categorias = [
        { text: "Camisetas", link: "/produtos" },
        { text: "Calças", link: "/produtos" },
        { text: "Bonés", link: "/produtos" },
        { text: "Headphones", link: "/produtos" },
        { text: "Tênis", link: "/produtos" },
    ];
    
    return (
    <footer className="w-full bg-[#1f1f1f] flex flex-col items-start">
      <div className="flex flex-col md:flex-row w-full justify-between px-6 md:px-[104px] pt-[48px] gap-12 md:gap-0">
        <div className="flex flex-col max-w-[320px]">
          <Logos logobranca={logofooter} />

          <p className="mt-6 md:mt-[70px] text-white text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga vel, cumque, ex dolor, quas incidunt doloribus tenetur in quo cum nemo.</p>

          <div className="flex h-[30px] gap-5 mt-6 md:mt-[80px]">
            <a href="https://facebook.com" target="_blank"><img src={facebook} alt="logo do facebook" /></a>
            <a href="https://instagram.com" target="_blank"><img src={instagram} alt="logo do instagram" /></a>
            <a href="https://x.com" target="_blank"><img src={x} alt="logo do X" /></a>
          </div>
        </div>
        
        <div>
          <p className="mb-5 font-bold text-white">Informações</p>
          <ul>{informacoes.map((info, index) => (
            <li key={index} className="mb-[10px] text-white text-sm">
              <a href={info.link}>{info.text}</a>
            </li>
          ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 font-bold text-white">Categorias</p>
          <ul>{categorias.map((cat, index) => (
            <li key={index} className="mb-[10px] text-white text-sm">
              <a href={cat.link}>{cat.text}</a>
            </li>
          ))}
          </ul>
        </div>
        
        <div className="text-white text-sm">
          <p className="mb-5 font-bold">Contato</p>
          <p className="mb-3">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 3051-3411</p>
        </div>
      </div>

     <hr className="bg-white h-[1px] w-[90%] md:w-[calc(100%-208px)] mt-[48px] mx-auto opacity-25" />
     <p className="text-white text-xs mt-4 text-center w-full mb-[40px]">© 2025 Digital Store</p>
    </footer>
  );
}
 
export default Footer;