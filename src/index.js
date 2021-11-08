import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

import Address from "./components/address/Address";
import Tenants from "./components/tenants/Tenants";

import configureStore from "./redux/stores/configureStore";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div style={{padding: 24, maxWidth: 1300, margin: "auto"}}>
            <Address />
            <Tenants />
        </div>
    </Provider>,
    document.getElementById("root")
);
