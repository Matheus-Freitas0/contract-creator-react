export const formatCNPJ = (value) => {
  if (!value) return "";

  const numbers = value.replace(/\D/g, "");

  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 5) return `${numbers.slice(0, 2)}.${numbers.slice(2)}`;
  if (numbers.length <= 8)
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`;
  if (numbers.length <= 12)
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(
      5,
      8
    )}/${numbers.slice(8)}`;

  return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(
    5,
    8
  )}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`;
};

export const validateCNPJ = (cnpj) => {
  cnpj = cnpj.replace(/[^\d]/g, "");

  if (cnpj.length !== 14) return false;
  if (/^(\d)\1+$/.test(cnpj)) return false;

  let sum = 0;
  let weight = 5;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj[i]) * weight;
    weight = weight === 2 ? 9 : weight - 1;
  }
  let remainder = sum % 11;
  let firstDigit = remainder < 2 ? 0 : 11 - remainder;

  if (parseInt(cnpj[12]) !== firstDigit) return false;

  sum = 0;
  weight = 6;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj[i]) * weight;
    weight = weight === 2 ? 9 : weight - 1;
  }
  remainder = sum % 11;
  let secondDigit = remainder < 2 ? 0 : 11 - remainder;

  return parseInt(cnpj[13]) === secondDigit;
};
