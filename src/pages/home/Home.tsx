import Navbar from "../../components/Navbar"
import NewMatch from "../game/NewMatch"
import Overview from "../game/Overview"
import { Routes, Route } from "react-router-dom";
export default function Home() {
    return (
        <>
        <Navbar/>
        <NewMatch/>

        <Routes>
              <Route
                path="new-game/*"
                index
                element={
                  <NewMatch

                  />
                }
              />

            </Routes>

        </>
    )
  }