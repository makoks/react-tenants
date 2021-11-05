import React from "react";
import { useSelector } from "react-redux";
import { Table, Typography } from "antd";

const { Text, Title } = Typography;

const TenantsTable = () => {
    const { tenants } = useSelector((state) => state.tenants);

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
    }];

    return (
        <Table
            dataSource={tenants}
            columns={columns}
            rowKey={tenant => tenant.id}
            title={() => <Title level={3}>Список жильцов</Title>}
            style={{marginBottom: 24}}
        />
    );
};

export default TenantsTable;
