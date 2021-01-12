import React from 'react'
import { Row, Col } from 'antd';


export default function CardTop({ data, type, md }) {
    function _handleRenderType(data) {
        switch (type) {
            case "TopCases":
                return data.cases;
            case "TodayCases":
                return data.todayCases;
            case "TopDeath":
                return data.deaths;
            case "TodayDeath":
                return data.todayDeaths;
            case "Actived":
                return data.active;
            case "Recovered":
                return data.recovered;

            default:
                return data.cases;
        }
    }
    
    return (
        <>
            <Row gutter={24}>
                {data.map((d, i) => {
                    return (

                        <Col md={md} key={i} title={d.country}>
                            <div className="statistics">
                                <div className="img-statistics">
                                    <img src={d.countryInfo.flag} alt={d.countryInfo.iso2}  />
                                    {d.countryInfo.iso3}
                                </div>
                                <div className="cases-statistics"> {_handleRenderType(d)} </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
            <style>
                {`
                    .statistics {
                        display: flex;
                        align-items: center;
                        padding: 20px 20px 20px;
                        border-radius: 5px;
                        margin-bottom: 10px;
                        padding: 10px 15px;
                        justify-content: space-between;
                        border-radius: 5px;
                        background: #fff;
                    }
                    .statistics .img-statistics img {
                        margin-right: 10px;
                        width: 40px;
                        height: 30px;
                    }
                `}
            </style>
        </>
    )
}
