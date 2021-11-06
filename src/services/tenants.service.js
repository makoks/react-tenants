import apiClient from "../helpers/apiClient";

class TenantsService {
    loadTenants = addressId => apiClient().get(`HousingStock/clients?addressId=${addressId}`);
    postTenant = values => apiClient().post("/HousingStock/client", values);
    bindTenant = (clientId, addressId) => apiClient().put(
        "/HousingStock/bind_client",
        { addressId, clientId }
    );
}

export default new TenantsService();
