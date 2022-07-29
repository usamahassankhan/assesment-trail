
import React from 'react';
import './Card.css';
import { Layout, Menu,Card, Col, Row } from 'antd';
function Cards() {
  return (
    <div className="site-card-wrapper">
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
</div>
  )
}

export default Cards