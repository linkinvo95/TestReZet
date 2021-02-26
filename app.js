//Task #1.

const arr = [1, 3, 5, 4, 5, 7];
const funcArr = (arr) => {
  return arr.reduce((acc, _, index, array) => {
    if (!array[index + 2]) {
      return acc;
    }
    const middleIndex = index + 1;
    const firstCondition =
      array[middleIndex] > array[middleIndex - 1] &&
      array[middleIndex] > array[middleIndex + 1];
    const secondCondition =
      array[middleIndex] < array[middleIndex - 1] &&
      array[middleIndex] < array[middleIndex + 1];
    return firstCondition || secondCondition ? [...acc, 1] : [...acc, 0];
  }, []);
};
console.log(funcArr(arr));

//Task #2.
const exapmleMatrix = [
  [1, 2, 3, 2, 7],
  [4, 5, 6, 8, 1],
  [7, 8, 9, 4, 5],
];
const func = (matrix) => {
  const shouldContain = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const PLOT_STEPS = 3;
  const plotIterator = Array(PLOT_STEPS).fill(0);
  const MATRIX_STEPS = matrix[0].length - (PLOT_STEPS - 1);
  const matrixIterator = Array(MATRIX_STEPS).fill(0);
  return matrixIterator.map((_, index) => {
    const plot = [];
    plotIterator.forEach((_, indx) => {
      plotIterator.forEach((_, i) => {
        plot.push(matrix[indx][i + index]);
      });
    });
    return !shouldContain.some((number) => !plot.includes(number));
  });
};
console.log(func(exapmleMatrix));

  //Task #3.

  const strings = [
    ["Hello", "world"],
    ["Brad", "came", "to", "dinner", "with", "us"],
    ["He", "loves", "tacos"],
  ];

  const rules = ["LEFT", "RIGHT", "LEFT"];
  const limit = 16;
  const result = [];
  const addSpaces = (string, rule) => {
    const spaces = Array(16 - string.length)
      .fill(" ")
      .reduce((acc, item) => {
        return acc + item;
      }, "");
    return rule === "LEFT" ? `*${string + spaces}*` : `*${spaces + string}*`;
  };
  strings.forEach((str, index) => {
    if (str.join(" ").length <= 16) {
      result.push(addSpaces(str.join(" "), rules[index]));
    } else {
      const arr = [];
      let part = " ";
      str.forEach((item, index) => {
        if (`${part + item} `.length <= 16) {
          part = `${part + item} `;
        } else {
          arr.push(part.trim());
          part = `${item} `;
        }
        if (index + 1 === str.length) {
          arr.push(part.trim());
        }
      });
      arr.forEach((i) => {
        result.push(addSpaces(i, rules[index]));
      });
    }
  });
  console.log("result", result);