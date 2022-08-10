import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import FilterProduct from "../../Components/FilterProduct/FilterProduct";
import MobileFilter from "../../Components/MobileFilter/MobileFilter";
import SortProduct from "../../Components/SortProduct/SortProduct";
import { useParams } from "react-router-dom";

export default function SearchProduct(props) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { key } = useParams();

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <MobileFilter
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-10 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Search results for "{key}"
            </h1>
            <div className="flex items-center">
              <SortProduct />
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FaAngleDown className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <FilterProduct />
        </main>
      </div>
    </div>
  );
}
