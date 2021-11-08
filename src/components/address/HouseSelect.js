import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Select } from "antd";

import { loadFlats } from "../../redux/reducers/address/address.thunks";
import actions from "../../redux/reducers/address/address.actions";

const { Option } = Select;

const HouseSelect = () => {
    const dispatch = useDispatch();

    const { areHousesLoading, houses, flats } = useSelector(state => state.address);

    const onHouseChange = houseId => {
        dispatch(actions.selectHouse(houseId));
        dispatch(loadFlats(houseId));
    };

    return (
        <Form.Item name="house" label="Дом">
            <Select
                showSearch
                placeholder="Выберите дом"
                optionFilterProp="children"
                onChange={onHouseChange}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                loading={areHousesLoading}
                disabled={houses === null}
                style={{width: 170}}
            >
                {houses && houses.map(house => (
                    <Option key={house.id} value={house.id}>{house.name}</Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default HouseSelect;
