import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utills";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsbscribe = onAuthStateChangeListener(async (user) => {
      console.log(user);
      if (user) {
        await createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });

    return unsbscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
