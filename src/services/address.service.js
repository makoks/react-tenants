import apiClient from "../helpers/apiClient";

class AddressService {
    getStreets = () => apiClient().get("Request/streets");

    getHouses = streetId => apiClient().get(`Request/houses/${streetId}`);

    getFlats = houseId => apiClient().get(`Request/house_flats/${houseId}`);
}

export default new AddressService();
