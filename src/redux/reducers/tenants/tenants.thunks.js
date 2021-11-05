import TenantsService from "../../../services/tenants.service";
import actions from "./tenants.actions";

export const addTenant = (values, addressId) => (dispatch) => {
    dispatch(actions.addTenantStart());

    TenantsService.addTenant(values)
        .then(response => TenantsService.bindTenant(response.data.id, addressId))
        .then(() => dispatch(actions.addTenantSuccess()))
        .then(setTimeout(() => dispatch(actions.closeAddModal()), 1500))
        .catch(error => dispatch(actions.addTenantError(error.message)));
};
