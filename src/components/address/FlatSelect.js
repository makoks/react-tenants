import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Select } from "antd";

import actions from "../../redux/reducers/address/address.actions";
import { loadTenants } from "../../redux/reducers/tenants/tenants.thunks";

const { Option } = Select;

const FlatSelect = () => {
    const dispatch = useDispatch();

    const { areFlatsLoading, flats } = useSelector(state => state.address);

    const onFlatChange = flatId => {
        dispatch(actions.selectFlat(flatId));
        dispatch(loadTenants(flatId));
    };

    return (
        <Form.Item name="flat" label="Квартира">
            <Select
                showSearch
                placeholder="Выберите квартиру"
                optionFilterProp="children"
                onChange={onFlatChange}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                loading={areFlatsLoading}
                disabled={flats === null}
                style={{width: 170}}
            >
                {flats && flats.map(flat => (
                    <Option key={flat.id} value={flat.id}>{flat.name}</Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default FlatSelect;
