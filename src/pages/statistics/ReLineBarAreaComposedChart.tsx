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
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="goalsContributions" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="goalsScored" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="assistsProvided" stroke="#ff7300" />
      
    </ComposedChart>
  </ResponsiveContainer>
  );
}
