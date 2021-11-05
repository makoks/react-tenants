import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

import Address from "./components/Address";
import Tenants from "./components/Tenants";
import configureStore from "./redux/stores/configureStore";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div style={{padding: 100}}>
            <Address />
            <Tenants />
        </div>
    </Provider>,
    document.getElementById("root")
);
