import React from "react";
import { useSelector } from "react-redux";
import { Alert, Typography } from "antd";

import TenantsTable from "./TenantsTable";
import AddTenantButton from "./AddTenantButton";

const { Title } = Typography;

const Tenants = () => {
    const { errorMessage } = useSelector(state => state.tenants);
    const { flatId } = useSelector(state => state.address);

    return (
        <>
            <Title level={3}>Список жильцов</Title>

            {errorMessage
                ? <Alert
                    message="Нам не удалось загрузить жильцов"
                    description={errorMessage}
                    type="error"
                    showIcon
                />

                : !flatId
                ? "Выберите квартиру для просмотра списка жильцов"

                : <>
                    <TenantsTable />
                    <AddTenantButton />
                </>
            }
        </>
    );
};

export default Tenants;
