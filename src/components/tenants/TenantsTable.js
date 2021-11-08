import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Typography, Space, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import actions from "../../redux/reducers/tenants/tenants.actions";
import { deleteTenant } from "../../redux/reducers/tenants/tenants.thunks";

import EditTenantModal from "./EditTenantModal";

const { Text } = Typography;

const TenantsTable = () => {
    const dispatch = useDispatch();

    const { tenants } = useSelector(state => state.tenants);
    const { flatId } = useSelector(state => state.address);

    const onOpenEditModal = tenant => dispatch(actions.openEditModal(tenant));
    const onDeleteTenant = id => dispatch(deleteTenant(id, flatId));

    const columns = [{
        title: "ФИО",
        dataIndex: "name",
        key: "name",
        render: text => <Text strong>{text}</Text>
    },{
        title: "Номер телефона",
        dataIndex: "phone",
        key: "phone"
    },{
        title: "Email",
        dataIndex: "email",
        key: "email"
    },{
        title: "Действия",
        key: "actions",
        render: (_, tenant) => (
            <Space>
                <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={() => onOpenEditModal(tenant)}
                    ghost
                >
                    Изменить данные
                </Button>
                <Button
                    type="primary"
                    icon={<DeleteOutlined />}
                    onClick={() => onDeleteTenant(tenant.bindId)}
                    ghost
                    danger
                >
                    Удалить
                </Button>
            </Space>
        )
    }];

    return (
        <>
            <Table
                dataSource={tenants}
                columns={columns}
                rowKey={tenant => tenant.id}
                style={{marginBottom: 24}}
                pagination={false}
                scroll={{x: true}}
            />

            <EditTenantModal />
        </>
    );
};

export default TenantsTable;
