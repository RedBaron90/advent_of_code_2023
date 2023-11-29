import { Day } from "../day";

class Day0 extends Day {
  constructor() {
    super(0);
  }

  solveForPartOne(input: string): any {
    let array = input.split("\n");
    let counter = 0;
    let max = 0;
    array.forEach((element) => {
      if (element.length === 0) {
        if (counter > max) {
          max = counter;
        }

        counter = 0;
      } else {
        counter += Number(element);
      }
    });

    return max;
  }

  solveForPartTwo(input: string): string {
    return input;
  }
}

export default new Day0();
