import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ReLineBarAreaComposedChart({ data }) {
  return (
    <ResponsiveContainer height={300}>
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 0,
        bottom: 0, 
        left: 0,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="matchDate" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="goalsScored" barSize={8} fill="#413ea0" />
      <Line type="monotone" dataKey="assistsProvided" stroke="#5F9EA0" strokeWidth={3} />
      
    </ComposedChart>
  </ResponsiveContainer>
  );
}
