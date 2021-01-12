import React  from 'react'
import { Menu , Layout} from 'antd';
import ActiveLink from './ActiveLink';

const { Header } = Layout;
const {Item} = Menu

const Headers = () => {
    
    return (
        <Header>
            <Menu theme="light" mode="horizontal">
                <Item key="1">
                    <ActiveLink activeClassName="active" href="/">
                        <a className="nav-link" >Dashboard</a>
                    </ActiveLink>
                </Item>
                <Item key="2">
                    <ActiveLink activeClassName="active" href="/topcountry">
                        <a className="nav-link" >top Country</a>
                    </ActiveLink>
                </Item>
                <Item key="3">
                    <ActiveLink activeClassName="active" href="/covide">
                        <a className="nav-link" >Covid-19</a>
                    </ActiveLink>
                </Item>
                <Item key="4">
                    <ActiveLink activeClassName="active" href="/country">
                        <a className="nav-link" >by Country</a>
                    </ActiveLink>
                </Item>
                <Item key="5">
                    <ActiveLink activeClassName="active" href="/filterslider">
                        <a className="nav-link" >filter by Cases(Slider)</a>
                    </ActiveLink>
                </Item>
                <Item key="6">
                    <ActiveLink activeClassName="active" href="/reacthooks">
                        <a className="nav-link" >react-hooks</a>
                    </ActiveLink>
                </Item>
                <Item key="7">
                    <ActiveLink activeClassName="active" href="/reactreduxnext">
                        <a className="nav-link" >Next with React Redux</a>
                    </ActiveLink>
                </Item>
                <Item key="8">
                    <ActiveLink activeClassName="active" href="/reqres">
                        <a className="nav-link" >Fake api</a>
                    </ActiveLink>
                </Item>
                <Item key="9">
                    <ActiveLink activeClassName="active" href="/simpleform">
                        <a className="nav-link" >Redux Form</a>
                    </ActiveLink>
                </Item>
                <style>
                    {
                        `
                            .active{
                                color: #1890ff !important;
                            }
                            .ant-layout-header{
                                background: #ffffff !important;
                            }
                        `
                    }
                </style>
            </Menu>
        </Header>
    )
}


export default Headers;