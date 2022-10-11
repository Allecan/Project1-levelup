const object = { Wakanda: "Vibranium", Mexico: "Tacos", Rusia: "Vodka" };

const sort = Object.keys(object)
  .sort()
  .reduce((accumulator, key) => {
    accumulator[key] = object[key];

    return accumulator;
  }, {});

const keysNvalues = (sort) => {
  console.log(Object.keys(sort));
  console.log(Object.values(sort));
  return `[[${Object.keys(sort)}], [${Object.values(sort)}]]`;
};
const resu = keysNvalues(sort);
console.log(resu);