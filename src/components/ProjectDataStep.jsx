import React, { useState } from "react";
import {
  Box,
  TextField,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { Controller } from "react-hook-form";
import {
  formatCurrencyDisplay,
  parseCurrency,
  formatAsYouType,
} from "../utils/currency";
import PaymentMethodFields from "./PaymentMethodFields";

dayjs.locale("pt-br");

const ProjectDataStep = ({ control, errors, watch }) => {
  const [displayValue, setDisplayValue] = useState("");
  const paymentMethod = watch("paymentMethod");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
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
            💼 Dados do Projeto
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
          >
            Informe os detalhes do projeto e valores
          </Typography>
        </Box>

        {/* Form */}
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: 800 },
            mx: "auto",
            px: { xs: 1, sm: 0 },
          }}
        >
          <Grid container spacing={{ xs: 2, sm: 4 }}>
            {/* Descrição do Projeto */}
            <Grid size={{ xs: 12 }}>
              <Controller
                name="projectDescription"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Descrição do Projeto"
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.projectDescription}
                    helperText={errors.projectDescription?.message}
                    required
                    placeholder="Descreva os serviços que serão prestados: criação de site, e-commerce, sistema web, landing page, integrações, etc."
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

            {/* Prazo */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="projectDeadline"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Prazo (dias úteis)"
                    type="number"
                    fullWidth
                    error={!!errors.projectDeadline}
                    helperText={errors.projectDeadline?.message}
                    required
                    inputProps={{ min: 1, max: 365 }}
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

            {/* Valor */}
            {paymentMethod !== "Por etapas" && (
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="projectValue"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Valor Total"
                      fullWidth
                      error={!!errors.projectValue}
                      helperText={
                        errors.projectValue?.message ||
                        "Digite o valor em reais (ex: 1500 ou 1500,50)"
                      }
                      required
                      value={displayValue || "R$ "}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const formatted = formatAsYouType(inputValue);
                        setDisplayValue(formatted);

                        // Converte para número (remove formatação)
                        const numericValue =
                          parseFloat(
                            formatted
                              .replace(/[^\d,.]/g, "")
                              .replace(/\./g, "")
                              .replace(",", ".")
                          ) || 0;
                        field.onChange(numericValue);
                      }}
                      placeholder="Digite o valor..."
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
            )}

            {/* Forma de Pagamento */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="paymentMethod"
                control={control}
                render={({ field }) => (
                  <FormControl
                    fullWidth
                    error={!!errors.paymentMethod}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  >
                    <InputLabel>Forma de Pagamento</InputLabel>
                    <Select
                      {...field}
                      label="Forma de Pagamento"
                      value={field.value || ""}
                    >
                      <MenuItem value="À vista">À vista</MenuItem>
                      <MenuItem value="Parcelado">Parcelado</MenuItem>
                      <MenuItem value="Por etapas">
                        Por etapas do projeto
                      </MenuItem>
                    </Select>
                    {errors.paymentMethod && (
                      <Typography
                        variant="caption"
                        color="error"
                        sx={{ mt: 0.5, ml: 1.5 }}
                      >
                        {errors.paymentMethod.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Grid>

            {/* Campo Dinâmico baseado na forma de pagamento */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="paymentMethod"
                control={control}
                render={({ field }) => (
                  <PaymentMethodFields
                    control={control}
                    errors={errors}
                    paymentMethod={field.value}
                  />
                )}
              />
            </Grid>

            {/* Data */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="contractDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    label="Data de Assinatura"
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(newValue) => {
                      if (newValue) {
                        // Corrige o problema do fuso horário
                        const dateString = newValue.format("YYYY-MM-DD");
                        field.onChange(dateString);
                      } else {
                        field.onChange("");
                      }
                    }}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!errors.contractDate,
                        helperText: errors.contractDate?.message,
                        required: true,
                        variant: "outlined",
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        },
                      },
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default ProjectDataStep;
