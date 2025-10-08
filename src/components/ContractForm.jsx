import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Chip,
} from "@mui/material";
import { useContractForm } from "../hooks/useContractForm";
import { COMPANY_CONFIG } from "../config/company";
import LogoHeader from "./LogoHeader";
import ClientDataStep from "./ClientDataStep";
import ProjectDataStep from "./ProjectDataStep";
import CustomizationStep from "./CustomizationStep";
import PreviewStep from "./PreviewStep";
import ContractStepper from "./ContractStepper";
import NavigationButtons from "./NavigationButtons";
import FeedbackMessages from "./FeedbackMessages";
import ContractGenerator from "../services/contractGenerator";

const steps = [
  "Dados do Cliente",
  "Dados do Projeto",
  "Personalização",
  "Preview",
];

const ContractForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    trigger,
    resetForm,
  } = useContractForm();

  const watchedValues = watch();

  const handleNext = async () => {
    const fieldsToValidate = getFieldsForStep(activeStep);
    const isStepValid = await trigger(fieldsToValidate);

    if (isStepValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setError(null);
    } else {
      setError(
        "Por favor, preencha todos os campos obrigatórios corretamente."
      );
    }
  };

  const getFieldsForStep = (step) => {
    switch (step) {
      case 0:
        return [
          "clientName",
          "clientCNPJ",
          "clientAddress",
          "clientRepresentative",
          "clientRepresentativeRole",
        ];
      case 1:
        return [
          "projectDescription",
          "projectDeadline",
          "projectValue",
          "paymentMethod",
          "contractDate",
        ];
      case 2:
        return [
          "discountPercentage",
          "penaltyPercentage",
          "supportMonths",
          "dailyInterestRate",
        ];
      case 3:
        return [];
      default:
        return [];
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setError(null);
  };

  const handleReset = () => {
    resetForm();
    setActiveStep(0);
    setError(null);
    setSuccess(null);
  };

  const onSubmit = async (data) => {
    setIsGenerating(true);
    setError(null);
    setSuccess(null);

    try {
      const contractData = {
        ...data,
        company: COMPANY_CONFIG,
      };

      await ContractGenerator.generateDOCX(contractData);
      setSuccess("Contrato gerado com sucesso! O download foi iniciado.");
    } catch (err) {
      setError(`Erro ao gerar contrato: ${err.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <ClientDataStep control={control} errors={errors} />;
      case 1:
        return (
          <ProjectDataStep control={control} errors={errors} watch={watch} />
        );
      case 2:
        return <CustomizationStep control={control} errors={errors} />;
      case 3:
        return <PreviewStep data={watchedValues} company={COMPANY_CONFIG} />;
      default:
        return null;
    }
  };

  const progress = ((activeStep + 1) / steps.length) * 100;

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 2, sm: 4 },
        px: { xs: 1, sm: 2 },
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
      }}
    >
      <Paper
        elevation={16}
        sx={{
          borderRadius: { xs: 2, sm: 4 },
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
            color: "white",
            p: { xs: 2, sm: 3 },
            textAlign: "center",
          }}
        >
          <LogoHeader />

          <Box sx={{ mb: 3 }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: "rgba(255,255,255,0.2)",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#10b981",
                },
              }}
            />
          </Box>

          <ContractStepper activeStep={activeStep} />
        </Box>

        <CardContent sx={{ p: { xs: 2, sm: 4 }, minHeight: 450 }}>
          <FeedbackMessages error={error} success={success} />

          {renderStepContent(activeStep)}

          <NavigationButtons
            activeStep={activeStep}
            totalSteps={steps.length}
            onNext={handleNext}
            onBack={handleBack}
            onReset={handleReset}
            onSubmit={handleSubmit(onSubmit)}
            isGenerating={isGenerating}
            isValid={isValid}
          />
        </CardContent>
      </Paper>
    </Container>
  );
};

export default ContractForm;
