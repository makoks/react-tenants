import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import 'antd/dist/antd.css';
import Address from "./components/Address";
import configureStore from "./redux/stores/configureStore";

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <div style={{padding: 100}}>
                <Address />
            </div>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
