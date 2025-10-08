import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import {
  formatCurrencyDisplay,
  parseCurrency,
  formatAsYouType,
} from "../utils/currency";

const PaymentMethodFields = ({ control, errors, paymentMethod }) => {
  const [phaseDisplayValue, setPhaseDisplayValue] = useState("");

  if (paymentMethod === "À vista") {
    return (
      <Controller
        name="paymentDiscount"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Desconto à Vista (%)"
            type="number"
            fullWidth
            error={!!errors.paymentDiscount}
            helperText={
              errors.paymentDiscount?.message ||
              "Desconto aplicado no pagamento à vista"
            }
            inputProps={{ min: 0, max: 50, step: 0.1 }}
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
    );
  }

  if (paymentMethod === "Parcelado") {
    return (
      <Controller
        name="paymentInstallments"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Número de Parcelas"
            type="number"
            fullWidth
            error={!!errors.paymentInstallments}
            helperText={
              errors.paymentInstallments?.message ||
              "Número de parcelas para pagamento"
            }
            inputProps={{ min: 2, max: 12 }}
            InputProps={{
              endAdornment: <Typography variant="body2">x</Typography>,
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
    );
  }

  if (paymentMethod === "Por etapas") {
    return (
      <Controller
        name="phaseValue"
        control={control}
        render={({ field }) => (
          <TextField
            label="Valor por Fase"
            fullWidth
            error={!!errors.phaseValue}
            helperText={
              errors.phaseValue?.message ||
              "Digite o valor em reais (ex: 1500 ou 1500,50)"
            }
            required
            value={phaseDisplayValue || "R$ "}
            onChange={(e) => {
              const inputValue = e.target.value;
              const formatted = formatAsYouType(inputValue);
              setPhaseDisplayValue(formatted);

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
    );
  }

  return null;
};

export default PaymentMethodFields;
