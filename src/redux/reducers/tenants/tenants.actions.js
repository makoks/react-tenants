import actionTypes from "./tenants.actionTypes";

const openAddModal = () => ({
    type: actionTypes.OPEN_ADD_MODAL
});
const closeAddModal = () => ({
    type: actionTypes.CLOSE_ADD_MODAL
});


const addTenantStart = () => ({
    type: actionTypes.ADD_TENANT_START
});
const addTenantSuccess = () => ({
    type: actionTypes.ADD_TENANT_SUCCESS
});
const addTenantError = errorMessage => ({
    type: actionTypes.ADD_TENANT_ERROR,
    payload: errorMessage
});


const tenantsError = errorMessage => ({
    type: actionTypes.TENANTS_ERROR,
    payload: errorMessage
});

const actions = {
    openAddModal,
    closeAddModal,

    addTenantStart,
    addTenantSuccess,
    addTenantError,

    tenantsError
};

export default actions;
