import fs from "fs";

/**
 * a funciton to check if all numbers in array are even or odd
 */
const checkEvenOrOdd = (arr) => {
  const even = arr.every((item) => item % 2 === 0);
  const odd = arr.every((item) => item % 2 !== 0);
  return even || odd;
};

/**
 * a function to create arrays of possible random order from given array
 */
const shuffleArray = (arr) => {
  const result = [];
  const used = new Set();

  function generate(current) {
    if (current.length === arr.length) {
      result.push(current.slice());
      return;
    }

    for (const value of arr) {
      if (!used.has(value)) {
        current.push(value);
        used.add(value);
        generate(current);
        current.pop();
        used.delete(value);
      }
    }
  }

  generate([]);
  return result;
};

/**
 * a function to check any duplicate in array
 */
const checkDuplicate = (arr) => {
  const duplicate = arr.filter((item, index) => arr.indexOf(item) != index);
  return duplicate.length > 0;
};

/**
 * a function to create any possible combinations of all odd unique numbers or all even unique numbers with the input of length and possible values
 */
export const generateCombinations = (length, possibleValues) => {
  let count = 0;
  const combinations = [];
  const generate = (combination, index) => {
    if (combination.length === length) {
      count++
      if (checkEvenOrOdd(combination)) combinations.push(combination);
      console.log(`Generating ${length} long of sequences from ${possibleValues.length} different set of numbers | Found possible ${combinations.length} combinations that satisfy all odd or all even number sequences from ${count} generated..`);
      return;
    }

    for (let i = index; i < possibleValues.length; i++) {
      generate(combination.concat(possibleValues[i]), i + 1);
    }
  };

  generate([], 0);
  console.log(`Substracted possible ${combinations.length} combinations..`);
  return combinations;
};

/**
 * a funciton to create array of numbers with input of start, stop, and step
 */
export const createNumberArray = (start, stop, step) => {
  const arr = [];
  for (let i = start; i <= stop; i += step) {
    arr.push(i);
  }
  console.log(`Generating from ${arr.length} possible values:`);
  // console.log(arr);
  return arr;
};

/**
 * a funciton to generate csv file from given array
 */
export const generateResultFile = (result, fileName) => {
  const HEADER = '"input", "output"';
  let ROW = "";

  result.forEach((item) => {
    ROW += '"' + item.input + '","' + item.output + '"\n';
  });

  fs.writeFile(fileName, HEADER + "\n" + ROW, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("CSV saved to " + fileName);
    }
  });
};

/**
 * a funciton to selectively
 */
export const calculateInputToOutput = (
  input,
  possibleValuesLength,
  calculatePelabelanHarmonis,
  isPrintProgression
) => {
  const result = [];

  input.forEach((item, index) => {
    console.log(`Checking the shuffled ${index + 1} out of ${input.length} sequences..`);
    const shuffledArray = shuffleArray(item);
    shuffledArray.forEach((innerItem, innerIndex) => {
      // console.log(`Checking ${index + 1} (${innerIndex}/${shuffledArray.length}) out of ${input.length}..`);
      const pelabelanHarmonis = calculatePelabelanHarmonis(
        innerItem,
        possibleValuesLength
      );
      if (!checkDuplicate(pelabelanHarmonis)) {
        result.push({ input: innerItem, output: pelabelanHarmonis });
        console.log(`Found ${result.length} pelabelan harmonis..`);
        // console.log(result);
        if (isPrintProgression) {
          generateResultFile(result, "progression.csv");
        }
      }
    });
  });

  return result;
};
