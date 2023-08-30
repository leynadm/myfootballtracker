import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "./Auth";

interface AuthRouteProps {
  type: "home" | "login" | "signup" | "/" | "launching";
}

const AuthRoute = ({ type }: AuthRouteProps) => {
  const { currentUser, loginFetchTrigger } = useContext(AuthContext);

  /* 
  if (!loginFetchTrigger) {
    // Render a loading state or a spinner while authentication is resolving
    return <LaunchingApp />;
  } */

  if (type === "login") {
    return currentUser === null ? (<Outlet />) : (<Navigate to={"/home/game/"} />);
  } else if (type === "home") {
    return currentUser !== null ? <Outlet /> : <Navigate to="/login" />;
  } else if (type === "signup") {
    return currentUser === null ? (  <Outlet />) : ( <Navigate to={"/home/game/"} />);
  } else if (type === "/") {
    return currentUser === null ? (<Outlet />) : (<Navigate to={"/home/game/"} />);
  } else {
    throw new Error("Invalid AuthRoute type");
  }
};

export default AuthRoute;