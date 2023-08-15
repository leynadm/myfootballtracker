import {
    BarChart,
    LineChart,
    Label,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from "recharts";
  
  export default function ReSampleChart() {


    const data=[
        {
            Date: '30/01/2023',
            Goals: 1,
            Assists: 2,
            Rating: 9.0,
            
          },
          {
            Date: '07/02/2023',
            Goals: 1,
            Assists: 0,
            Rating: 9.5,
            
          },
          {
            Date: '17/02/2023',
            Goals: 1,
            Assists: 0,
            Rating: 8,
            
          },
          {
            Date: '27/01/2023',
            Goals: 0,
            Assists: 1,
            Rating: 7.5,
           
          },
          {
            Date: '04/03/2023',
            Goals: 2,
            Assists: 2,
            Rating: 9.5,
           
          },
          {
            Date: '15/03/2023',
            Goals: 3,
            Assists: 2,
            Rating: 10,
          },

    ]

    

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 25,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="Date" fontSize="0.75rem" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Goals" stroke="#5F9EA0" strokeWidth={3}/>
          <Line type="monotone" dataKey="Assists" fill="#82ca9d" stroke="#0047AB" activeDot={{ r: 8 }} strokeWidth={3} />
          <Label/>
        </LineChart>
      </ResponsiveContainer>
    );
  }