import Layout from "./Layout";
import SlideProduct from "../components/SlideProduct";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import BuyBox from "../components/BuyBox";
import ProductOptions from "../components/ProductOptions";

const ProductViewPage = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-6 px-4 py-8 max-w-[1440px] mx-auto">
        <div className="w-full lg:w-1/2">
        <SlideProduct images={product.images} radius="4px"/>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <BuyBox
          name={product.name}
          reference={product.reference}
          stars={product.stars}
          rating={product.rating}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description}>
        <ProductOptions/>
        </BuyBox>
        </div>
        
      </div>

      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{ text: "Ver todos", href: "/produtos" }}
      >
        <ProductListing products={produtosRecomendados} />
      </Section>
    </Layout>
  );
}
 
export default ProductViewPage;

const product = {
    name: "Puma Suede XL Jackhammer Bluemazing - Masculino",
    reference: "1234567 | Puma | Casual",
    stars: 4.7,
    rating: 132,
    price: 910.99,
    priceDiscount: 720.99,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ut reprehenderit dolor nisi tempore consequatur in distinctio aperiam illum voluptas. Nemo alias, error ratione reiciendis repellat aliquam doloremque maxime provident!",
    images: [
      { src: "/projetodigitalstore/images/slide1.avif" },
      { src: "/projetodigitalstore/images/slide2.avif" },
      { src: "/projetodigitalstore/images/slide3.avif" },
      { src: "/projetodigitalstore/images/slide4.avif" }
    ]
  };

  const produtosRecomendados = [
    {
      id: 1,
      name: "Tênis Nike Flex Experience 12 - Feminino",
      image: "/projetodigitalstore/images/nike-feminio2.avif",
      price: 450,
      priceDiscount: 190,
    },
    {
      id: 1,
      name: "BigShot Light 4 - Feminino",
      image: "/projetodigitalstore/images/kswiss-feminino.webp",
      price: 600,
      priceDiscount: 500,
    },
    {
      id: 1,
      name: "Runner Sneakers - Unisex",
      image: "/projetodigitalstore/images/balanciaga-feminino.avif",
      price: 300,
      priceDiscount: 250,
    },
    {
      id: 1,
      name: "Tênis Puma RS-X 3D Cinza",
      image: "/projetodigitalstore/images/puma-feminino.avif",
      price: 300,
      priceDiscount: 249,
    }
  ];