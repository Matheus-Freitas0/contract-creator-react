import React from "react";
import { Box, Typography } from "@mui/material";

const LogoHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: { xs: 2, sm: 3 },
        p: { xs: 2, sm: 3 },
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderRadius: { xs: 2, sm: 3 },
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        flexDirection: { xs: "column", sm: "row" },
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <Box
        component="img"
        src="/logo.png"
        alt="DevShop Logo"
        sx={{
          height: { xs: 80, sm: 150 },
          width: "auto",
          mr: { xs: 0, sm: 3 },
          mb: { xs: 2, sm: 0 },
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
        }}
      />
      <Box>
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
            color: "#1e40af",
            mb: 1,
          }}
        >
          DevShop
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          fontWeight="500"
          sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
        >
          Tecnologia e Comércio LTDA
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 0.5, fontSize: { xs: "0.7rem", sm: "0.875rem" } }}
        >
          Gerador de Contratos Inteligente
        </Typography>
      </Box>
    </Box>
  );
};

export default LogoHeader;
