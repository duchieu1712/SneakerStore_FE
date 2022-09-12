import React from "react";
import "./Product.css";

export default function Product({ product }) {
  return (
    <div key={product.id} className="item p-2 ">
      <a className="group" href="/#">
        <div className="w-full h-36 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.image?.split(",")[0]}
            alt={product.imageAlt}
            className="w-full h-full object-center object-cover group-hover:opacity-75 img"
          />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="mt-1 text-sm text-gray-700 pl-2">
            {product.name}
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900 pl-2 line-through">
            {product.price} $
          </p>
        </div>
        <p className="mt-1 text-lg font-medium text-gray-900 text-right pl-2">
          {product.price_discounted} $
        </p>
      </a>
    </div>
  );
}
