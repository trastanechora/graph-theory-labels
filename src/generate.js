import fs from "fs";
import {
  generateCombinations,
  createNumberArray,
  calculateInputToOutput,
  generateResultFile,
} from "./helpers.js";

export const generate = (
  whellSidesCount = 4,
  calculatePelabelanHarmonis = () => {},
  isPrintProgression = false
) => {
  const _RESULT_POINTS_LENGTH = whellSidesCount * 2;
  const _POSSIBLE_VALUE_START = 0;
  const _POSSIBLE_VALUE_FINISH = _RESULT_POINTS_LENGTH * 2 - 1;
  const _POSSIBLE_VALUES = createNumberArray(
    _POSSIBLE_VALUE_START,
    _POSSIBLE_VALUE_FINISH,
    1
  );

  const possibleValuesLength = _POSSIBLE_VALUES.length;

  const generatedPosibilitiesInput = generateCombinations(
    whellSidesCount + 1,
    _POSSIBLE_VALUES
  );

  const result = calculateInputToOutput(
    generatedPosibilitiesInput,
    possibleValuesLength,
    calculatePelabelanHarmonis,
    isPrintProgression
  );

  generateResultFile(result, `w${whellSidesCount}.csv`);
};
