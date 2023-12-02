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

export const Context = React.createContext<UserContext | null>(null);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);

  const signOut = () => {
    setUser(null);
  };

  return <Context.Provider value={{ user, setUser, signOut }}>{children}</Context.Provider>;
}
