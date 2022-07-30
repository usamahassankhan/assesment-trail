import React from 'react';
import { Collapse } from 'antd';
import './AccordionCountries.css'
import flag from '../../../src/assets/united.png';
import {countryData} from './../../../src/data'

function AccordionCountriesWithCities() {
  const { Panel } = Collapse;
   function btnFunction(download,city){
    alert("do you want to download "+ download + " information from " + city)
   }
  return (
    <div className='accordionCountries'>
    {countryData?.map((c) => (
        <Collapse defaultActiveKey={["1"]}>
          <Panel header={c?.countryName} key="2">
            {c?.citites?.map((city) => (
              <div className='cities-wrap'>
                <div className='nameWithImg'>
                <img src={flag} alt="flag" className="flag"/>
              <p className="block">{city}</p>
              </div>
              <div className='button-wrap-countries-cities button-wrap'>
                <button onClick={()=>btnFunction("download tcp",city)}>Download tcp</button>
                <button onClick={()=>btnFunction("download udp",city)}>Download udp</button>
              </div>
              </div>
            ))}
          </Panel>
        </Collapse>
      ))}
      </div>
  )
}

export default AccordionCountriesWithCities