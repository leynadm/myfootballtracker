import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar
} from "recharts";
  
  export default function ReAttributesHexChart({data}) {


    return (

      <ResponsiveContainer height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid  />
          <PolarAngleAxis dataKey="attribute" fontSize="small" />
          <PolarRadiusAxis domain={[0, 100]}   />
          <Radar name="Mike" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}  />
        </RadarChart>
      </ResponsiveContainer>

    );
  }