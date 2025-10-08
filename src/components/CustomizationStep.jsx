import React from "react";
import {
  Box,
  TextField,
  Grid,
  Typography,
  FormControlLabel,
  Switch,
  Alert,
} from "@mui/material";
import { Controller } from "react-hook-form";

const CustomizationStep = ({ control, errors }) => {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4 } }}>
        <Typography
          variant="h4"
          gutterBottom
          fontWeight="bold"
          color="primary"
          sx={{ fontSize: { xs: "1.75rem", sm: "2rem" } }}
        >
          ⚙️ Personalização do Contrato
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
        >
          Ajuste as configurações padrão do contrato conforme necessário
        </Typography>
      </Box>

      {/* Alert */}
      <Alert
        severity="info"
        sx={{
          mb: { xs: 3, sm: 4 },
          borderRadius: 2,
          "& .MuiAlert-message": {
            fontSize: { xs: "0.875rem", sm: "0.95rem" },
          },
        }}
      >
        Você pode personalizar os valores padrão do contrato. Se não alterar,
        serão utilizados os valores padrão da DevShop.
      </Alert>

      {/* Form */}
      <Box
        sx={{
          maxWidth: { xs: "100%", sm: 800 },
          mx: "auto",
          px: { xs: 1, sm: 0 },
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 4 }}>
          {/* Multa */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Controller
              name="penaltyPercentage"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Multa por Atraso (%)"
                  type="number"
                  fullWidth
                  error={!!errors.penaltyPercentage}
                  helperText={errors.penaltyPercentage?.message}
                  inputProps={{ min: 0, max: 100 }}
                  InputProps={{
                    endAdornment: <Typography variant="body2">%</Typography>,
                  }}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              )}
            />
          </Grid>

          {/* Juros Diários */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Controller
              name="dailyInterestRate"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Juros por Dia (%)"
                  type="number"
                  fullWidth
                  error={!!errors.dailyInterestRate}
                  helperText={
                    errors.dailyInterestRate?.message ||
                    "Juros aplicados por dia após vencimento"
                  }
                  inputProps={{ min: 0, max: 5, step: 0.1 }}
                  InputProps={{
                    endAdornment: <Typography variant="body2">%</Typography>,
                  }}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              )}
            />
          </Grid>

          {/* Suporte */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Controller
              name="supportMonths"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Meses de Suporte"
                  type="number"
                  fullWidth
                  error={!!errors.supportMonths}
                  helperText={errors.supportMonths?.message}
                  inputProps={{ min: 0, max: 12 }}
                  InputProps={{
                    endAdornment: (
                      <Typography variant="body2">meses</Typography>
                    ),
                  }}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              )}
            />
          </Grid>

          {/* Observações */}
          <Grid size={{ xs: 12 }}>
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="h6"
                gutterBottom
                fontWeight="bold"
                color="primary"
              >
                Observações Adicionais
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Adicione qualquer observação específica que deve constar no
                contrato
              </Typography>

              <Controller
                name="additionalNotes"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Observações"
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Ex: Serviços adicionais não inclusos, idiomas específicos, hospedagem, domínio, etc."
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />
                )}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomizationStep;
