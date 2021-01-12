import React from 'react'
import { List, Typography, Divider, Row, Col } from 'antd'

export default function ListItem({ query, hits }) {
    const {title} = hits;

    return (
        <>
            <Col xs={12} md={6} style={{ marginBottom: "15px" }} >
            <Divider orientation="left">{query}</Divider>
                <List
                    itemLayout="horizontal"
                    header={<div>{query}</div>}
                    footer={<div>{query}</div>}
                    bordered
                    dataSource={title}
                    renderItem={item => (
                        <List.Item>
                          <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                      )}
                />
            </Col>
            <style global jsx>
                {``}
            </style>
        </>
    )
}
