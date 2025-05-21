import React from "react";

type Props = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, name, description, price, image }: Props) => {
  return (
    <div className="bg-gray-900 p-4 rounded-md h-400 ">
      <div className="relative">
        <img src={image} alt={name} className="rounded" />
        {id === 1 && (
          <span className="absolute top-2 left-2 bg-rose-400 text-white px-2 py-1 text-xs font-bold rounded">
            HOT
          </span>
        )}
        <div className="absolute top-2 right-2 bg-gray-700 rounded-full p-2">
          ❤️
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-400">{description}</p>
        <p className="text-rose-400 text-xl font-bold mt-2">${price.toFixed(2)}</p>
      </div>
      <button className="mt-4 w-full bg-rose-900 hover:bg-rose-700 transition py-2 rounded flex items-center justify-center gap-2">
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
