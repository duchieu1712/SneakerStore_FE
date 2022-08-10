import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {FaTrashAlt} from "react-icons/fa"

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 3,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];
const delivery = [
  {
    id: 1,
    name: "Standard",
    price: "2$",
    estimate: "5-7 days",
  },
  {
    id: 2,
    name: "Express",
    price: "5$",
    estimate: "2-4 days",
  },
];
export default function Checkout() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative z-10  items-baseline justify-between pt-10 pb-6 border-b border-gray-200">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Check out
        </h1>
        <div className="d-block md:flex">
          <div className="w-full md:w-1/2 px-6">
            <div>
              <h2 className="py-5 text-xl font-medium">Contact Information</h2>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={4}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="First name"
                      id="outlined-size-small"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Last name"
                      id="outlined-size-small"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email address"
                      id="outlined-size-small"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Address"
                      id="outlined-size-small"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone number"
                      id="outlined-size-small"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Box>
            </div>
            <div>
              <h2 className="py-5 text-xl font-medium">Delivery method</h2>
              <div className="flex w-full justify-between">
                {delivery.map((item) => (
                  <button className="w-64 rounded-md border border-gray-200 p-5 text-left focus:border-blue-700 focus:border-2">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-xs mb-5">{item.estimate}</p>
                    <h4 className="text-base font-medium text-gray-900">
                      {item.price}
                    </h4>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-6">
            <h2 className="py-5 text-xl font-medium">Order sumary</h2>
            <div className="rounded-md border border-gray-200 p-5 divide-y divide-gray-200">
              {/* // eslint-disable-next-line */}
              <ul className="-my-6 divide-y divide-gray-200 mb-2">
                {products.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}> {product.name} </a>
                          </h3>
                          <p className="ml-4">{product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">
                          Amount {product.quantity}
                        </p>

                        <div className="flex items-center">
                          <FaTrashAlt/>
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mb-5">
                <div className="flex justify-between my-3">
                  <h4>Subtotal</h4>
                  <p className="text-base font-medium text-gray-900">$100</p>
                </div>
                <div className="flex justify-between my-3">
                  <h4>Shipping</h4>
                  <p className="text-base font-medium text-gray-900">$5</p>
                </div>
                <div className="flex justify-between my-3">
                  <h4>Taxes</h4>
                  <p className="text-base font-medium text-gray-900">$10</p>
                </div>
                <div className="flex justify-between my-3">
                  <h3 className="text-lg font-bold">Total</h3>
                  <p className="text-lg font-bold text-gray-900">$115</p>
                </div>
              </div>
              <Button variant="contained" size="large" fullWidth>
                Confirm order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
