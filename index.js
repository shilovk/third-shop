import React from "react";
import { createRoot } from 'react-dom/client';
// import Product from "~/src/Product";
import Catalog from "~/src/Catalog";
import Bowser from "bowser";
import browserContext from "~/browserContext";

const browser = Bowser.getParser(window.navigator.userAgent);
console.log(browser.getPlatform().type, browser.getBrowserName());

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <browserContext.Provider value={browser}>
    <Catalog
      products={[
        {
          id: 1,
          title: "iPhone",
          price: 200
        },
        {
          id: 2,
          title: "MacBook",
          price: 3500
        }
      ]}
    />
  </browserContext.Provider>
);

// root.render(
//   <Product
//     title = "iPhone"
//     price = {200}
//   />
// );
