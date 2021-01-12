import React, { useEffect, useState } from 'react';
import Layouts from '../components/Layouts';
import { fetchPosts, addPost, deletePost, editPost } from './store/actions/postActions';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Popconfirm, message } from 'antd';

export default function ReactReduxNext() {

    const dispatch = useDispatch();
    const { posts } = useSelector(state => state.post)

    const [value, setValue] = useState('')
    const [idUpdated, setiIdUpdated] = useState('')
    const [editValue, setEditValue] = useState(false)

    useEffect(() => {
        dispatch(fetchPosts());
        setValue('')
    }, [])

    function changeValue(e) {
        setValue(e.target.value)
    }

    function addP() {
        if (value) {
            const lastIndexPost = posts.length ? posts.slice(-1)[0].id + 1 : 0;
            const newPost = {
                id: lastIndexPost,
                name: value
            }
            dispatch(addPost(newPost))
        }else{
            message.info("add some")
        }
        setValue('');
    }

    function deleteP(id) {
        dispatch(deletePost(id))
        message.success(`Post deleted: ${id}`);
    }

    function editP(value) {
        setEditValue(true)
        setiIdUpdated(value)
        const postEdited = posts[Object.keys(posts)[value]];
        setValue(postEdited.name)
    }

    function updateP() {
        const newPost = {
            id: idUpdated,
            name: value
        }
        dispatch(editPost(newPost))
        setEditValue(false)
        setValue('')
    }

    function cancelE() {
        setEditValue(false)
        setValue('')
    }

    function initializePosts() {
        dispatch(fetchPosts());
    }
    
    return (
        <Layouts>
            <Row gutter={[24, 24]}>
                <Col className="gutter-row" span={7}>
                    <span>Post:</span> <input type="text" placeholder="Add some post" value={value} onChange={changeValue} />

                </Col>
                <Col className="gutter-row" span={6}>
                    {
                        editValue ? (
                            <>
                                <button onClick={() => updateP()} style={{ marginRight: '5px' }} > Update </button>
                                <button onClick={cancelE} > Cancel </button>
                            </>
                        ) : (
                                <button onClick={() => addP()}> Add Post </button>
                            )
                    }
                </Col>
            </Row>

            <Row gutter={[24, 24]}>
                <Col span={4}>
                    Total: {posts.length} <button onClick={initializePosts} > initialize </button>
                </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={4}>
            <ul>
                {
                    posts.length ? (
                        posts.map((post) => {
                            return (
                                <li key={post.id} >
                                    <Popconfirm
                                        placement="topRight"
                                        title={`Are you sure to delete this ${post.name}`}
                                        onConfirm={() => deleteP(post.id)}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        {post.id + 1} -- {post.name}
                                    </Popconfirm>
                                    <a onClick={() => editP(post.id)} > Edit </a>
                                </li>
                            )
                        })
                    ) : (
                            <p>No posts add some one</p>
                        )
                }
            </ul>
            </Col>
            </Row>
        </Layouts >
    )
}
