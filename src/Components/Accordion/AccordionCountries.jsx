import React from 'react';
import { Collapse } from 'antd';
import './AccordionCountries.css'
function AccordionCountries() {
  const { Panel } = Collapse;
    let countryArray = [
        { coyntryName: "afghanistan", citites: ["kabul", "gaaaf", "dan", "dafcc"] },
        { coyntryName: "land Island", citites: ["pabul", "apa", "bdab", "ccat"] },
        { coyntryName: "Albania", citites: ["falco", "daa", "sadbb", "facc"] },
        { coyntryName: "Algeria", citites: ["gdas", "aads", "dsa", "cddc"] },
        { coyntryName: "Samoa", citites: ["fabs", "asdsaa", "asdbb", "cac"] },
        { coyntryName: "AndorrA", citites: ["pakabul", "faaa", "fabb", "dascc"] },
        { coyntryName: "Angola", citites: ["faskabul", "ada", "abb", "cdac"] },
        { coyntryName: "Anguilla", citites: ["kdaabul", "adsaa", "fgbb", "cat"] },
        { coyntryName: "Antarctica", citites: ["deli", "mumdbai", "udsap"] },
        { coyntryName: "Antigua", citites: ["gat", "gert", "udsap"] },
        { coyntryName: "Argentina", citites: ["mehli", "numbai", "pup"] },
        { coyntryName: "Armenia", citites: ["lehli", "lumbai", "rup"] },
        { coyntryName: "Aruba", citites: ["sehli", "mumbai", "uep"] },
        { coyntryName: "Australia", citites: ["pehli"] },
        { coyntryName: "Austria", citites: [ "sumbai"] },
        { coyntryName: "Azerbaijan", citites: [ "dumbai"] },
         { coyntryName: "Bahamas", citites: [ "gumbai"] },
          { coyntryName: "Bangladesh", citites: [ "humbai"] },
          { coyntryName: "Czech", citites: [ "lumbai"] },
          { coyntryName: "Dominican", citites: [ "kumbai"] },
          { coyntryName: "Ecuador", citites: [ "oumbai"] },
          { coyntryName: "Egypt", citites: [ "lumbai"] },
          { coyntryName: "France", citites: [ "tumbai"] },
          { coyntryName: "Gambia", citites: [ "eumbai"] },
          { coyntryName: "Hungary", citites: [ "rumbai"] },
          { coyntryName: "Iceland", citites: [ "gumbai"] },
          { coyntryName: "India", citites: [ "lumbai", "up"] },
          { coyntryName: "Jordan", citites: [ "saumbai", "up"] },
          { coyntryName: "Kiribati", citites: [ "saumbai", "up"] },
          { coyntryName: "Latvia", citites: [ "msaumbai", "up"] },
          { coyntryName: "Malawi", citites: [ "mudmbai", "up"] },
          { coyntryName: "Nauru", citites: [ "mumbddai", "fup"] },
            { coyntryName: "Oman", citites: [ "mumbadai", "fup"] },  { coyntryName: "Malawi", citites: [ "kokla", "saup"] },
            { coyntryName: "Philippines", citites: [ "emumbai", "sup"] },
            { coyntryName: "Qatar", citites: [ "eamumbai", "rup"] },
            { coyntryName: "Reunion", citites: [ "samumbai", "gup"] },
            { coyntryName: "Saint", citites: [ "mudsmbai", "fup"] },
            { coyntryName: "Tunisia", citites: [ "mudsmbai", "fup"] },
            { coyntryName: "Uzbekistan", citites: [ "sdasmumbai", "dup"] },
            { coyntryName: "Venezuela", citites: [ "pomumbai", "vup"] },
            { coyntryName: "Wallis", citites: [ "medamumbai", "cup"] },
            { coyntryName: "Yemen", citites: [ "dsmumbai", "bup"] },
            { coyntryName: "Zimbabwe", citites: [ "kamumbai", "aup"] },

      ];
      console.log("countryArray", countryArray);
    
      function myfunction(city){
        console.log("city: ",city)
      }
  return (
    <>
    {countryArray?.map((c) => (
        // <Collapse defaultActiveKey={["1"]}>
        //   <Panel header={c?.coyntryName} key="2">
        //     {c?.citites?.map((city) => (
        //       <p className="block" onClick={()=>myfunction(city) }>{city}</p>
        //     ))}
        //   </Panel>
        // </Collapse>
        <div className='countries'>
          <h1>{c.coyntryName}</h1>
          <div className='button-wrap'>
                <button>Download tcp</button>
                <button>Download udp</button>
              </div>
        </div>
      ))}
      </>
  )
}

export default AccordionCountries