import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import Layout from "./Layout";
import Section from "../components/Section"
import Ordenar from "../components/Ordenar"

const ProductListingPage = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-4 p-4">

        <aside className="w- md:w-[308px]">
          
          <div className="bg-white p-4 mt-2">
            <label className="text-[#474747] text-[16px] font-semibold">Ordenar por:</label>
            <Ordenar/>
            <h2 className="text-[16px] text-[#474747] font-semibold mb-2">Filtrar por</h2>
            <hr className="border-[#CCCCCC] mb-2" />

            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={[
                { text: "Adidas", value: "adiddas" },
                { text: "Balenciaga", value: "calenciaga" },
                { text: "K-Swiss", value: "K-wiss" },
                { text: "Nike", value: "Nike" },
                { text: "Puma", value: "Puma" },
              ]}
            />

            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[
                { text: "Esportes", value: "Esportes" },
                { text: "Casual", value: "Casual" },
                { text: "Utilitário", value: "Utilitário" },
                { text: "Corrida", value: "Corrida" },
              ]}
            />

            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={[
                { text: "Masculino", value: "Masculino" },
                { text: "Feminino", value: "Feminino" },
                { text: "Unisex", value: "Unisexs" },
              ]}
            />

            <FilterGroup
            title="Estado"
            inputType="radio"
            options={[
              { text: "Novo", value: "New" },
              { text: "Usado", value: "Used" },
            ]}
          />
          </div>
        </aside>

        <main className="flex-1">
          <Section title={`${produtos.length} produtos encontrados`} titleAlign="left">
            <ProductListing products={produtos} />
          </Section>
        </main>
      </div>
    </Layout>
    
  );
};

export default ProductListingPage;

const produtos = [
  {
    id: 1,
    name: "Adidas Tênis Terrex Free Hiker 2 - Feminino",
    image: "../../imagens/adidas-feminino.avif",
    price: 600,
    priceDiscount: 299,
  },
  {
    id: 1,
    name: "Tênis Adidas Ultraboost 5 - Masculino",
    image: "../../imagens/adidas-masculibo.avif",
    price: 930,
    priceDiscount: 510,
  },
  {
    id: 1,
    name: "Tênis Supernova Rise 2 Running - Masculino",
    image: "../../imagens/adidas-masculino2.avif",
    price: 200,
    priceDiscount: 100,
  },
  {
    id: 1,
    name: "Runner Sneakers - Unisex",
    image: "../../imagens/balanciaga-feminino.avif",
    price: 300,
    priceDiscount: 250,
  },
  {
    id: 1,
    name: "Runner Sweaker in White/Yellow/Pink/Blue - Unisex",
    image: "../../imagens/balanciaga-feminino2.avif",
    price: 850,
    priceDiscount: 730,
  },
  {
    id: 1,
    name: "Runner Black/White - Masculino",
    image: "../../imagens/balanciaga-masculino.avif",
    price: 140,
    priceDiscount: 129,
  },
  {
    id: 1,
    name: "BigShot Light 4 - Feminino",
    image: "../../imagens/kswiss-feminino.webp",
    price: 600,
    priceDiscount: 500,
  },
  {
    id: 1,
    name: "HyperCourt Express 2 Clay - Feminino",
    image: "../../imagens/kswiss-feminino2.webp",
    price: 689,
    priceDiscount: 499,
  },
  {
    id: 1,
    name: "Aero-Active II X McLaren F1 Team - Masculino",
    image: "../../imagens/kswiss-masculino.webp",
    price: 940,
    priceDiscount: 900,
  },
  {
    id: 1,
    name: "Tênis Nikecourt Vision Low - Feminino",
    image: "../../imagens/nike-feminino.avif",
    price: 250,
    priceDiscount: 170,
  },
  {
    id: 1,
    name: "Tênis Nike Flex Experience 12 - Feminino",
    image: "../../imagens/nike-feminio2.avif",
    price: 450,
    priceDiscount: 190,
  },
  {
    id: 1,
    name: "Tênis Nike ZoomX Streakfly - Unisex",
    image: "../../imagens/nike-masculino.avif",
    price: 829,
    priceDiscount: 684,
  },
  {
    id: 1,
    name: "Tênis Puma RS-X 3D Cinza",
    image: "../../imagens/puma-feminino.avif",
    price: 300,
    priceDiscount: 249,
  },
  {
    id: 1,
    name: "Tênis CA Pro Lux III Branco - Masculino",
    image: "../../imagens/puma-masculino.avif",
    price: 429,
    priceDiscount: 349,
  },
  {
    id: 1,
    name: "Puma Suede XL Jackhammer Bluemazing - Masculino",
    image: "../../imagens/puma-masculino2.avif",
    price: 910,
    priceDiscount: 720,
  },
]