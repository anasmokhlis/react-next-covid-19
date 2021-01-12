import { Layout } from 'antd';
import Footers from './Footers';
import Headers from './Headers';

const { Content } = Layout;

const Layouts = ({ children }) => {
    return (
        <Layout className="layout">
            <Headers />
            <Content style={{ padding: "3% 70px" }}>
                <div>
                    {children}
                </div>
            </Content>
            <Footers />
        </Layout>
    )
}

export default Layouts;