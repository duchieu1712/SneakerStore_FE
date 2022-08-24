import React from "react";
import Products from "../../Components/Product/Product";
import { FaAngleDown } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
const filters = [
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "nike", label: "Nike", checked: false },
      { value: "adidas", label: "Adidas", checked: false },
      { value: "puma", label: "Puma", checked: false },
      { value: "converse", label: "Converse", checked: false },
      { value: "reebok", label: "Reebok", checked: false },
      { value: "mlb", label: "MLB", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "running", label: "Running", checked: false },
      { value: "fashion", label: "Fashion", checked: false },
      { value: "slippers", label: "Slippers", checked: false },
      { value: "docter", label: "Docter", checked: false },
      { value: "boots", label: "Boots", checked: false },
      { value: "accessory", label: "Accessory", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "35", label: "35", checked: false },
      { value: "36", label: "36", checked: false },
      { value: "37", label: "37", checked: false },
      { value: "38", label: "38", checked: false },
      { value: "39", label: "39", checked: false },
      { value: "40", label: "40", checked: false },
      { value: "41", label: "41", checked: false },
      { value: "42", label: "42", checked: false },
    ],
  },
];

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function FilterProduct() {

  const handleClick =(e) => {
    console.log(e.target.value);

  }
  return (
    <section aria-labelledby="products-heading" className="pt-6 pb-24">
      <h2 id="products-heading" className="sr-only">
        Products
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
        {/* Filters */}
        <form className="hidden lg:block">
          {filters.map((section) => (
            <Disclosure
              as="div"
              key={section.id}
              className="border-b border-gray-200 py-6"
            >
              {({ open }) => (
                <>
                  <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        {open ? (
                          <FaAngleDown className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <FaAngleDown className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel className="pt-6">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            defaultChecked={option.checked}
                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            onClick={handleClick}
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </form>

        {/* Product grid */}
        <div className="lg:col-span-3">
          {/* Replace with your content */}

          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full">
            <div className="bg-white">
              <div className="max-w-2xl mx-auto sm:py-8 sm:px-6 lg:max-w-7xl lg:px-6">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
                  {products.map((product) => (
                    <Products product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </div>
    </section>
  );
}
