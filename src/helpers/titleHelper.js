import state from '../state';

export function generateTitle(value, replaceTitle) {
  if (replaceTitle){
    return value;
  }
  else {
    return `(${value}) ${state.originalTitle}`;
  }
}