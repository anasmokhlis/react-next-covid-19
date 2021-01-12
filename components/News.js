import React from "react";
import { Row, Col, Card } from "antd";

export default function News() {
  return (
    <>
      <Col xs={24} md={8}>
        <Row>
          <Col xs={24} style={{ marginBottom: "30px" }}>
            <Card title="WHO Latest News" bordered={false}>
              <p>
                WHO Director-General's opening remarks at the media briefing on
                COVID-19 - 1 April 2020
              </p>
              <p>
                WHO Director-General's opening remarks at the media briefing on
                COVID-19 - 30 March 2020
              </p>
              <p>
                WHO Director-General's opening remarks at the media briefing on
                COVID-19 - 27 March 2020
              </p>
            </Card>
          </Col>
        </Row>
      </Col>
    </>
  );
}
