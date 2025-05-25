import Gallery from "../components/Gallery";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import Layout from "./Layout";

const HomePage = () => {
  
  return (
    <Layout>

      <Gallery/>

      <Section title="Coleções em destaque" titleAlign="left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="/projetodigitalstore/images/collection-1.png" alt="camisa" className="rounded-[4px] w-full max-w-[420px] md:w-[420px] h-auto" />
          <img src="/projetodigitalstore/images/collection-2.png" alt="tenis" className="rounded-[4px] w-full max-w-[420px] md:w-[420px] h-auto ml-[0px]"/>
          <img src="/projetodigitalstore/images/collection-3.png" alt="headphones" className="rounded-[4px] w-full max-w-[420px] md:w-[420px] h-auto ml-[0px]"/>
        </div>
      </Section>

      <Section title="Produtos em alta" titleAlign="left" link={{ text: "Ver todos", href:"/produtos"}}>
      <ProductListing products={produtos}/>
      </Section>

    </Layout>
  );
}
 
export default HomePage;

const produtos = [
  {
    id: 1,
    name: "Air Jordan 1 Mid Nike - Masculino",
    image: "/projetodigitalstore/images/product-thumb-1.jpeg",
    price: 299,
    priceDiscount: 199,
  },
  {
    id: 1,
    name: "Air Jordan 1 Retro OG High Chicago - Masculino",
    image: "/projetodigitalstore/images/product-thumb-2.jpeg",
    price: 699,
    priceDiscount: 499,
  },
  {
    id: 1,
    name: "Tênis Levi's Marrom - Masculino",
    image: "/projetodigitalstore/images/product-thumb-3.jpeg",
    price: 999,
    priceDiscount: 599,
  },
  {
    id: 1,
    name: "Karhu Men's Synchron Classic Trainers - Blue Coral",
    image: "/projetodigitalstore/images/product-thumb-4.jpeg",
    price: 170,
    priceDiscount: 100,
  },
  {
    id: 1,
    name: "Tênis Nike SuperRep Go - Feminino",
    image: "/projetodigitalstore/images/product-thumb-5.jpeg",
    price: 899,
    priceDiscount: 649,
  },
  {
    id: 1,
    name: "Aero-Active II X McLaren F1 Team - Masculino",
    image: "/projetodigitalstore/images/kswiss-masculino.webp",
    price: 940,
    priceDiscount: 900,
  },
  {
    id: 1,
    name: "Tênis Nike ZoomX Streakfly - Unisex",
    image: "/projetodigitalstore/images/nike-masculino.avif",
    price: 829,
    priceDiscount: 684,
  },
  {
    id: 1,
    name: "BigShot Light 4 - Feminino",
    image: "/projetodigitalstore/images/kswiss-feminino.webp",
    price: 600,
    priceDiscount: 500,
  },
];