import React from 'react'
import { Card, Row, Col } from 'antd'

export default function Cards({total, color, title, icons}) {
    return (
        <>
            <Col xs={12} md={6} style={{ marginBottom: "15px" }} >
                <Card bordered={false}>
                    <Row gutter={24}>
                        <Col xs={6}>
                            <p className="icon-card" style={{ background: `#${color}`, width:"75%" }}>
                                {icons}
                            </p>
                        </Col>
                        <Col xs={18} className="world-widget">
                            <h5> {title} </h5>
                            <p>
                                <b>{ total || 0}</b>
                            </p>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <style global jsx>
                {`
                .world-widget h5 {
                    color: #AEAED5;
                    font-weight: normal;
                    font-size: 14px;
                    margin-bottom: 0;
                }
                .world-widget p{
                    font-size: 24px;
                    margin-bottom: 5px;
                }
                .ant-card-body {
                    padding: 10px 10px 0 !important;
                }
                .icon-card {
                    color: #fff
                    width: 3rem;
                    height: 3rem;
                    max-width: 100%;
                    flex: 0 0 auto;
                    margin-right: 15px;
                    display: inline-flex;
                    padding: 7px;
                    text-align: center;
                    border-radius: 50%;
                    align-items: center;
                    justify-content: center;
                }
                `}
            </style>
        </>
    )
}
