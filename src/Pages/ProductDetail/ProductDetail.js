import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RadioGroup } from "@headlessui/react";
import ProductList from "../../Components/ProductList/ProductList";
import { getProductById } from "../../Redux/Actions/product";
import { addCart } from "../../Redux/Actions/cart";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail(props) {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [size, setSize] = useState();
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(getProductById(props.match.params.id));
    // eslint-disable-next-line
  }, [props.match.params.id]);

  const addtoCart = () => {
    dispatch(addCart({ product, amount, size }));
  };
  const handleDecre = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    } else {
      setAmount(1);
    }
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
          Product Infomation
        </h1>
        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 h-[530px]">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block h-2/3">
            <img
              alt="img"
              src={product.image?.split(",")[1]}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8 h-2/3">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                alt="img"
                src={product.image?.split(",")[0]}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                alt="img"
                src={product.image?.split(",")[0]}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 h-2/3">
            <img
              alt="img"
              src={product.image?.split(",")[1]}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-8 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-16 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-600 line-through">
              ${product.price}
            </p>
            <p className="text-3xl">${product.price_discounted}</p>
            <form className="mt-10">
              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                  <a
                    href="/#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </a>
                </div>

                <RadioGroup value={size} onChange={setSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.size_id_sizes?.map((option) => (
                      <RadioGroup.Option
                        key={option.name}
                        value={option}
                        // disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            option.product_size?.amount !== 0
                              ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                              : "bg-gray-50 text-gray-200 cursor-not-allowed",
                            active ? "ring-2 ring-indigo-500" : "",
                            "group relative border rounded-md py-2 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-3"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {option.name}
                            </RadioGroup.Label>
                            {option.product_size?.amount !== 0 ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "absolute -inset-px rounded-md pointer-events-none"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <div className="mt-5">
                <h3 className="text-sm text-gray-900 font-medium mb-5">
                  Amount
                </h3>
                <ButtonGroup>
                  <Button onClick={handleDecre}>-</Button>
                  <Button>{amount}</Button>
                  <Button onClick={() => setAmount(amount + 1)}>+</Button>
                </ButtonGroup>
              </div>
            </form>
            <button
              onClick={addtoCart}
              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to bag
            </button>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.descrip}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              {/* <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
          Suggest for you
        </h3>
        <ProductList />
      </div>
    </div>
  );
}
