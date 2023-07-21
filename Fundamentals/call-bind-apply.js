const calculate = (height) => {
  console.log(10 * height);
};

const binded = calculate.bind(this, 5);

// binded()

// ===================== B =========================

const findMax = (...arr) => {
  console.log(Math.max(...arr));
};

// findMax.apply(this, [34, 12, 57, 28, 91]);

// ===================== C =========================

const capitalize = (name) => {
  console.log(`${name.charAt(0).toUpperCase()}${name.slice(1)}`);
};

// capitalize.call(this, "john");

// ===================== D =========================

const calculateDiscount = (price) => {
    console.log(price - (price * 10) / 100);
};

const product1 = calculateDiscount.bind(this, 50);
const product2 = calculateDiscount.bind(this, 100);

// product1();
// product2();

// ===================== E =========================

const arrayConversion = (...obj) => {
    console.log(obj)
}

const obj = {
    0: "apple",
    1: "banana",
  2: "orange",
  3: "grape",
  4: "pear",
  5: "watermelon",
  6: "kiwi",
  7: "pineapple",
  8: "mango",
  9: "strawberry",
  length: 10,
};

// arrayConversion.apply(this, obj);