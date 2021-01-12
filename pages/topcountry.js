import React, { useEffect, useState } from 'react';
import Layouts from '../components/Layouts';
import { Row, Col, Spin, Slider, InputNumber } from 'antd'
import { sortBy, maxBy, minBy } from 'lodash';

import CardTop from '../components/utils/CartTop';
import axios from 'axios';

CardTop

export default function TopCountry() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://corona.lmao.ninja/v2/countries')
            .then((res) => setData(res.data), setLoading(false))
            .catch((e) => {
                console.log("error", e),
                    setLoading(false)
            })

    }, [])


    return (
        <Layouts>
            
            <Row gutter={24}>
                {
                    loading ? (
                        <Spin spinning={loading} size="large" style={{ textAlign: "center", margin: "0 auto" }} />
                    ) : (
                            <>

                                <Col xs={12} md={4}>
                                    <h4>Top Case</h4>
                                    <CardTop
                                        md={24}
                                        type="TopCases"
                                        data={sortBy(data, ["cases"]).reverse().slice(1, 15)}
                                    />
                                </Col>
                                <Col xs={12} md={4}>
                                    <h4>Top Today Cases</h4>
                                    <CardTop
                                        md={24}
                                        type="TodayCases"
                                        data={sortBy(data, ["todayCases"]).reverse().slice(1, 15)}
                                    />
                                </Col>
                                <Col xs={12} md={4}>
                                    <h4>Top deaths</h4>
                                    <CardTop
                                        md={24}
                                        type="TopDeath"
                                        data={sortBy(data, ["deaths"]).reverse().slice(1, 15)}
                                    />
                                </Col>
                                <Col xs={12} md={4}>
                                    <h4>Top today Deaths</h4>
                                    <CardTop
                                        md={24}
                                        type="TodayDeath"
                                        data={sortBy(data, ["todayDeaths"]).reverse().slice(1, 15)}
                                    />
                                </Col>
                                <Col xs={12} md={4}>
                                    <h4>Top active</h4>
                                    <CardTop
                                        md={24}
                                        type="Actived"
                                        data={sortBy(data, ["active"]).reverse().slice(1, 15)}
                                    />
                                </Col>
                                <Col xs={12} md={4}>
                                    <h4>Top recovered</h4>
                                    <CardTop
                                        md={24}
                                        type="Recovered"
                                        data={sortBy(data, ["recovered"]).reverse().slice(1, 15)}
                                    />
                                </Col>
                            </>
                        )
                }
            </Row>
        </Layouts>
    )
}
