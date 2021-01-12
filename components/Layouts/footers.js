import React  from 'react'
import { Layout } from 'antd';


const Footers = () => {

    const {Footer} = Layout;
    
    return (
        <Footer className="foooter" >
            <h1>Copyright 2020</h1>
            <style>
            {`
                .foooter{
                    position: relative;
                    bottom:0;
                    display: inline-block;
                    width: 100%;
                    
    background: #ffffff;

                }
            `}
        </style>
        </Footer>
       
    )
    
}


export default Footers;