// Configurações da empresa DevShop
export const COMPANY_CONFIG = {
  name: import.meta.env.VITE_COMPANY_NAME,
  cnpj: import.meta.env.VITE_COMPANY_CNPJ,
  address: import.meta.env.VITE_COMPANY_ADDRESS,
  city: import.meta.env.VITE_COMPANY_CITY,
  zipCode: import.meta.env.VITE_COMPANY_ZIPCODE,
  representative: import.meta.env.VITE_COMPANY_REPRESENTATIVE,
  representativeRole: import.meta.env.VITE_COMPANY_REPRESENTATIVE_ROLE,
};

// Configurações padrão do contrato
export const CONTRACT_DEFAULTS = {
  defaultDeadlineDays:
    parseInt(import.meta.env.VITE_DEFAULT_DEADLINE_DAYS) || 30,
  defaultDiscountPercentage:
    parseInt(import.meta.env.VITE_DEFAULT_DISCOUNT_PERCENTAGE) || 10,
  defaultPenaltyPercentage:
    parseInt(import.meta.env.VITE_DEFAULT_PENALTY_PERCENTAGE) || 20,
  defaultSupportMonths:
    parseInt(import.meta.env.VITE_DEFAULT_SUPPORT_MONTHS) || 3,
  defaultDailyInterestRate:
    parseFloat(import.meta.env.VITE_DEFAULT_DAILY_INTEREST_RATE) || 0.5,
};
