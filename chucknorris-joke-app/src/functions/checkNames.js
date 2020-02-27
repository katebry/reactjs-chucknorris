export const checkNames = name => {
  const whitespaceRegex = /[\s]/g;
  const wordRegex = /[a-zA-z*]/g;
  if (whitespaceRegex.test(name)) {
    const splitName = name.split(" ", 2);
    return splitName;
  } else {
    return wordRegex.test(name) ? [name] : "";
  }
};
