import { FaUserAlt, FaTags, FaPercentage, FaClipboardList } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { MdCategory, MdDeliveryDining, MdShoppingCart, MdSettings, MdDashboard } from "react-icons/md";

const sidebarConfig = [
  {
    href: "/admin",
    icon: <MdDashboard style={{ fontSize: "18px" }} />,
    title: "Dashboard",
  },
  {
    href: "/admin/user",
    icon: <FaUserAlt style={{ fontSize: "17px" }} />,
    title: "User",
  },
  {
    href: "/admin/product",
    icon: <GiConverseShoe style={{ fontSize: "18px" }} />,
    title: "Product",
  },
  {
    href: "/admin/category",
    icon: <MdCategory style={{ fontSize: "18px" }} />,
    title: "Category",
  },
  {
    href: "/admin/brand",
    icon: <FaTags style={{ fontSize: "18px" }} />,
    title: "Brand",
  },
  {
    href: "/admin/delivery",
    icon: <MdDeliveryDining style={{ fontSize: "18px" }} />,
    title: "Delivery",
  },
  {
    href: "/admin/discount",
    icon: <FaPercentage style={{ fontSize: "18px" }} />,
    title: "Discount",
  },
  {
    href: "/admin/order",
    icon: <MdShoppingCart style={{ fontSize: "18px" }} />,
    title: "Order",
  },
  {
    href: "/admin/orderDetail",
    icon: <FaClipboardList style={{ fontSize: "18px" }} />,
    title: "Order Detail",
  },
  {
    href: "/admin/settings",
    icon: <MdSettings style={{ fontSize: "18px" }} />,
    title: "Settings",
  },
];

export default sidebarConfig;
