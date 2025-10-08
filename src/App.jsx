import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./styles/theme";
import ContractForm from "./components/ContractForm";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContractForm />
    </ThemeProvider>
  );
}

export default App;
