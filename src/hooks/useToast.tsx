import * as React from "react";
import { Context } from "../contexts/toastContext";

export default function useToast() {
  const context = React.useContext(Context);

  if (context === null) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
