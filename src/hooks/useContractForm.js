import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { contractSchema } from "../utils/schema";
import { CONTRACT_DEFAULTS } from "../config/company";

dayjs.extend(utc);
dayjs.extend(timezone);

export const useContractForm = () => {
  const form = useForm({
    resolver: yupResolver(contractSchema),
    defaultValues: {
      clientName: "",
      clientCNPJ: "",
      clientAddress: "",
      clientRepresentative: "",
      clientRepresentativeRole: "",
      projectDescription: "",
      projectDeadline: CONTRACT_DEFAULTS.defaultDeadlineDays,
      projectValue: 0,
      paymentMethod: "À vista",
      paymentDiscount: 0,
      paymentInstallments: 2,
      phaseValue: 0,
      contractDate: dayjs().tz("America/Sao_Paulo").format("YYYY-MM-DD"),
      discountPercentage: CONTRACT_DEFAULTS.defaultDiscountPercentage,
      penaltyPercentage: CONTRACT_DEFAULTS.defaultPenaltyPercentage,
      supportMonths: CONTRACT_DEFAULTS.defaultSupportMonths,
      dailyInterestRate: CONTRACT_DEFAULTS.defaultDailyInterestRate,
      additionalNotes: "",
    },
    mode: "onChange",
  });

  const resetForm = () => {
    form.reset({
      clientName: "",
      clientCNPJ: "",
      clientAddress: "",
      clientRepresentative: "",
      clientRepresentativeRole: "",
      projectDescription: "",
      projectDeadline: CONTRACT_DEFAULTS.defaultDeadlineDays,
      projectValue: 0,
      paymentMethod: "À vista",
      paymentDiscount: 0,
      paymentInstallments: 2,
      phaseValue: 0,
      contractDate: dayjs().tz("America/Sao_Paulo").format("YYYY-MM-DD"),
      discountPercentage: CONTRACT_DEFAULTS.defaultDiscountPercentage,
      penaltyPercentage: CONTRACT_DEFAULTS.defaultPenaltyPercentage,
      supportMonths: CONTRACT_DEFAULTS.defaultSupportMonths,
      dailyInterestRate: CONTRACT_DEFAULTS.defaultDailyInterestRate,
      additionalNotes: "",
    });
  };

  return { ...form, resetForm };
};
