import React from "react";
import { Stepper, Step, StepLabel, Box, Typography } from "@mui/material";

const steps = [
  "Dados do Cliente",
  "Dados do Projeto",
  "Personalização",
  "Preview",
];

const ContractStepper = ({ activeStep }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              sx={{
                "& .MuiStepLabel-label": {
                  fontSize: { xs: "0.75rem", sm: "0.9rem" },
                  fontWeight: activeStep === index ? 600 : 400,
                },
                "& .MuiStepLabel-labelContainer": {
                  display: { xs: "none", sm: "block" },
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Passo {activeStep + 1} de {steps.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContractStepper;
