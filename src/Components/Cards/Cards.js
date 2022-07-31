import React, { useEffect } from "react";
import "./Card.css";
import { Layout, Menu, Card, Col, Row } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setDashboard } from "../../redux/actons/dashboardAction";

function Cards(props) {
  // useEffect(() => {
  //   dispatch(setDashboard());
  // }, [dispatch]);
  return (
    <div className="site-card-wrapper">
      {/* <Row gutter={16}> */}
      <div className="side-card">
        <Card title={props.email} bordered={false}>
          <img src={props.src} alt="user" className="profile" />
          <h6 className="number-string">
            {props.firstname + " " + props.lastname}
          </h6>
        </Card>
      </div>

      {/* <Col span={8}>
          <Card title="Cloudways" bordered={false}>
            <h1 className="number-string">600</h1>
            <h1>No of Employee</h1>
          </Card>
        </Col> */}
      {/* <Col span={8}>
          <Card title="Savyour" bordered={false}>
            <h1 className="number-string">400</h1>
            <h1>No of Employee</h1>
          </Card>
        </Col> */}
      {/* </Row> */}
    </div>
  );
}

export default Cards;
