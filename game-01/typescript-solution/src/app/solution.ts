/**
* Solution to the problem of finding the first two, given a list of numbers, that add up to a specified value.
*/
export class Solution {
    /**
    * Finds the first two numbers in the given list that add up to the specified value.
    * @param {number[]} list - The list of numbers.
    * @param {number} value - The value to add up to.
    * @returns {number[]} The first two numbers in the given list that add up to the specified value.
    */
    static findFirstTwoNumbersThatAddUpToValue(list: number[], value: number): number[] {

        for (let i = 0; i < list.length; i++) {
            for (let j = i + 1; j < list.length; j++) {
                if (list[i] + list[j] === value) {
                    return [list[i], list[j]];
                }
            }
        }

        return [];  // When no two numbers in the list add up to the specified value.
    }
}