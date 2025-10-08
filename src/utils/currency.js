export const formatCurrencyDisplay = (value) => {
  if (!value || value === 0) return "";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const parseCurrency = (value) => {
  if (!value) return 0;
  if (typeof value === "number") return value;

  const cleanValue = value.toString().replace(/[^\d,.]/g, "");

  if (cleanValue.includes(",")) {
    const parts = cleanValue.split(",");
    if (parts.length === 2) {
      const integerPart = parts[0].replace(/\./g, "");
      const decimalPart = parts[1];
      return parseFloat(`${integerPart}.${decimalPart}`) || 0;
    }
  }

  return parseFloat(cleanValue.replace(/\./g, "")) || 0;
};

export const formatAsYouType = (value) => {
  if (!value) return "R$ ";

  const numbers = value.replace(/\D/g, "");

  if (numbers.length === 0) return "R$ ";

  const amount = parseInt(numbers) / 100;

  return (
    "R$ " +
    amount.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
};
