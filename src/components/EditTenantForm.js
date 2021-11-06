import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from "antd";

import { editTenant } from "../redux/reducers/tenants/tenants.thunks";

const EditTenantForm = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const { tenant, editTenantLoading } = useSelector((state) => state.tenants);
    const { flatId } = useSelector((state) => state.address);

    const onEditTenant = values => {
        dispatch(editTenant({phone: tenant.phone, ...values}, flatId));
    };

    useEffect(() => form.resetFields(), [tenant, form]);

    return (
        <Form
            name="editTenant"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={onEditTenant}
            initialValues={tenant}
            form={form}
        >
            <Form.Item label="ФИО" name="name">
                <Input />
            </Form.Item>

            <Form.Item label="Email" name="email">
                <Input type="email" />
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={editTenantLoading}
                >
                    Сохранить
                </Button>
            </Form.Item>
        </Form>

    );
};

export default EditTenantForm;
