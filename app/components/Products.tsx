import { IconStarFilled } from "@tabler/icons-react";
import { useLoaderData } from "@remix-run/react";
import { Product as ProductType } from "~/types/product";

export function Products() {
  const productsData = useLoaderData<ProductType[]>();

  return (
    <div className="max-w-6xl py-5 sm:py-6 md:py-10 lg:py-12 px-8 mx-auto">
      <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-[32px] text-stone-800">
        Products
      </h1>
      <p className="text-center mt-2 text-sm md:text-base lg:text-lg font-medium text-stone-700">
        Choose the products you like from the list below
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-10 gap-y-14 py-12">
        {(productsData ?? []).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function Product({ product }: { product: ProductType }) {
  const mrp = Math.round(
    product.price + (product.price * product.discountPercentage) / 100
  );

  // Using product values to generate random ratings because Math.random() was causing hydration mismatch
  const ratings = Math.floor(
    (product.id * product.price) / (product.rating * product.stock) +
      product.discountPercentage
  );

  return (
    <div className="relative cursor-pointer group">
      <img
        className="w-full h-60 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="absolute text-xs top-4 right-4 bg-theme text-white px-2 py-1 rounded-lg">
        {Math.round(product.discountPercentage)}% off
      </div>
      <div className="pt-4 space-y-2">
        <h1 className="text-xl font-medium text-stone-800">{product.title}</h1>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <IconStarFilled
              size={16}
              stroke={1.5}
              className="text-yellow-400 mb-0.5"
            />
            <span className="text-stone-700">
              <span className="text-sm font-medium text-stone-800">
                {product.rating}
              </span>
              <span className="text-xs text-stone-500 pl-1">({ratings})</span>
            </span>
          </div>
          <div className="text-stone-800 space-x-2">
            <span className="text-sm text-stone-500 line-through italic">
              ${mrp}
            </span>
            <span className="font-semibold text-stone-800">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
