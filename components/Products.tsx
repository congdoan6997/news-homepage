import Image from "next/image";
import React from "react";
const products = [
  {
    id: "01",
    name: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    image: "/assets/images/image-retro-pcs.jpg",
  },
  {
    id: "02",
    name: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    image: "/assets/images/image-top-laptops.jpg",
  },
  {
    id: "03",
    name: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    image: "/assets/images/image-gaming-growth.jpg",
  },
];
function Products() {
  return (
    <section className="grid grid-cols-3 max-md:grid-cols-1 gap-10 pt-6">
      {products.map((product) => (
        <div className="grid grid-cols-3 gap-4">
          <div className="relative h-40">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-2 flex flex-col justify-between">
            <p className="font-bold text-3xl text-neutral-400">{product.id}</p>
            <h1 className="font-bold text-xl hover:text-primary-red cursor-pointer">
              {product.name}
            </h1>
            <p className="text-neutral-600">{product.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Products;
