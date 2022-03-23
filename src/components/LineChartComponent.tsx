import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import TimelineRecord from '../dataTypes/TimelineRecord';
import CardsServices  from '../services/CardsServices';

interface Data {
  year: number;
  id: number;
}
function createData(year: number, id: number) {
  return {year, id};
}
  
const LineChartComponent = ({dataArray} : {dataArray: TimelineRecord[]}) => {
  const data = dataArray.map(d => createData(d.year, d.id));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" >
          <p className="label">{`${label} : ${CardsServices(payload[0].value)}`}</p>
        </div>
      );
    } else return null;
  } 

    return (
      <LineChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" interval="preserveStartEnd" angle={30} dx={20} />
          <YAxis dataKey="id" />
          <Tooltip content={<CustomTooltip />}/>
          <Line type="monotone" dataKey="id" stroke="#ab47bc" activeDot={{ r: 8 }} />
     </LineChart>
    );
}
export default LineChartComponent;
