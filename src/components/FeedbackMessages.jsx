import React from "react";
import { Alert, Box } from "@mui/material";

const FeedbackMessages = ({ error, success }) => {
  if (!error && !success) return null;

  return (
    <Box sx={{ mb: 3 }}>
      {error && (
        <Alert
          severity="error"
          sx={{
            borderRadius: 2,
            "& .MuiAlert-message": {
              fontSize: { xs: "0.875rem", sm: "0.95rem" },
            },
          }}
        >
          {error}
        </Alert>
      )}

      {success && (
        <Alert
          severity="success"
          sx={{
            borderRadius: 2,
            "& .MuiAlert-message": {
              fontSize: { xs: "0.875rem", sm: "0.95rem" },
            },
          }}
        >
          {success}
        </Alert>
      )}
    </Box>
  );
};

export default FeedbackMessages;
