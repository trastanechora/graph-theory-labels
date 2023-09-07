import { generate } from "../generate.js";

generate(4, (input, possibleValuesLength) => {
  const pelabelanHarmonis = [];
  pelabelanHarmonis.push((input[0] + input[1]) % possibleValuesLength);
  pelabelanHarmonis.push((input[0] + input[2]) % possibleValuesLength);
  pelabelanHarmonis.push((input[0] + input[3]) % possibleValuesLength);
  pelabelanHarmonis.push((input[0] + input[4]) % possibleValuesLength);
  pelabelanHarmonis.push((input[1] + input[2]) % possibleValuesLength);
  pelabelanHarmonis.push((input[2] + input[3]) % possibleValuesLength);
  pelabelanHarmonis.push((input[3] + input[4]) % possibleValuesLength);
  pelabelanHarmonis.push((input[4] + input[1]) % possibleValuesLength);

  return pelabelanHarmonis;
});
