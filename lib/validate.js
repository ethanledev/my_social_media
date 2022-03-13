export const validateArray = (prop) => [
  (arr) => {
    return arr.length > 0;
  },
  `${prop} can't be an empty array.`,
];
