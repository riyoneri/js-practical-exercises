const convertNullableValues = (obj) => {
  for (let prop in obj) {
    if (obj[prop] === null) obj[prop] = 0;
    if (obj[prop] === undefined) obj[prop] = "";
  }
  return obj;
};

const myObj = {
  name: "lion",
  age: 54,
  car: true,
  level: 5,
  weight: undefined,
  color: "white",
  hair: null,
  computer: "lenovo",
};

console.log(convertNullableValues(myObj));