import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = ({ products }) => {
  useTitle("Home");

  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
