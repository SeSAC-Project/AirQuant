import React from 'react';
import {
  CompanyIcon,
  CompanyLED,
  CompanyAlgorithm,
  CompanyTech,
  CompanyIntro,
  TopButton,
} from 'components';

const Company = () => {
  return (
    <div className="Company">
      <TopButton />
      <CompanyIntro />
      <CompanyTech />
      <CompanyIcon />
      <CompanyAlgorithm />
      <CompanyLED />
    </div>
  );
};

export default Company;
