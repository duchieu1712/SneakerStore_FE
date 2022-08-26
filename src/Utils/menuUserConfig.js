import { FiSettings } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

const menuUserConfig = [
    {
      name: "Your profile",
      href: "#",
      icon: FaRegUser,
    },
    {
      name: "Ordered",
      href: "#",
      icon: BsBagCheck,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: FiSettings,
    },
  ];
export default menuUserConfig;