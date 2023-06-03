export const ROLES = {
  admin: {
    code: 5150,
    permisions: "all",
  },
  user: {
    code: 2001,
    permisions: [1, 5, 9],
  },
};

export const PERMISIONS = [
  { code: 1, type: "Write an article" },
  { code: 2, type: "Modify all articles" },
  { code: 3, type: "Delete all articles" },
  { code: 4, type: "Delete owned article" },
  { code: 5, type: "Modify owned article" },
  { code: 6, type: "Delete any account" },
  { code: 7, type: "Delete owned account" },
  { code: 8, type: "Modify any account" },
  { code: 9, type: "Delete owned account" },
];
