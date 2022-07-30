
import React from 'react';
import { Tabs } from 'antd';
import { FlagOutlined,BankFilled  } from '@ant-design/icons';
import AccordionCountries from '../Accordion/AccordionCountries';
import AccordionCountriesWithCities from '../Accordion/AccordionCountriesWithCities';
function Cards() {
    const { TabPane } = Tabs;
  return (
    <div className="site-card-wrapper">
  <Tabs defaultActiveKey="1">
    <TabPane
      tab={
        <span>
          <FlagOutlined />
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
          <BankFilled />
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