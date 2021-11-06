import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Typography, Button, Modal, Alert } from "antd";
import { EditOutlined } from "@ant-design/icons";

import actions from "../redux/reducers/tenants/tenants.actions";
import EditTenantForm from "./EditTenantForm";

const { Text, Title } = Typography;

const TenantsTable = () => {
    const dispatch = useDispatch();

    const {
        tenants,
        editModalVisible,
        editTenantSuccess,
        editTenantError
    } = useSelector(state => state.tenants);

    const onOpenEditModal = tenant => dispatch(actions.openEditModal(tenant));
    const onCloseEditModal = () => dispatch(actions.closeEditModal());

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
        render: (text, tenant) => (
            <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => onOpenEditModal(tenant)}
                ghost
            >
                Изменить данные
            </Button>)
    }];

    return (
        <>
            <Table
                dataSource={tenants}
                columns={columns}
                rowKey={tenant => tenant.id}
                title={() => <Title level={3}>Список жильцов</Title>}
                style={{marginBottom: 24}}
            />

            <Modal
                title="Изменение данных жильца"
                centered
                visible={editModalVisible}
                onCancel={onCloseEditModal}
                footer={null}
            >
                {editTenantSuccess &&
                    <Alert
                        message="Данные жильца успешно изменены"
                        type="success"
                        showIcon
                        style={{marginBottom: 24}}
                    />
                }

                {editTenantError &&
                    <Alert
                        message={editTenantError}
                        type="error"
                        showIcon
                        style={{marginBottom: 24}}
                    />
                }

                <EditTenantForm />
            </Modal>
        </>
    );
};

export default TenantsTable;
