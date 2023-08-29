import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/Auth";
import Login from "./pages/authentication/Login";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import AuthRoute from "./context/AuthRoute";
import SignUp from "./pages/authentication/SignUp";
import LandingPage from "./pages/home/LandingPage";
import Home from "./pages/home/Home";
import NotFound from "./pages/others/NotFound";
import "./App.css";

function App() {
  const theme = extendTheme({
    fonts: {
      html: `'Outfit', sans-serif`,
      body: `'Outfit', sans-serif`,
      input: `'Outfit', sans-serif`,
    },
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Router>
            <Routes>
              {/* If the user is signed in and tries to access signup, reroute him to home */}
              <Route element={<AuthRoute type="signup" />}>
                <Route element={<SignUp />} path="/signup" />
              </Route>

              {/* If the user isn't signed him, reroute him to login */}
              <Route element={<AuthRoute type="login" />}>
                <Route element={<Login />} path="/login" />
              </Route>

              <Route element={<ForgotPassword />} path="/forgot-password" />

              {/* If the user is signed in and tries to access login, reroute him to home */}
              <Route element={<AuthRoute type="home" />}>
                <Route path="/home/*" element={<Home />} />
              </Route>

              <Route element={<AuthRoute type="/" />}>
                <Route index path="/" element={<LandingPage />} />
              </Route>
              
              <Route path="*" element={<NotFound/>}/>
            </Routes>


          </Router>
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
