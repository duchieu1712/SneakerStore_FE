import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import FilterProduct from "../../Components/FilterProduct/FilterProduct";
import SortProduct from "../../Components/SortProduct/SortProduct";
import { filterProducts, getProducts } from "../../Redux/Actions/product";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function ListProducts(props) {
  const { search } = useLocation();
  const dispatch = useDispatch();
  let query = useQuery();
  const { products } = useSelector((state) => state.productReducer);
  const { brands } = useSelector((state) => state.brandReducer);
  const { categories } = useSelector((state) => state.categoryReducer);
  const [selected, setSelected] = useState({})

  useEffect(() => {
    if (!search) {
      dispatch(getProducts());
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    dispatch(filterProducts(search))
    // eslint-disable-next-line
    const brand = brands.find(option => option.id == query.get("brand"))
    // eslint-disable-next-line
    const category = categories.find(option => option.id == query.get("category"))
    if(query.get("brand")){
      setSelected({...selected, brand})
    }
    if(query.get("category")){
      setSelected({...selected, category})
    }
    // eslint-disable-next-line
  },[query])
  return (
    <div className="bg-white">
      <div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-10 pb-6">
            <div>
              {query.get("brand") ? (
                <div>
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                    {selected.brand?.name}
                  </h1>
                  <p>{selected.brand?.descrip}</p>
                </div>
              ) : (
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                  {query.get("search")
                    ? `Result for '${query.get("search")}'`
                    : "List Products"}
                </h1>
              )}
              {query.get("category") ? (
                <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
                  Category: {selected.category?.name}
                </h1>
              ) : null}
            </div>

            <div className="flex items-center">
              <SortProduct />
            </div>
          </div>
          <FilterProduct
            brands={brands}
            categories={categories}
            products={products}
          />
        </main>
      </div>
    </div>
  );
}
