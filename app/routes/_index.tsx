import { Brands } from "~/components/Brands";
import { Hero } from "~/components/Hero";
import { Navbar } from "~/components/Navbar";
import { Products } from "~/components/Products";
import { json } from "@remix-run/router";
import { Product } from "~/types/product";

export async function loader() {
  const res = await fetch("https://dummyjson.com/products");
  const parsed: { products: Product[] } = await res.json();
  return json(parsed.products);
}

export default function Root() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <Products />
    </div>
  );
}
