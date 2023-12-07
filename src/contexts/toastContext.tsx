import * as React from "react";

interface Toast {
  id: number;
  message: string;
  severity: "info" | "success" | "warning" | "error";
}

interface ToastContext {
  toasts: Toast[];
  setToast: (toast: Omit<Toast, "id">) => void;
}

type Action = { type: "set_toast"; payload: Toast } | { type: "remove_toast"; payload: number };

const reducer = (state: Toast[], action: Action): Toast[] => {
  switch (action.type) {
    case "set_toast":
      return [...state, action.payload];
    case "remove_toast":
      return state.filter((toast) => toast.id !== action.payload);
    default:
      return state;
  }
};

export const Context = React.createContext<ToastContext | null>(null);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [toasts, dispatch] = React.useReducer(reducer, []);

  const max = (toasts: Toast[]) => {
    return toasts.reduce((acc, curr) => (acc > curr.id ? acc : curr.id), 0);
  };

  const setToast = (toast: Omit<Toast, "id">) => {
    const id = max(toasts) + 1;
    dispatch({ type: "set_toast", payload: { ...toast, id } });
  };

  const removeToast = (id: number) => {
    dispatch({ type: "remove_toast", payload: id });
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (toasts.length > 0) {
        removeToast(toasts[0].id);
      }
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [toasts]);

  return <Context.Provider value={{ toasts, setToast }}>{children}</Context.Provider>;
}
