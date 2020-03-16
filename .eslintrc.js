module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier/react', 'prettier/@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
