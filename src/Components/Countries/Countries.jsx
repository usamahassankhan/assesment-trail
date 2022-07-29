
import React from 'react';
import { Layout, Menu,Card, Col, Row, Tabs } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import Accordion from '../Accordion/AccordionCountriesWithCities';
import AccordionCountries from '../Accordion/AccordionCountries';
import AccordionCountriesWithCities from '../Accordion/AccordionCountriesWithCities';
function Cards() {
    const { TabPane } = Tabs;
  return (
    <div className="site-card-wrapper">
  <Tabs defaultActiveKey="2">
    <TabPane
      tab={
        <span>
          <AppleOutlined />
        Countries
        </span>
      }
      key="1"
    >
    <AccordionCountries/>
    </TabPane>
    <TabPane
      tab={
        <span>
          <AndroidOutlined />
          Cities
        </span>
      }
      key="2"
    >
      <AccordionCountriesWithCities/>
    </TabPane>
  </Tabs>
</div>
  )
}

export default Cards