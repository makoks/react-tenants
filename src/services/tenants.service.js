import apiClient from "../helpers/apiClient";

class TenantsService {
    loadTenants = addressId => {
        return apiClient().get(`HousingStock/clients?addressId=${addressId}`);
    };

    postTenant = values => apiClient().post("/HousingStock/client", values);

    bindTenant = (clientId, addressId) => apiClient().put(
        "/HousingStock/bind_client",
        { addressId, clientId }
    );

    deleteTenant = id => apiClient().delete(`HousingStock/bind_client/${id}`);
}

export default new TenantsService();
