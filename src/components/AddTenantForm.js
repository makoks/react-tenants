import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from "antd";

import { addTenant } from "../redux/reducers/tenants/tenants.thunks";

const AddTenantForm = () => {
    const dispatch = useDispatch();
    const { addTenantLoading } = useSelector((state) => state.tenants);
    const { flatId } = useSelector((state) => state.address);

    const onAddTenant = values => {
        dispatch(addTenant(values, flatId));
    };

    return (
        <Form
            name="addTenant"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={onAddTenant}
        >
            <Form.Item label="ФИО" name="name">
                <Input />
            </Form.Item>

            <Form.Item
                label="Номер телефона"
                name="phone"
                rules={[
                    {
                        required: true,
                        message: 'Укажите номер телефона'
                    }
                ]}
            >
                <Input type="tel" />
            </Form.Item>

            <Form.Item label="Email" name="email">
                <Input type="email" />
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={addTenantLoading}
                >
                    Привязать жильца
                </Button>
            </Form.Item>
        </Form>

    );
};

export default AddTenantForm;
