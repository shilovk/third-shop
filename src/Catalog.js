import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const Catalog = ({ products }) => (
  <div>
    {
      products.map((product) => (
        <Product key={product.id} {...product} />
        )
      )
    }
  </div>
);

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(Product.propTypes)
  )
};

export default Catalog;
