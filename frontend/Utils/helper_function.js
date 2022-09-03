/* eslint-disable */
import { calculateTotalPrice } from "paystack-transaction-charges-to-cus";
export const digitFormatter = (num) => {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return Number(num).toLocaleString("en", options);
};

export const calculateTotalCost = (amount) => {
  return calculateTotalPrice(amount) * 100;
};
