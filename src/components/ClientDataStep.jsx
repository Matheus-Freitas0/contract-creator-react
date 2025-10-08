import React from "react";
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
import { Controller } from "react-hook-form";
import { formatCNPJ } from "../utils/cnpj";

const ClientDataStep = ({ control, errors }) => {
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
          📋 Dados do Cliente
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
        >
          Preencha as informações da empresa contratante
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
          {/* Nome da Empresa */}
          <Grid size={{ xs: 12 }}>
            <Controller
              name="clientName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nome da Empresa"
                  fullWidth
                  error={!!errors.clientName}
                  helperText={errors.clientName?.message}
                  required
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

          {/* CNPJ */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Controller
              name="clientCNPJ"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="CNPJ"
                  fullWidth
                  error={!!errors.clientCNPJ}
                  helperText={
                    errors.clientCNPJ?.message || "Digite apenas números"
                  }
                  required
                  onChange={(e) => {
                    const formatted = formatCNPJ(e.target.value);
                    field.onChange(formatted);
                  }}
                  placeholder="00.000.000/0000-00"
                  inputProps={{
                    maxLength: 18,
                    pattern: "[0-9]*",
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

          {/* Cargo do Representante */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Controller
              name="clientRepresentativeRole"
              control={control}
              render={({ field }) => (
                <FormControl
                  fullWidth
                  error={!!errors.clientRepresentativeRole}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                >
                  <InputLabel>Cargo do Representante</InputLabel>
                  <Select
                    {...field}
                    label="Cargo do Representante"
                    value={field.value || ""}
                  >
                    <MenuItem value="Diretor">Diretor</MenuItem>
                    <MenuItem value="Gerente">Gerente</MenuItem>
                    <MenuItem value="Proprietário">Proprietário</MenuItem>
                    <MenuItem value="Sócio">Sócio</MenuItem>
                    <MenuItem value="Administrador">Administrador</MenuItem>
                    <MenuItem value="Outro">Outro</MenuItem>
                  </Select>
                  {errors.clientRepresentativeRole && (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ mt: 0.5, ml: 1.5 }}
                    >
                      {errors.clientRepresentativeRole.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Grid>

          {/* Nome do Representante */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Controller
              name="clientRepresentative"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nome do Representante"
                  fullWidth
                  error={!!errors.clientRepresentative}
                  helperText={errors.clientRepresentative?.message}
                  required
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

          {/* Endereço */}
          <Grid size={{ xs: 15 }}>
            <Controller
              name="clientAddress"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Endereço Completo"
                  fullWidth
                  multiline
                  rows={3}
                  error={!!errors.clientAddress}
                  helperText={errors.clientAddress?.message}
                  required
                  placeholder="Rua, número, bairro, cidade, estado, CEP"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      padding: 1,
                    },
                    "& .MuiInputBase-input": {
                      padding: 1,
                    },
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ClientDataStep;
