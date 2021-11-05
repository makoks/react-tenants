import actionTypes from "./tenants.actionTypes";
import initialState from "./tenants.initialState";

const tenantsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.LOAD_TENANTS_START:
            return {
                ...state,
                errorMessage: null
            };
        case actionTypes.LOAD_TENANTS_SUCCESS:
            return {
                ...state,
                tenants: payload
            };

        case actionTypes.OPEN_ADD_MODAL:
            return {
                ...state,
                addModalVisible: true
            };
        case actionTypes.CLOSE_ADD_MODAL:
            return {
                ...state,
                addModalVisible: false,
                addTenantSuccess: false,
                addTenantError: false
            };


        case actionTypes.ADD_TENANT_START:
            return {
                ...state,
                addTenantLoading: true,
                addTenantError: false
            };
        case actionTypes.ADD_TENANT_SUCCESS:
            return {
                ...state,
                addTenantLoading: false,
                addTenantSuccess: true
            };
        case actionTypes.ADD_TENANT_ERROR:
            return {
                ...state,
                addTenantLoading: false,
                addTenantError: payload
            };


        case actionTypes.TENANTS_ERROR:
            return {
                ...state,
                areTenantsLoading: false,
                tenants: null,
                errorMessage: payload
            };

        default:
            return state;
    }
};

export default tenantsReducer;
