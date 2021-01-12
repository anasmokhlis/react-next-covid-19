import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Spin } from 'antd'
import { sortBy } from 'lodash'

import CardTop from './utils/CartTop'

export default function Top() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios
            .get('https://corona.lmao.ninja/v2/countries')
            .then((res) => {
                setData(res.data),
                    setLoading(false)
            })
            .catch((e) => {
                console.log("error", e), setLoading(false);
            })
    }, [])
    
    return (
        <>
            {loading ? (
                <Spin size="large" spinning={loading} style={{ textAlign: 'center', margin: '0 auto' }} />
            ) : (
                    <>
                        <Col xs={12} md={4}>
                            <h4>Top Cases</h4>
                            <CardTop
                                data={sortBy(data, ["cases"]).reverse().slice(0, 10)}
                                type="TopCases"
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <h4>Today Cases</h4>
                            <CardTop
                                data={sortBy(data, ["todayCases"]).reverse().slice(0, 10)}
                                type="TodayCases"
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <h4>Top Deaths</h4>
                            <CardTop
                                data={sortBy(data, ["deaths"]).reverse().slice(0, 10)}
                                type="TopDeath"
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <h4>Today Death</h4>
                            <CardTop
                                data={sortBy(data, ["todayDeaths"]).reverse().slice(0, 10)}
                                type="TodayDeath"
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <h4>Top Actived</h4>
                            <CardTop
                                data={sortBy(data, ["active"]).reverse().slice(0, 10)}
                                type="Actived"
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <h4>Top Recovered</h4>
                            <CardTop
                                data={sortBy(data, ["recovered"]).reverse().slice(0, 10)}
                                type="Recovered"
                            />
                        </Col>
                    </>
                )}

            <style>
                {`
        .country-statistics{
            margin-bottom: 5%;
        }
        .country-statistics h4 {
            font-size: 18px;
            margin-bottom: 20px;
            text-align: center;
        }
      `}
            </style>
        </>
    )
}
