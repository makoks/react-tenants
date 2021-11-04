import React from "react";
import { useSelector } from "react-redux";
import { Form, Alert } from "antd";

import StreetSelect from "./StreetSelect";
import HouseSelect from "./HouseSelect";
import FlatSelect from "./FlatSelect";

const Address = () => {
    const [form] = Form.useForm();

    const { errorMessage } = useSelector((state) => state.address);

    if (errorMessage) return (
        <Alert
            message="Нам не удалось загрузить адрес"
            description={errorMessage}
            type="error"
            showIcon
        />
    );

    return (
        <Form layout="inline" form={form} name="address-form">
            <StreetSelect />
            <HouseSelect />
            <FlatSelect />
        </Form>
    );
};

export default Address;
