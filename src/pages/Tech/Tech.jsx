import {
  TechCardBook,
  TechConTitle,
  TechCustomers,
  TechExplanation,
  TechMain,
  TechMeasurementTable,
  TechMiddleTitle,
  TechPatent,
} from 'components';
import { TechBackGround } from 'components/tech/TechBackGround';
import React from 'react';

const Tech = () => {
  return (
    <div>
      <TechMain />
      <TechMeasurementTable />
      <TechMiddleTitle />
      <TechCardBook />
      {/* <TechExplanation /> */}
      <TechBackGround />
      <TechConTitle />
      <TechCustomers />
      <TechPatent />
    </div>
  );
};

export default Tech;
