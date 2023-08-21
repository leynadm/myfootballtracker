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
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar
} from "recharts";
  
  export default function ReAttributesHexChart() {

    const data = [
        {
          attribute: 'SPD',
          Score: 53,
          fullMark: 100,
        },
        {
          attribute: 'SHO',
          Score: 42,
          fullMark: 100,
        },
        {
          attribute: 'PAS',
          Score: 88,
          fullMark: 100,
        },
        {
          attribute: 'DRI',
          Score: 91,
          fullMark: 100,
        },
        {
          attribute: 'DEF',
          Score: 50,
          fullMark: 100,
        },
        {
          attribute: 'PHY',
          Score: 90,
          fullMark: 100,
        },
      ];

    return (

      <ResponsiveContainer height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="attribute" fontSize="small" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="Score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>

    );
  }