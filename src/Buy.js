import React from "react";
import browserContext from "~/browserContext";
import {browser} from "process/browser";

const Buy = () => (
  <browserContext.Consumer>
    {
      (browser) => (
        browser.getPlatformType() == "desktop" ? (
          <button>Desktop Buy</button>
        ) : (
          <button>Mobile Buy</button>
        )
      )
    }
  </browserContext.Consumer>
);

export default Buy;
