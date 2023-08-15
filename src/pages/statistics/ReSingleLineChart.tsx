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
  
interface Props{
  data?:any;
  firstKPI:string
}

  export default function ReSingleLineChart({ data,firstKPI }) {
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
          <YAxis type="number" domain={[0, 10]}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={firstKPI} fill="#82ca9d" stroke="orange" activeDot={{ r: 8 }} strokeWidth={3}/>
          <Label
          value={`{${firstKPI}}`} // Display the actual value on top of the line
          position="top"
          style={{ fill: "black" }}
        />

         
        </LineChart>
      </ResponsiveContainer>
    );
  }