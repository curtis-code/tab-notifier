export function generateTitle(value, originalTitle, replaceTitle) {
  if (replaceTitle){
    return value;
  }
  else {
    return `(${value}) ${originalTitle}`;
  }
}