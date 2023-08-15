import {
    BarChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart
} from "recharts";
  
  export default function ReRadarChart({ data }) {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="matchDate" fontSize="0.75rem" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="assistsProvided" stroke="#8884d8" strokeDasharray="3 4 5 2" />
          <Line type="monotone" dataKey="goalsScored" fill="#82ca9d" stroke="#82ca9d" activeDot={{ r: 8 }}  />
        </LineChart>
      </ResponsiveContainer>
    );
  }