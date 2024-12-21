export const formatCurrency = (value) =>
  new Intl.NumberFormat("ar", {
    style: "currency",
    currency: "YER",
  }).format(value);
