/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Popover, Transition, Menu } from "@headlessui/react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import navbarConfig from "../../Utils/navbarConfig";
import menuUserConfig from "../../Utils/menuUserConfig";
import "./Header.css";
import SearchInput from "../SearchInput/SearchInput";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import TokenService from "../../Services/serviceToken";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ onHandleCart, categories, brands }) {
  const { currentUser } = useSelector((state) => state.userReducer);
  const { numberCart } = useSelector((state) => state.cartReducer);
  const history = useHistory();
  const signOut = () => {
    TokenService.removeUser();
    window.location.href = "/";
  };
  const [key, setSearch] = useState(null);
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    if (key !== null) {
      history.push(`/listProducts/?search=${key}`);
    }
  };
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-5 md:justify-start md:space-x-10">
          <div className="-my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <Popover.Group
            as="nav"
            className="hidden md:flex space-x-7 marginLeft"
          >
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>Brands</span>
                    <FaAngleDown
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-ss sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {brands.map((item) => (
                            <NavLink
                              to={`/listProducts/?brand=${item.id}`}
                              key={item.id}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              {/* <item.icon
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                aria-hidden="true"
                              /> */}
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>Categories</span>
                    <FaAngleDown
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-ss sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {categories.map((item) => (
                            <NavLink
                              to={`/listProducts/?category=${item.id}`}
                              key={item.id}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div className="ml-6">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            {navbarConfig.map((item) => (
              <NavLink
                key={item.name}
                to={`/${item.href}`}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </NavLink>
            ))}
          </Popover.Group>
          <div className="hidden md:block">
            <SearchInput
              onHandleChange={handleChangeSearch}
              onHandleSearch={handleSearch}
            />
          </div>

          {currentUser ? (
            <Menu
              as="div"
              className="md:flex items-center justify-end md:flex-1 lg:w-0"
            >
              <div className="flex">
                <button
                  type="button"
                  className="p-1 rounded-full text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-4"
                  onClick={() => onHandleCart()}
                >
                  <Badge badgeContent={numberCart} color="primary">
                    <BsCart4 className="h-6 w-6" aria-hidden="true" />
                  </Badge>
                </button>
                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute positionMenu mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                  {menuUserConfig.map((item) => (
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          to={item.href}
                          className="p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 mr-3 text-indigo-600"
                            aria-hidden="true"
                          />
                          <p>{item.name}</p>
                        </NavLink>
                      )}
                    </Menu.Item>
                  ))}
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700 text-center"
                        )}
                        onClick={signOut}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button
                type="button"
                className="p-1 rounded-full text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-4"
                onClick={() => onHandleCart()}
              >
                <Badge badgeContent={numberCart} color="primary">
                  <BsCart4 className="h-6 w-6" aria-hidden="true" />
                </Badge>
              </button>
              <NavLink
                to="/auth/signIn"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </NavLink>
              <NavLink
                to="/auth/signUp"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </NavLink>
            </div>
          )}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <MdClose className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
              </div>
              <SearchInput />
              <div className="mt-6">
                <h3 className="mb-4 text-center">Brands</h3>
                <nav className="grid grid-cols-2 gap-x-32 gapItem">
                  {brands.map((item) => (
                    <NavLink
                      to={`/listProducts/${item.id}`}
                      key={item.id}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      /> */}
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </NavLink>
                  ))}
                </nav>
              </div>
              <div className="mt-6">
                <h3 className="mb-4 text-center">Categories</h3>
                <nav className="grid grid-cols-2 gap-x-32 gapItem">
                  {categories.map((item) => (
                    <NavLink
                      to={`/listProducts/${item.id}`}
                      key={item.id}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-32">
                {navbarConfig.map((item) => (
                  <NavLink
                    key={item.name}
                    to={`/${item.href}`}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              {currentUser ? (
                <div className="mt-6"></div>
              ) : (
                <div>
                  <NavLink
                    to="/auth/signUp"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </NavLink>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <NavLink
                      to="/auth/signIn"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </NavLink>
                  </p>
                </div>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
