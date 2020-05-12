// Lambda
const λ = {
  // Greater Than
  gt: (a, b) => a < b,
  // Greater Than Or Equals
  gte: (a, b) => a >= b,
  // Less Than
  lt: (a, b) => a > b,
  // Less Than Or Equals
  lte: (a, b) => a <= b,

  pipe: () => {},

  equals: (a, b) => a === b,

  reduce: () => {},

  mapReducer: (mapper) => (result, input) => result.concat(mapper(input)),

  filterReducer: (predicate) => (result, input) =>
    predicate(input) ? result.concat(input) : result,

  compose: (...functions) => (args) =>
    functions.reduceRight((arg, fn) => fn(arg), args),

  mapTransducer: (mapper) => (reducingFunction) => (result, input) =>
    reducingFunction(result, mapper(input)),

  filterTransducer: (predicate) => (reducingFunction) => (result, input) =>
    predicate(input) ? reducingFunction(result, input) : result,
};

module.exports = Object.freeze(λ);