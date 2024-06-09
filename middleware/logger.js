export const logger = (req, res, next) => {
  console.log("logger added");
  next();
};
