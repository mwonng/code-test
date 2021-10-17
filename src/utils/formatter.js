export const printAddress = (address) => {
  if (Array.isArray(address)) {
    return address.join(", ");
  }
  return address;
};

export const showCancellationText = (cancellationType) => {
  if (cancellationType === "FREE_CANCELLATION") {
    return "Free cancellation";
  }
  return null;
};
