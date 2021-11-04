import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Select } from "antd";

import { loadStreets, loadHouses } from "../redux/reducers/address/address.thunks";
import actions from "../redux/reducers/address/address.actions";

const { Option } = Select;

const StreetSelect = () => {
    const dispatch = useDispatch();

    const { areStreetsLoading, streets } = useSelector((state) => state.address);

    const onStreetChange = (streetId) => {
        dispatch(actions.selectStreet(streetId));
        dispatch(loadHouses(streetId));
    };

    useEffect(() => {
        dispatch(loadStreets());
    }, [dispatch]);

    return (
        <Form.Item name="street" label="Улица">
            <Select
                showSearch
                placeholder="Выберите улицу"
                optionFilterProp="children"
                onChange={onStreetChange}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                loading={areStreetsLoading}
                style={{width: 200}}
            >
                {streets && streets.map(street => (
                    <Option key={street.id} value={street.id}>{street.name}</Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default StreetSelect;
