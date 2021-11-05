import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "antd";

import AddTenantButton from "./AddTenantButton";

const Tenants = () => {
    const { errorMessage } = useSelector((state) => state.tenants);
    const { flatId } = useSelector((state) => state.address);

    if (errorMessage) return (
        <Alert
            message="Нам не удалось загрузить жильцов"
            description={errorMessage}
            type="error"
            showIcon
        />
    );

    if (!flatId) return "";

    return (
        <>
            <AddTenantButton />
        </>
    );
};

export default Tenants;
