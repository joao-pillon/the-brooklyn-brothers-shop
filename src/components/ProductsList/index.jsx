import { Main, Header } from "./style";
import Product from "../Product/index";
import { useState, useEffect } from "react";
import jsonData from "../../data/productsCategory.json";

const ProductsList = ({ filtered }) => {
  const data = jsonData.data.nodes;

  return (
    <>
      <Main>
        <ul>
          {filtered
            ? filtered.map((product, index) => {
                return (
                  <li>
                    <Product key={index} product={product} />
                  </li>
                );
              })
            : data.map((product, index) => {
                return (
                  <li>
                    <Product key={index} product={product} />
                  </li>
                );
              })}
        </ul>
      </Main>
    </>
  );
};

export default ProductsList;
