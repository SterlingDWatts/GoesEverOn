import * as React from "react";

export interface User {
  email: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
}

interface UserContext {
  user: User | null;
  setUser: (user: User) => void;
  signOut: () => void;
}

type Action = { type: "setUser"; payload: User } | { type: "signOut" };

const reducer = (state: User | null, action: Action): User | null => {
  switch (action.type) {
    case "setUser":
      return action.payload;
    case "signOut":
      return null;
    default:
      return state;
  }
};

export const Context = React.createContext<UserContext | null>(null);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [user, dispatch] = React.useReducer(reducer, null);

  React.useEffect(() => {
    const user = window.sessionStorage.getItem("geouser");
    if (user) {
      dispatch({ type: "setUser", payload: JSON.parse(user) });
    }
  }, []);

  const setUser = React.useCallback((user: User) => {
    window.sessionStorage.setItem("geouser", JSON.stringify(user));
    dispatch({ type: "setUser", payload: user });
  }, []);

  const signOut = React.useCallback(() => {
    window.sessionStorage.removeItem("geouser");
    dispatch({ type: "signOut" });
  }, []);

  return <Context.Provider value={{ user, setUser, signOut }}>{children}</Context.Provider>;
}
