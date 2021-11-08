import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import actions from "../../redux/reducers/tenants/tenants.actions";

import AddTenantForm from "./AddTenantForm";

const AddTenantButton = () => {
    const dispatch = useDispatch();

    const {
        addModalVisible,
        addTenantSuccess,
        addTenantError
    } = useSelector((state) => state.tenants);

    const onOpenAddModal = () => dispatch(actions.openAddModal());
    const onCloseAddModal = () => dispatch(actions.closeAddModal());

    return (
        <>
            <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={onOpenAddModal}
            >
                Добавить жильца
            </Button>

            <Modal
                title="Добавление жильца к выбранной квартире"
                centered
                visible={addModalVisible}
                onCancel={onCloseAddModal}
                footer={null}
            >
                {addTenantSuccess &&
                    <Alert
                        message="Жилец успешно привязан"
                        type="success"
                        showIcon
                        style={{marginBottom: 24}}
                    />
                }

                {addTenantError &&
                    <Alert
                        message={addTenantError}
                        type="error"
                        showIcon
                        style={{marginBottom: 24}}
                    />
                }

                <AddTenantForm />
            </Modal>
        </>
    );
};

export default AddTenantButton;
