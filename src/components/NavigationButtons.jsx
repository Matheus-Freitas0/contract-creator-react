import React from "react";
import { Box, Button, CircularProgress } from "@mui/material";

const NavigationButtons = ({
  activeStep,
  totalSteps,
  onNext,
  onBack,
  onReset,
  onSubmit,
  isGenerating,
  isValid,
}) => {
  const isLastStep = activeStep === totalSteps - 1;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pt: 3,
        borderTop: "2px solid #f1f5f9",
        mt: 4,
      }}
    >
      <Box>
        {activeStep > 0 && (
          <Button
            onClick={onBack}
            variant="outlined"
            sx={{
              borderRadius: 2,
              px: 3,
              py: 1,
              textTransform: "none",
              fontWeight: 600,
              borderColor: "#cbd5e1",
              color: "#64748b",
              "&:hover": {
                backgroundColor: "#f1f5f9",
                borderColor: "#94a3b8",
              },
            }}
          >
            ← Voltar
          </Button>
        )}
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          onClick={onReset}
          variant="outlined"
          sx={{
            borderRadius: 2,
            px: 3,
            py: 1,
            textTransform: "none",
            fontWeight: 600,
            borderColor: "#cbd5e1",
            color: "#64748b",
            "&:hover": {
              backgroundColor: "#f1f5f9",
              borderColor: "#94a3b8",
            },
          }}
        >
          🔄 Reiniciar
        </Button>

        {isLastStep ? (
          <Button
            onClick={onSubmit}
            disabled={!isValid || isGenerating}
            variant="contained"
            sx={{
              borderRadius: 2,
              px: 4,
              py: 1,
              textTransform: "none",
              fontWeight: 600,
              background: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
              boxShadow: "0 4px 12px rgba(5, 150, 105, 0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #047857 0%, #059669 100%)",
                boxShadow: "0 6px 16px rgba(5, 150, 105, 0.4)",
              },
              "&:disabled": {
                background: "#d1d5db",
                color: "#9ca3af",
              },
            }}
          >
            {isGenerating ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1, color: "white" }} />
                Gerando...
              </>
            ) : (
              "📄 Gerar DOCX"
            )}
          </Button>
        ) : (
          <Button
            onClick={onNext}
            variant="contained"
            sx={{
              borderRadius: 2,
              px: 4,
              py: 1,
              textTransform: "none",
              fontWeight: 600,
              background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
              boxShadow: "0 4px 12px rgba(30, 64, 175, 0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
                boxShadow: "0 6px 16px rgba(30, 64, 175, 0.4)",
              },
            }}
          >
            Próximo →
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default NavigationButtons;
