import React from 'react';
import Sdata from './Sdata';
import Cards from './Cards';


const App =() =>(
  <>
  <h1 className="heading_style">List of netflix popular series</h1>
  {Sdata.map((val)=>{
  return(
    <Cards
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
  );
  })}
  </>
);
export default App;