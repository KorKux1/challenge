import { Solution } from "../solution";

describe("findFirstTwoNumbersThatAddUpToValue", () => {
    it("should find the first two numbers in the given list that add up to the specified value when just have one solution", () => {
        expect(Solution.findFirstTwoNumbersThatAddUpToValue([2, 5, 8, 14, 0], 10)).toEqual([2, 8]);
    });

    it("should find the first two numbers in the given list that add up to the specified value  when just have more that one solution", () => {
        expect(Solution.findFirstTwoNumbersThatAddUpToValue([2, 2, 4, 14, 0], 4)).toEqual([2, 2]);
    });

    it("should find the first two numbers in the given list that add up to the specified value  when just have more that one solution", () => {
        expect(Solution.findFirstTwoNumbersThatAddUpToValue([0, 1, 4, 0, 3], 4)).toEqual([0, 4]);
    });

    it("should return an empty list because none of the addition combinations in the list give the specified value", () => {
        expect(Solution.findFirstTwoNumbersThatAddUpToValue([2, 5, 8, 14, 0], 11)).toEqual([]);
    });
});