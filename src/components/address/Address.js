import React from "react";
import { useSelector } from "react-redux";
import { Typography, Form, Alert } from "antd";

import StreetSelect from "./StreetSelect";
import HouseSelect from "./HouseSelect";
import FlatSelect from "./FlatSelect";

const { Title } = Typography;

const Address = () => {
    const [form] = Form.useForm();

    const { errorMessage } = useSelector(state => state.address);

    if (errorMessage) return (
        <Alert
            message="Нам не удалось загрузить адрес"
            description={errorMessage}
            type="error"
            showIcon
        />
    );

    return (
        <>
            <Title level={3}>Адрес</Title>
            {errorMessage ?
                <Alert
                    message="Нам не удалось загрузить адрес"
                    description={errorMessage}
                    type="error"
                    showIcon
                />
            :
                <Form
                    layout="inline"
                    form={form}
                    name="address-form"
                    style={{marginBottom: 50}}
                >
                    <StreetSelect />
                    <HouseSelect />
                    <FlatSelect />
                </Form>
            }
        </>
    );
};

export default Address;
