import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../redux/productReducer/action";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { products } = useSelector((store) => store.productReducer);

  console.log(searchParams.getAll("category"));

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search]);

  return (
    <DIV>
      {products.length > 0 &&
        products.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
    </DIV>
  );
};

const DIV = styled.div`
  margin: 20px auto;
  margin-left: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
`;

//searchParams.getAll(category)  = object
// it is a category.
//location.search = string.
