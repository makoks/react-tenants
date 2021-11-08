import AddressService from "../../../services/address.service";
import actions from "./address.actions";

export const loadStreets = () => dispatch => {
    dispatch(actions.streetsLoadStart());

    AddressService.getStreets()
        .then(response => {
            const streets = response.data.filter(street => street.cityId === 1);
            dispatch(actions.streetsLoadSuccess(streets));
        }).catch(error => dispatch(actions.addressLoadError(error.message)));
};

export const loadHouses = streetId => dispatch => {
    dispatch(actions.housesLoadStart());

    AddressService.getHouses(streetId)
        .then(response => dispatch(actions.housesLoadSuccess(response.data)))
        .catch(error => dispatch(actions.addressLoadError(error.message)));
};

export const loadFlats = houseId => dispatch => {
    dispatch(actions.flatsLoadStart());

    AddressService.getFlats(houseId)
        .then(response => {
            const flats = response.data.filter(flat => flat.typeId === 3);
            dispatch(actions.flatsLoadSuccess(flats));
        }).catch(error => dispatch(actions.addressLoadError(error.message)));
};
