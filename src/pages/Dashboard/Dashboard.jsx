
import React from 'react';
import './Dashboard.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Card, Col, Row } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { setUser} from "../../redux/actons/authAction";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
  let user = useSelector((state) => state);
  const dispatch = useDispatch();
const logoutFunction=()=>{
    dispatch(setUser({
        email:"",
        auth:false
      }));
      navigate("/");
      localStorage.removeItem("token")
}
    const { Header, Footer, Sider, Content } = Layout;
    const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `menu ${key}`,
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 2 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    });
    return (
        <div className="App">
            <Layout>
                <Sider> <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                    items={items2}
                /></Sider>
                <Layout>
                    <Header className='header'><div>{`Assesment Trail Dashbaord`}</div><div className="email-head"> {`${user.user.email || localStorage.getItem("email")  }`}</div><button className='logout' onClick={logoutFunction}>LogOut</button></Header>
                    <Content className='content-wrapper'><div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="PureVpn" bordered={false}>
                                <h1 className='number-string'>300</h1>
                                  <h1>No of Employee</h1>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Cloudways" bordered={false}>
                                <h1 className='number-string'>600</h1>
                                  <h1>No of Employee</h1>
                                </Card>
                            </Col>
                            <Col span={8}>
                            <Card title="Savyour" bordered={false}>
                                <h1 className='number-string'>400</h1>
                                  <h1>No of Employee</h1>
                                </Card>
                            </Col>
                        </Row>
                    </div></Content>
                    {/* <Footer>Footer</Footer> */}
                </Layout>
            </Layout>
        </div>
    );
}

export default Dashboard;
