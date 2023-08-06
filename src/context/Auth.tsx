import { useEffect, useState, createContext, ReactNode } from "react";
import { auth } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import User from "../utils/interfaces/User";

// Create the context to hold the data and share it among all components
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<any>({
  currentUser: null,
  userCredential: null,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Set the current user in case the user is already logged in
  const [currentUser, setCurrentUser] = useState(() => auth.currentUser);
  const [currentUserData, setCurrentUserData] = useState<User | undefined>(
    undefined
  );
  const [loginFetchTrigger, setLoginFetchTrigger] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(async (user) => {
      setCurrentUser(user);

      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data() as User;
          setCurrentUserData(userData);
        }

        setLoginFetchTrigger(true);
      }
    });

    return () => {
      unsubscribe(); // Add a return function to unsubscribe the listener
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentUser]);

  async function fetchData() {
    if (currentUser === null) {
      return;
    }

    try {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data() as User;
        setCurrentUserData(userData);
        return userData;
      }
    } catch (error) {
      console.error("Error while fetching user data:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        currentUserData,
        setCurrentUserData,
        loginFetchTrigger,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
