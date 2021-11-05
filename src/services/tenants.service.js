import apiClient from "../helpers/apiClient";

class TenantsService {
    addTenant = values => apiClient().post("/HousingStock/client", values);
    bindTenant = (clientId, addressId) => apiClient().put(
        "/HousingStock/bind_client",
        { addressId, clientId }
    );
}

export default new TenantsService();
