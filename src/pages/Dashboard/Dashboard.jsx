import React, { useEffect } from "react";
import logo from "../../../src/assets/lo.jpg";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { AppstoreOutlined, FlagOutlined } from "@ant-design/icons";
import { Layout, Menu, notification } from "antd";
import Cards from "../../Components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/actons/authAction";
import { setDashboard } from "../../redux/actons/dashboardAction";

function Dashboard() {
  const navigate = useNavigate();
  let user = useSelector((state) => state);
  let users = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();
  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
      description: "",
    });
  };
  const logoutFunction = () => {
    dispatch(
      setUser({
        email: "",
        auth: false,
      })
    );
    navigate("/login");
    localStorage.removeItem("token");
    openNotificationWithIcon("success", "You have been logout");
  };
  const { Header, Sider, Content } = Layout;

  useEffect(() => {
    dispatch(setDashboard());
  }, []);

  return (
    <div className="App">
      <Layout>
        <Sider>
          <Menu style={{ height: "100%" }}>
            <img src={logo} alt="flag" className="logo" />

            <Menu.Item
              key="mail1"
              icon={<AppstoreOutlined />}
              onClick={() => navigate("/")}
            >
              Dashboard
            </Menu.Item>

            <Menu.Item
              key="app1"
              icon={<FlagOutlined />}
              onClick={() => navigate("/countries")}
            >
              Countries
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header">
            <div>{`Assesment Trail Dashbaord`}</div>
            <div className="email-head">
              {" "}
              {`${user?.user?.email || localStorage.getItem("email")}`}
            </div>
            <button className="logout" onClick={logoutFunction}>
              LogOut
            </button>
          </Header>
          <Content className="content-wrapper-card">
            {users?.data?.data?.map((userInfo) => (
              <Cards
                email={userInfo.email}
                firstname={userInfo.first_name}
                lastname={userInfo.last_name}
                src={userInfo.avatar}
              />
            ))}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
