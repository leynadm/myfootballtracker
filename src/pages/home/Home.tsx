import Navbar from "../../components/Navbar";
import Social from "../social/Social";
import Overview from "../game/Overview";
import Statistics from "../statistics/Statistics";
import { Routes, Route } from "react-router-dom";
import { OverallStatsProvider } from "../../context/OverallStats";
export default function Home() {
  return (
    <>
      <OverallStatsProvider>
      <Navbar />
      <Routes>
        <Route path="game/*" index element={<Overview />} />
        <Route path="social/*" index element={<Social />} />
        <Route path="statistics/*" index element={<Statistics />} />
      </Routes>
      </OverallStatsProvider>
    </>
  );
}
