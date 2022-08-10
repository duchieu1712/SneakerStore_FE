import React, { Fragment } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
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
export default function MobileFilter({
  mobileFiltersOpen,
  setMobileFiltersOpen,
}) {
  return (
    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={setMobileFiltersOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 flex z-40">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <FaAngleDown className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <FaAngleDown
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <FaAngleDown
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 min-w-0 flex-1 text-gray-500"
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
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
