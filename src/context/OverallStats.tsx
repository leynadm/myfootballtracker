import {
  useState,
  createContext,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import OverallStatsDataInterface from "../utils/interfaces/overallStatsDataInterface";
import ChartDataInterface from "../utils/interfaces/chartDataInterface";
import { AuthContext } from "./Auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import {
  dummyOverallStats,
  dummyOverallCharts,
} from "../utils/dummyContextVariables";
// Define the type for the context value
import { LeaderboardUserData } from "../utils/interfaces/LeaderboardUserData";
interface OverallStatsContextValue {
  overallStatsData: OverallStatsDataInterface;
  overallChartsData: ChartDataInterface;
  setOverallStatsData: React.Dispatch<
    React.SetStateAction<OverallStatsDataInterface>
  >;
  setOverallChartsData: React.Dispatch<
    React.SetStateAction<ChartDataInterface>
  >;
  userIndividualFollowingData:LeaderboardUserData;
  setUserIndividualFollowingData: React.Dispatch<
  React.SetStateAction<LeaderboardUserData>
>;

  userIndividualFollowers:string[];
  setUserIndividualFollowers:React.Dispatch<
  React.SetStateAction<string[]>
>;
  dataLoadedTrigger: boolean;
}

// Create the context
export const OverallStatsContext = createContext<
  OverallStatsContextValue | undefined
>(undefined);

interface OverallStatsProviderProps {
  children: ReactNode;
}

export const OverallStatsProvider = ({
  children,
}: OverallStatsProviderProps) => {
  const { currentUser } = useContext(AuthContext);

  const [overallStatsData, setOverallStatsData] =
    useState<OverallStatsDataInterface>({});
  const [overallChartsData, setOverallChartsData] =
    useState<ChartDataInterface>({});

    const [userIndividualFollowingData, setUserIndividualFollowingData] =
    useState<LeaderboardUserData[]>([]);
  const [userIndividualFollowers, setUserIndividualFollowers] = useState([]);
  
  const [dataLoadedTrigger, setDataLoadedTrigger] = useState(false);
  useEffect(() => {
    fetchData();
    console.log("feting data for overallstats");
  }, []);

  async function fetchData() {
    try {
      const overallStatsDocRef = doc(
        db,
        "users",
        currentUser.uid,
        "stats/overall-stats"
      );

      const chartStatsDocRef = doc(
        db,
        "users",
        currentUser.uid,
        "stats/chart-stats"
      );
      const chartDocSnap = await getDoc(chartStatsDocRef);
      const overallStatsDocSnap = await getDoc(overallStatsDocRef);

      if (chartDocSnap.exists() && overallStatsDocSnap.exists()) {
        const userChartData = chartDocSnap.data() as ChartDataInterface;
        const userOverallStatsData =
          overallStatsDocSnap.data() as OverallStatsDataInterface;
        setOverallChartsData(userChartData);
        setOverallStatsData(userOverallStatsData);
      } else {
        setOverallChartsData(dummyOverallCharts);
        setOverallStatsData(dummyOverallStats);
      }
      setDataLoadedTrigger(true);
    } catch (error) {
      console.error("Error while fetching user data:", error);
    }
  }

  const contextValue: OverallStatsContextValue = {
    overallStatsData,
    setOverallStatsData,
    overallChartsData,
    setOverallChartsData,
    dataLoadedTrigger,    
    userIndividualFollowingData,
    setUserIndividualFollowingData,
    userIndividualFollowers,
    setUserIndividualFollowers

  };

  return (
    <OverallStatsContext.Provider value={contextValue}>
      {children}
    </OverallStatsContext.Provider>
  );
};
