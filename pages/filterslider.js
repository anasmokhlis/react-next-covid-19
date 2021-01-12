import React, { useState, useEffect } from 'react'
import { Row, Col, Slider, InputNumber, Spin, Select, Divider } from 'antd'
import axios from 'axios'
import { sortBy, maxBy, minBy } from 'lodash'
import Layouts from '../components/Layouts'
import CardTop from '../components/utils/CartTop'

export default function filterslider() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [minValue, setMinValue] = useState(null);
    const [maxValue, setMaxValue] = useState(null);
    const [selectValue, setSelectValue] = useState("cases");
    const { Option } = Select;
    let maxCases, minCases;

    useEffect(() => {
        setLoading(true)
        axios
            .get("https://corona.lmao.ninja/v3/covid-19/countries")
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((e) => {
                console.log("error", e),
                    setLoading(false)
            })
    }, [])

    minCases = minBy(data, selectValue);
    maxCases = maxBy(data, selectValue);

    function minVChange(v) {
        setMinValue(v)
    };

    function maxVChange(v) {
        setMaxValue(v)
    };

    function onChangeSelect(value) {
        setSelectValue(value);
        setMaxValue(maxCases.selectValue);
        setMinValue(minCases.selectValue);
    }
    console.log(selectValue, minValue, maxValue)
    return (
        <Layouts>
            <Row>
                <Col span={2}>
                    <h4>Select a choice: </h4>
                </Col>
                <Col span={4}> 
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a choice"
                        optionFilterProp="children"
                        onChange={onChangeSelect}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="cases">Cases</Option>
                        <Option value="todayCases">Today Cases</Option>
                        <Option value="deaths">Deaths</Option>
                        <Option value="todayDeaths">Today Deaths</Option>
                        <Option value="active">Active</Option>
                        <Option value="recovered">Recovered</Option>
                    </Select>
                </Col>

                <Col span={2}>
                    <h4>Min {selectValue}</h4>
                </Col>
                 <Col span={3}>
                    <Slider
                        min={minValue}
                        max={maxValue}
                        onChange={minVChange}
                        value={typeof minValue === 'number' ? minValue : 0}
                    />

                </Col>
                <Col span={3}>
                    <InputNumber
                        min={minValue}
                        max={maxValue}
                        onChange={minVChange}
                        value={minValue}
                    />
                </Col>
                <Col span={2}>
                    <h4>Max {selectValue}</h4>
                </Col>
                <Col span={3}>
                    <Slider
                        min={minCases?.cases || 0}
                        max={maxCases?.cases || 0}
                        onChange={maxVChange}
                        value={typeof maxValue === 'number' ? maxValue : 0}
                    />

                </Col>
                <Col span={3}>
                    <InputNumber
                        min={minCases?.cases || 0}
                        max={maxCases?.cases || 0}
                        onChange={maxVChange}
                        value={maxValue}
                    />
                </Col>
            </Row>

            <Divider dashed />

            <Row gutter={24}>
                {
                    loading ? (
                        <Spin spinning={loading} size="large" style={{ textAlign: "center", margin: "0 auto" }} />
                    ) : (
                            <>

                                <>
                                    <h4>{selectValue}</h4>
                                    <CardTop
                                        md={6}
                                        type={selectValue}
                                        data={sortBy(data, ['cases']).reverse()}
                                    />
                                </>

                            </>
                        )
                }
            </Row>
        </Layouts>
    )
}
