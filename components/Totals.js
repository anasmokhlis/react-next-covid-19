import React, { useState, useEffect } from 'react'
import axios from "axios";
import moment from "moment";
import { Col } from "antd";

import Card from "./utils/Card"

export default function Totals() {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((res) => setData(res.data))
      .catch((e) => console.log("error", e));
  }, [])
 
  return (
    <>
      <Col xs={24}>
        <h2>
          <span>Last updat: </span>
          {moment(data.updated).format('YYYY-MM-DD')}
        </h2>
      </Col>
      <Card total={data.todayCases} color="8553ee" title="New Cases" icons="NC" />
      <Card total={data.cases} color="8553ee " title="Total Cases" icons="TC"  />
      <Card
        total={data.casesPerOneMillion}
        color="8553ee "
        title="Cases Per One Million"
      />
      <Card total={data.todayDeaths} color="f5365c" title="New Death" icons="ND"  />
      <Card total={data.deaths} color="f5365c" title="Total Death"  icons="TD" />
      <Card
        total={data.deathsPerOneMillion}
        color="f5365c"
        title="Deaths Per One Million"
        icons="DOM" 
      />
      <Card total={data.recovered} color="23bdb8" title="Total Recovered" icons="TR"  />
      <Card total={data.active} color="f5365c" title="Active" icons="A"  />
      <Card total={data.tests} color="f5365c" title="Tests" icons="T"  />
      <Card
        total={data.testsPerOneMillion}
        color="f5365c"
        title="Tests Per One Million"
        icons="TOM" 
      />
      <Card
        total={data.affectedCountries}
        color="f5365c"
        title="Affected Countries"
        icons="AC" 
      />
    </>
  )
}
