import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'


  export default function ReStackedAreaChart({ data,firstKPI,secondKPI,thirdKPI }) {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
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
          <Area type="monotone" dataKey={firstKPI} stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey={secondKPI} stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey={thirdKPI} stackId="1" stroke="#FF0000" fill="#FF0000" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }