import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Alert } from "antd";

import actions from "../../redux/reducers/tenants/tenants.actions";

import EditTenantForm from "./EditTenantForm";

const TenantsTable = () => {
    const dispatch = useDispatch();

    const {
        editModalVisible,
        editTenantSuccess,
        editTenantError
    } = useSelector(state => state.tenants);

    const onCloseEditModal = () => dispatch(actions.closeEditModal());

    return (
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
    );
};

export default TenantsTable;
