// import React, { useState } from 'react';
import React, {useEffect, useState} from 'react';
//import { Button } from '@material-ui/core';
// import helpers from '../../helpers';

const FamilyList = props => {
  const [familiesData, setFamiliesData] = useState(null);

  function revertStates() {
    setFamiliesData(null);
    setGState({ name: null, slug: null })
  }

  const { gState } = props;
  const { setGState } = props;
  const { setFamily } = props;
  const { setPlant } = props;
  const { setPlantDetails } = props;

  // families receives object
  // first k-v pair 
  // have to get the slug and pass back to backend with the family name
  // similalry with plants, will receive slug and family name
  useEffect(
    () => {
      if (gState.name === null) return;
      
      // console.log('fetching family list', gState.name);
      fetch(`/location/${gState.name}`)
        .then(response => response.json())
        .then(data => {
          // console.log('fetched data:', data);
          setFamiliesData(data.families);
          setGState({name : gState.name, slug : data.slug});
        })
        .catch(() => console.log('oops'))
    },
    [gState.name]
  );

  if (familiesData === null) return (<div></div>)
  else return (
    <div className='popup-box'>
        <div className='box'>
          <span className='close-icon' onClick={() => {revertStates()}}>x</span>
          <h1>See Plants In {gState.name}:</h1>
            <ul id="familyList">
              <div className='familyList-dropdown'>
                <button className='familyList-dropbtn'>See Family List:</button>
                <div className='dropdown-content'>
                  {familiesData.map((family, index) => {
                    // console.log(family);
                    
                    return (
                      <li key={index}>
                        <button
                          className = "list-buttons"
                          // color = "#5dbb63"
                          onClick={
                            () => {
                              setFamily(family);
                              setPlant(null);
                              setPlantDetails(null);
                            }
                          }
                        >
                          {family}
                        </button>
                      </li>
                    )          
                  })}
              </div>
              </div>
            </ul>
          </div>
        </div>
  );
}

export default FamilyList;