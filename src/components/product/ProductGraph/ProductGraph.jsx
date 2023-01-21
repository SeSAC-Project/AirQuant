import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 2004,
    천식: 450,
    알레르기비염: 700,
    아토피피부염: 250,
  },
  {
    name: 2006,
    천식: 500,
    알레르기비염: 900,
    아토피피부염: 250,
  },
  {
    name: 2008,
    천식: 460,
    알레르기비염: 950,
    아토피피부염: 250,
  },
  {
    name: 2010,
    천식: 420,
    알레르기비염: 1000,
    아토피피부염: 250,
  },
  {
    name: 2012,
    천식: 400,
    알레르기비염: 1200,
    아토피피부염: 250,
  },
  {
    name: 2016,
    천식: 350,
    알레르기비염: 1300,
    아토피피부염: 250,
  },
  {
    name: 2018,
    천식: 300,
    알레르기비염: 1500,
    아토피피부염: 200,
  },
];

export default class ProductGraph extends PureComponent {
  render() {
    return (
      <div className="ProductGraph__hihi">
        <div className="ProductGraph__hihicontainer">
          <ResponsiveContainer width="95%">
            <LineChart
              // width={400}
              // height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="알레르기비염" stroke="#1b76ff" />
              <Line type="monotone" dataKey="천식" stroke="#fb2576" />
              <Line type="monotone" dataKey="아토피피부염" stroke="#3ad900" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
