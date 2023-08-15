import { useLocation } from "react-router";
import UsersSearchResults from "./UsersSearchResults";

function SocialSearchResults() {
  const location = useLocation();
  const usersFound = location.state?.usersFound || [];

  return <UsersSearchResults usersFound={usersFound} />;
}

export default SocialSearchResults;
