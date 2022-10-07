import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDeliveries } from "../../Redux/Actions/delivery";
import { getUserById } from "../../Redux/Actions/user";
import ModalForm from "../../Components/ModalForm/ModalForm";
import { addOrder } from "../../Redux/Actions/order";
// import { resetCart } from "../../Redux/Actions/cart";
// import StatusAlert from "../../Components/StatusAlert/StatusAlert";

export default function Checkout() {
  const [deliverySelected, setDeliverySelected] = useState();
  const [order, setOrder] = useState({});
  const [open, setOpen] = useState(false);
  // const [openAlert, setOpenAlert] = useState(false);
  // const [checkDeli, setCheckDeli] = useState();
  // const [failure, setFailure] = useState();
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cartReducer);
  const { deliveries } = useSelector((state) => state.deliveryReducer);
  const { user, currentUser } = useSelector(
    (state) => state.userReducer
  );
  const VAT = 10;
  useEffect(() => {
    dispatch(getDeliveries());
    dispatch(getUserById(currentUser.id));
    // eslint-disable-next-line
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeli = (deli) => {
    setDeliverySelected(deli);
  };
  // const handleOpenAlert = () => {
  //   setOpenAlert(true);
  // };
  // const handleCloseAlert = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpenAlert(false);
  // };
  const handleOrder = () => {
    if (deliverySelected) {
      const order_detail = [];
      // eslint-disable-next-line
      cart.map((item) => {
        const detailItem = {
          amount: item.amount,
          product_id: item.product.id,
          size_id: item.size.id,
        };
        order_detail.push(detailItem);
      });
      setOrder({
        ...order,
        total_price: total + (total * VAT) / 100 + deliverySelected?.price,
        user_id: currentUser.id,
        delivery_id: deliverySelected.id,
        order_detail,
      });
      setOpen(true);
    } else {
      // setFailure("Please check delivery method !!!");
      // setTimeout(handleOpenAlert, 2000);
      alert("Please check delivery method !!!");
    }
  };
  const handleDispatch = () => {
    // dispatch(addOrder(order))
    console.log(order);
    handleClose();    
    // setCheckDeli("Thanks for your order !!!");
    // setTimeout(handleOpenAlert, 2000);
    alert("Thanks for your order !!!")
    // dispatch(resetCart())
  };
  const content = <Box>Are you sure want to order these product ?</Box>;

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
                  <Grid item xs={12}>
                    <TextField
                      label="User name"
                      id="outlined-size-small"
                      size="small"
                      value={user.username || ""}
                      fullWidth
                      focused
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email address"
                      id="outlined-size-small"
                      size="small"
                      value={user.email || ""}
                      fullWidth
                      focused
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Address"
                      id="outlined-size-small"
                      size="small"
                      value={user.address || ""}
                      fullWidth
                      focused
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone number"
                      id="outlined-size-small"
                      size="small"
                      value={user.phone || ""}
                      fullWidth
                      focused
                    />
                  </Grid>
                </Grid>
              </Box>
            </div>
            <div>
              <h2 className="py-5 text-xl font-medium mt-5">Delivery method</h2>
              <div className="flex w-full justify-between">
                {deliveries.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleDeli(item)}
                    className="w-64 rounded-md border border-gray-200 p-5 text-left focus:border-blue-700 focus:border-2"
                  >
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-xs mb-5">{item.estimate}</p>
                    <h4 className="text-base font-medium text-gray-900">
                      {item.price}$
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
                {cart.map((item, index) => (
                  <li className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.image}
                        alt="product"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.product.name}</h3>
                          <p className="ml-4">
                            ${item.product.price_discounted}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Size {item.size.name}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Amount {item.amount}</p>

                        <div className="flex items-center">
                          <FaTrashAlt />
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
                  <p className="text-base font-medium text-gray-900">
                    ${total}
                  </p>
                </div>
                <div className="flex justify-between my-3">
                  <h4>Shipping</h4>
                  <p className="text-base font-medium text-gray-900">
                    {deliverySelected
                      ? `$${deliverySelected.price}`
                      : "Select delivery method !"}
                  </p>
                </div>
                <div className="flex justify-between my-3">
                  <h4>Taxes</h4>
                  <p className="text-base font-medium text-gray-900">
                    ${(total * VAT) / 100}
                  </p>
                </div>
                <div className="flex justify-between my-3">
                  <h3 className="text-lg font-bold">Total</h3>
                  <p className="text-lg font-bold text-gray-900">
                    {deliverySelected
                      ? `$${
                          total + (total * VAT) / 100 + deliverySelected?.price
                        }`
                      : "Calculating..."}
                  </p>
                </div>
              </div>
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={handleOrder}
              >
                Confirm order
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ModalForm
        title={"Confirm order"}
        open={open}
        handleClose={() => handleClose()}
        formInput={content}
        handleDispatch={handleDispatch}
      />
      {/* <StatusAlert
        message={checkDeli}
        error={failure}
        openAlert={openAlert}
        onCloseAlert={handleCloseAlert}
      /> */}
    </main>
  );
}
