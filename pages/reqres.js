import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Spin, Row, Col, Pagination } from 'antd';
import Layouts from '../components/Layouts';
import ReactPaginate from 'react-paginate';

export default function reqres() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {

        setLoading(true)
        axios
            .get(`https://reqres.in/api/users?page=${page}`)
            .then((res) => setData(res.data.data), setLoading(false))
            .catch((e) => {
                console.log("error", e),
                    setLoading(false)
            })


    }, [page])

    function onChangePage() {
        if(page < 2){
            console.log("page not found")
            setPage(page + 1)
        }
    }

    console.log(data, page);

    return (
        <Layouts>
            <Pagination current={page} onChange={onChangePage} />
            <Row justify="center" gutter={[8, 32]}>
                {
                    loading ? (
                        <Spin spinning={loading} size={large} />
                    ) : (
                            data.map((user) => {
                                return (
                                    <Col span={8} key={user.id} style={{ textAlign: "center" }} >
                                        <p>
                                            <strong>
                                                {user.first_name} {user.last_name}
                                            </strong>
                                        </p>
                                        <p>
                                            {user.email}
                                        </p>
                                        <img style={{ width: "60%" }} src={user.avatar} alt={user.name} />
                                    </Col>
                                )
                            })
                        )
                }
            </Row>
            <ReactPaginate  pageCount={page} onPageChange={onChangePage} />

        </Layouts>
    )
}
