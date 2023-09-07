import { generate } from "../generate.js";

generate(8, (input, possibleValuesLength) => {
  const pelabelanHarmonis = [];
  pelabelanHarmonis.push((input[0] + input[1]) % possibleValuesLength);
  pelabelanHarmonis.push((input[0] + input[2]) % possibleValuesLength);
  pelabelanHarmonis.push((input[0] + input[3]) % possibleValuesLength);
  pelabelanHarmonis.push((input[0] + input[4]) % possibleValuesLength);
  pelabelanHarmonis.push((input[0] + input[5]) % possibleValuesLength);
  pelabelanHarmonis.push((input[0] + input[6]) % possibleValuesLength);
  pelabelanHarmonis.push((input[0] + input[7]) % possibleValuesLength);
  pelabelanHarmonis.push((input[0] + input[8]) % possibleValuesLength);
  pelabelanHarmonis.push((input[1] + input[2]) % possibleValuesLength);
  pelabelanHarmonis.push((input[2] + input[3]) % possibleValuesLength);
  pelabelanHarmonis.push((input[3] + input[4]) % possibleValuesLength);
  pelabelanHarmonis.push((input[4] + input[5]) % possibleValuesLength);
  pelabelanHarmonis.push((input[5] + input[6]) % possibleValuesLength);
  pelabelanHarmonis.push((input[6] + input[7]) % possibleValuesLength);
  pelabelanHarmonis.push((input[7] + input[8]) % possibleValuesLength);
  pelabelanHarmonis.push((input[8] + input[1]) % possibleValuesLength);

  return pelabelanHarmonis;
});
