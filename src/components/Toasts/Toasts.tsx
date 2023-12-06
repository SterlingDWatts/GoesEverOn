import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import useToast from "../../hooks/useToast";

export default function Toasts() {
  const theme = useTheme();
  const { toasts } = useToast();

  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100 }}>
      <Stack spacing={2} sx={{ maxWidth: theme.breakpoints.values.sm, margin: "0px auto" }}>
        {toasts.map((toast) => (
          <Alert key={toast.id} severity={toast.severity} variant="filled">
            {toast.message}
          </Alert>
        ))}
      </Stack>
    </Box>
  );
}
