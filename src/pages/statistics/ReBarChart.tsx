import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,
    Label
  } from "recharts";
  
  export default function ReBarChart({ data,firstKPI,secondKPI }) {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="matchDate" fontSize="0.75rem" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={firstKPI} stackId="b" fill="#8884d8">
            
          </Bar>
          <Bar dataKey={secondKPI} stackId="b" fill="#82ca9d">

          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }