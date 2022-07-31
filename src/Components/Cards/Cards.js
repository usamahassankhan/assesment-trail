import React from "react";
import "./Card.css";
import { Card } from "antd";

function Cards(props) {
  return (
    <div className="site-card-wrapper">
      <div className="side-card">
        <Card title={props.email} bordered={false}>
          <img src={props.src} alt="user" className="profile" />
          <h6 className="number-string">
            {props.firstname + " " + props.lastname}
          </h6>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
