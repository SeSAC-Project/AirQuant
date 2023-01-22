// TechExplanation
// TechMiddleTitle 삭제 예정
import {
  TechCardBook,
  TechConTitle,
  TechCustomers,
  TechMain,
  TechMeasurementTable,
  TechPatent,
  TechBackGround,
  TopButton,
} from 'components';
import React from 'react';

const Tech = () => {
  return (
    <div>
      <TopButton />
      <TechMain />
      <TechMeasurementTable />
      <TechCardBook />
      <TechBackGround />
      <TechConTitle />
      <TechCustomers />
      <TechPatent />
    </div>
  );
};

export default Tech;
