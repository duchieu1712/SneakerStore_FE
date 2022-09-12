import React, { useEffect, useState } from "react";
import Product from "../../Components/Product/Product";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import { useHistory } from "react-router-dom";

export default function FilterProduct({
  brands,
  categories,
  products,
  getOptions
}) {
  const history = useHistory();
  const [selected, setSelected] = useState({});
  useEffect(() => {
    if (selected.brand && selected.category) {
      history.push(`/listProducts/?brand=${selected.brand.id}&category=${selected.category.id}`)
    } else {
      if (selected.brand) {
        history.push(`/listProducts/?brand=${selected.brand.id}`)
      }
      if (selected.category) {
        history.push(`/listProducts/?category=${selected.category.id}`)
      }
    }
    // eslint-disable-next-line
  },[selected]);
  const handleBrand = (brand) => {
    setSelected({...selected, brand});
    getOptions(selected)
  };
  const handleCategory = (category) => {
    setSelected({...selected,category});
    getOptions(selected)
  };
  return (
    <section aria-labelledby="products-heading" className="pt-6 pb-24">
      <h2 id="products-heading" className="sr-only">
        Products
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
        {/* Filters */}
        <form className="hidden lg:block">
          <Disclosure as="div" className="border-b border-gray-200 py-6">
            {({ open }) => (
              <>
                <h3 className="-my-3 flow-root">
                  <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">Brand</span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <FaAngleDown className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <FaAngleRight className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="space-y-4">
                    {brands.map((option, optionIdx) => (
                      <div
                        key={option.id}
                        className="flex items-center"
                        onClick={() => handleBrand(option)}
                      >
                        <label className="ml-3 text-sm text-gray-600 cursor-pointer">
                          {option.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="border-b border-gray-200 py-6">
            {({ open }) => (
              <>
                <h3 className="-my-3 flow-root">
                  <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">Category</span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <FaAngleDown className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <FaAngleRight className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="space-y-4">
                    {categories.map((option, optionIdx) => (
                      <div key={option.name} className="flex items-center" onClick={() => handleCategory(option)}>
                        <label className="ml-3 text-sm text-gray-600 cursor-pointer">
                          {option.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
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
                    <Product product={product} />
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
