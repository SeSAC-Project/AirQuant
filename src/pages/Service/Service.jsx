import { Tab, TopButton } from 'components';
import React from 'react';

const Service = ({ index }) => {
  return (
    <div>
      <TopButton />
      <Tab start={index} />
    </div>
  );
};

export default Service;
