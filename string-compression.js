const compressString = (str) => {
  let char = str[0],
    counter = 0,
    newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter++;
    } else {
      newStr += `${char}${counter}`;

      counter = 1;
      char = str[i];
    }
    i == str.length - 1 && (newStr += `${char}${counter}`);
  }

  console.log(newStr);
};

compressString("XYZ");
