import Navbar from "../../components/Navbar";
import NewMatch from "../game/NewMatch";
import Social from "../social/Social";
import Overview from "../game/Overview";
import { Routes, Route } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Navbar />

      <Routes>

      <Route path="game/*" index element={<Overview />} />

        <Route path="game/new-game" index element={<NewMatch />} />

        <Route path="social/*" index element={<Social />} />
      </Routes>
    </>
  );
}
