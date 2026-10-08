const eur = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const eurRounded = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

/** 349.99 → "349,99 €" */
export function formatEUR(value: number) {
  return eur.format(value);
}

/** 40 → "40 €" */
export function formatEURRounded(value: number) {
  return eurRounded.format(value);
}
