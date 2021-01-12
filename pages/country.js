import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Row, Col, Spin, Divider, Input, Card } from "antd";
import { HeatMapOutlined } from '@ant-design/icons';
import Layouts from '../components/Layouts';

export default function country() {

    const [dataCountry, setDataCountry] = useState([]);
    const [country, setCountry] = useState('morocco');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        axios
            .get(`https://disease.sh/v3/covid-19/countries/${country}`)
            .then((res) => setDataCountry(res.data),setLoading(false))
            .catch((e) => console.log("error", e), setLoading(false));

    }, [handleChangeCountry])

    function handleChangeCountry(e) {
        setCountry(e.target.value);
    }

    const { cases, deaths, recovered, active, continent } = dataCountry;
    
    return (
        <Layouts>
            <Row gutter={24}>
                <Col  xs={24}>

                    <Input onChange={handleChangeCountry} placeholder="Choice a country..." prefix={<HeatMapOutlined />} />
                    
                </Col>
                <Divider plain>{dataCountry.country || "Choice a country"}</Divider>
                <Col  xs={24}>
                    {
                        loading ? (
                            <Spin size="large" spinning={loading} style={{ textAlign: 'center', margin: '0 auto' }} />
                        ) : (
                                <Row gutter={24} >

                                    <Col span={6}>
                                        <Card title="Country/continent:" bordered={false}>
                                            <img src={dataCountry.countryInfo ? dataCountry.countryInfo.flag : ""} alt="" style={{ width: "100%" }} />
                                            <Divider plain></Divider>
                                            <b>{dataCountry.country} / {continent}</b>
                                        </Card>
                                    </Col>
                                    <Col xs={18}>
                                        <Row gutter={24}>
                                            <Col className="gutter-row" span={6}>
                                                <Card title="Country Name" bordered={false}>
                                                    <b>{dataCountry.country}</b>
                                                </Card>
                                            </Col>
                                            <Col className="gutter-row" span={6}>
                                                <Card title="Country Cases" bordered={false}>
                                                    <b>{cases}</b>
                                                </Card>
                                            </Col>

                                            <Col className="gutter-row" span={4}>
                                                <Card title="Country Deaths" bordered={false}>
                                                    <b>{deaths}</b>
                                                </Card>
                                            </Col>
                                            <Col className="gutter-row" span={4}>
                                                <Card title="Country Recovered" bordered={false}>
                                                    <b>{recovered}</b>
                                                </Card>
                                            </Col>

                                            <Col className="gutter-row" span={4}>
                                                <Card title="Country Active" bordered={false}>
                                                    <b>{active}</b>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>

                                </Row>
                            )
                    }
                </Col>
            </Row>
            <style>
                {`
                    .foooter{
                        position: relative;
                        bottom:0;
                        display: inline-block;
                        width: 100%;
                        background: #ffffff;
                    }
                `}
            </style>
        </Layouts>
    )
}
