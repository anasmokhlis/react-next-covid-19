import React from 'react';
import { Row } from 'antd';

import Layouts from '../components/Layouts';
import Top from '../components/Top';
import Totals from '../components/Totals';
import News from '../components/News';



export default function IndexPage() {
    return (
        <Layouts>
            <Row gutter={24} style={{marginBottom: "5%"}}>
                <Totals />
            </Row>
            <Row gutter={24} className="country-statistics">
                {/* <Top/> */}
            </Row>
            <Row>
                <News/>
            </Row>
        </Layouts>
    )
}