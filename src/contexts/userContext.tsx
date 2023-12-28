import * as React from "react";
import config from "../config";
import tokenService from "../services/token-service";

export interface User {
  email: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  sub: string;
}

interface UserContext {
  googleJwt: string | null;
  user: User | null;
  setUser: (user: User, googleJwt: string) => void;
  signOut: () => void;
}

type Action = { type: "setUser"; payload: { user: User; googleJwt: string } } | { type: "signOut" };

const reducer = (
  state: { user: User | null; googleJwt: string | null },
  action: Action,
): { user: User | null; googleJwt: string | null } => {
  switch (action.type) {
    case "setUser":
      return action.payload;
    case "signOut":
      return { user: null, googleJwt: null };
    default:
      return state;
  }
};

export const Context = React.createContext<UserContext | null>(null);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, { user: null, googleJwt: null });

  React.useEffect(() => {
    const user = tokenService.getToken<User>(config.TOKEN_KEY);
    const googleToken = tokenService.getToken<string>(config.GOOGLE_TOKEN_KEY);
    if (user && googleToken) {
      dispatch({ type: "setUser", payload: { user, googleJwt: googleToken } });
    }
  }, []);

  const setUser = React.useCallback((user: User, googleJwt: string) => {
    tokenService.saveToken(config.TOKEN_KEY, user);
    tokenService.saveToken(config.GOOGLE_TOKEN_KEY, googleJwt);
    dispatch({ type: "setUser", payload: { user, googleJwt } });
  }, []);

  const signOut = React.useCallback(() => {
    tokenService.clearToken(config.TOKEN_KEY);
    tokenService.clearToken(config.GOOGLE_TOKEN_KEY);
    dispatch({ type: "signOut" });
  }, []);

  return (
    <Context.Provider value={{ googleJwt: state.googleJwt, user: state.user, setUser, signOut }}>
      {children}
    </Context.Provider>
  );
}
