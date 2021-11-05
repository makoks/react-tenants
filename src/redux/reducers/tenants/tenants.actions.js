import actionTypes from "./tenants.actionTypes";

const loadTenantsStart = () => ({
    type: actionTypes.LOAD_TENANTS_START
});
const loadTenantsSuccess = tenants => ({
    type: actionTypes.LOAD_TENANTS_SUCCESS,
    payload: tenants
});


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
    loadTenantsStart,
    loadTenantsSuccess,

    openAddModal,
    closeAddModal,

    addTenantStart,
    addTenantSuccess,
    addTenantError,

    tenantsError
};

export default actions;
