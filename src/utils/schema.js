import * as yup from "yup";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { validateCNPJ } from "./cnpj";

dayjs.extend(utc);
dayjs.extend(timezone);

export const contractSchema = yup.object().shape({
  // Dados do Cliente
  clientName: yup
    .string()
    .required("Nome da empresa é obrigatório")
    .min(2, "Nome deve ter pelo menos 2 caracteres"),

  clientCNPJ: yup
    .string()
    .required("CNPJ é obrigatório")
    .test("cnpj-valid", "CNPJ inválido", validateCNPJ),

  clientAddress: yup
    .string()
    .required("Endereço é obrigatório")
    .min(10, "Endereço deve ter pelo menos 10 caracteres"),

  clientRepresentative: yup
    .string()
    .required("Nome do representante é obrigatório")
    .min(2, "Nome deve ter pelo menos 2 caracteres"),

  clientRepresentativeRole: yup
    .string()
    .required("Cargo do representante é obrigatório"),

  // Dados do Projeto
  projectDescription: yup
    .string()
    .required("Descrição do projeto é obrigatória")
    .min(20, "Descrição deve ter pelo menos 20 caracteres"),

  projectDeadline: yup
    .number()
    .required("Prazo é obrigatório")
    .min(1, "Prazo deve ser pelo menos 1 dia")
    .max(365, "Prazo não pode exceder 365 dias"),

  projectValue: yup.number().when("paymentMethod", {
    is: "Por etapas",
    then: (schema) => schema.notRequired(),
    otherwise: (schema) =>
      schema
        .required("Valor é obrigatório")
        .min(100, "Valor mínimo é R$ 100,00"),
  }),

  paymentMethod: yup.string().required("Forma de pagamento é obrigatória"),

  paymentDiscount: yup.number().when("paymentMethod", {
    is: "À vista",
    then: (schema) =>
      schema
        .min(0, "Desconto não pode ser negativo")
        .max(50, "Desconto não pode exceder 50%"),
    otherwise: (schema) => schema.notRequired(),
  }),

  paymentInstallments: yup.number().when("paymentMethod", {
    is: "Parcelado",
    then: (schema) =>
      schema.min(2, "Mínimo 2 parcelas").max(12, "Máximo 12 parcelas"),
    otherwise: (schema) => schema.notRequired(),
  }),

  phaseValue: yup.number().when("paymentMethod", {
    is: "Por etapas",
    then: (schema) =>
      schema
        .min(100, "Valor mínimo da fase é R$ 100,00")
        .required("Valor por fase é obrigatório"),
    otherwise: (schema) => schema.notRequired(),
  }),

  contractDate: yup
    .date()
    .required("Data de assinatura é obrigatória")
    .max(dayjs().tz("America/Sao_Paulo").toDate(), "Data não pode ser futura"),

  // Configurações Personalizadas
  discountPercentage: yup
    .number()
    .min(0, "Desconto não pode ser negativo")
    .max(50, "Desconto não pode exceder 50%"),

  penaltyPercentage: yup
    .number()
    .min(0, "Multa não pode ser negativa")
    .max(100, "Multa não pode exceder 100%"),

  supportMonths: yup
    .number()
    .min(0, "Suporte não pode ser negativo")
    .max(12, "Suporte não pode exceder 12 meses"),

  dailyInterestRate: yup
    .number()
    .min(0, "Juros não podem ser negativos")
    .max(5, "Juros não podem exceder 5% ao dia"),
});
