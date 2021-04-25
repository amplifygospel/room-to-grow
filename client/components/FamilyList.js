// import React, { useState } from 'react';
import React from 'react';

const FamilyList = props => {
  // const { selectedGeoState } = props;
  const { familiesData } = props;
  const { setSelectedFamily } = props;
  const { setSelectedPlant } = props;

  // this is wrong- have to render nothing at first
  // and then only update once the state is selected
  // and re-render every time the family changes
  // is this an effect????
  return (
    <ul>
      {familiesData.map(family => {
        <li>
          <Button onClick={() => {
            setSelectedFamily(family.name)
            setSelectedPlant(null);
          }}>
            familiesData.name
          </Button>
        </li>
      })}
    </ul>
  );
}

export default FamilyList;