import React from 'react';
import './AccordionCountries.css';
import {countryData} from './../../../src/data'
function AccordionCountries() {
  function btnFunction(download,city){
    alert("do you want to download "+ download + " information from " + city)
   }
  return (
    <div className='accordionCountries'>
    {countryData?.map((c) => (
        <div className='countries'>
          <h1>{c.countryName}</h1>
          <div className='button-wrap'>
          <button onClick={()=>btnFunction("download tcp",c.countryName)}>Download tcp</button>
                <button onClick={()=>btnFunction("download udp",c.countryName)}>Download udp</button>
              </div>
        </div>
      ))}
      </div>
  )
}

export default AccordionCountries