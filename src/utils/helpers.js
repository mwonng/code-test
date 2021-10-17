export const sortByAsce = (data) => {
  return [...data].sort(
    (a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount
  );
};

export const sortByDesc = (data) => {
  return [...data].sort(
    (a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount
  );
};
