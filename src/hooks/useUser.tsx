import * as React from "react";
import { Context } from "../contexts/userContext";

export default function useUser() {
  const context = React.useContext(Context);

  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
