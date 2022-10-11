const object = { Mexico: true, Rusia: false, Wakanda: 0 };

// keysNvalues =();
console.log(object);

const keysNvalues = (obj) => {
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
  return `[[${Object.keys(obj)}], [${Object.values(obj)}]]`;
};
const resu = keysNvalues(object);
console.log(resu);
