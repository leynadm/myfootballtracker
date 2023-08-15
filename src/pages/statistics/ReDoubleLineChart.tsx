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
    LineChart,
    Label
} from "recharts";
  
  export default function ReDoubleLineChart({ data }) {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="matchDate" fontSize="0.75rem" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="assistsProvided" stroke="#5F9EA0" strokeWidth={3}/>
          <Line type="monotone" dataKey="goalsScored" fill="#82ca9d" stroke="#0047AB" activeDot={{ r: 8 }} strokeWidth={3} />
          <Label/>
        </LineChart>
      </ResponsiveContainer>
    );
  }