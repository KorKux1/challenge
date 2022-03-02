# Game 01 - TypeScript Solution

This is a typescript solution to the [Preauth](https://preauth.notion.site/Preauth-is-hiring-6337f811353c4da8b33e49e5efdbd10b) [challenge](https://github.com/preauth-io/challenge/tree/main/game-01).

## Requirements

Languages:

<div align="center">

<img alt="ts" src="https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555"></a> 

</div>

Libraries:

<div align="center">

<img alt="@types/node" src="https://img.shields.io/badge/@types/node-17.0.21-blue">

<img alt="@types/jest" src="https://img.shields.io/badge/@types/jest-27.4.1-blue">

<img alt="jest" src="https://img.shields.io/badge/jest-27.5.1-blue">

<img alt="ts-jest" src="https://img.shields.io/badge/ts_jest-27.1.3-blue">

<img alt="ts-node" src="https://img.shields.io/badge/ts_node-10.6.0-blue">

</div>

## Usage

1. Clone the repository:
    > git clone <https://github.com/KorKux1/challenge.git>

2. Go to solution path:
    > challenge/game-01/typescript_solution

3. Install packages:
    > npm install

4. In the file  `src/app.ts` you will find the following code that you can modify:

   ```javascript
   import { Solution } from './app/solution';
   
   const list = [2, 5, 8, 14, 0]; // list of numbers where you need to find the pair numbers that sum up to the given value.
   const value = 10; // value to find the pair numbers that sum up it.
   console.log(Solution.findFirstTwoNumbersThatAddUpToValue(list, value));
   ```

5. Execute the code:
    > npm run dev

    You will get a output like this:

    ```bash
     # Output: [2, 8]
    ```

## Run Tests

Some test cases were made to validate the solution to the challenge. To run them follow these steps:

1. Go to the solution path:

    > cd challenge/game-01/typescript_solution

2. Install dependencies:

    > npm install

3. Run the tests:

    > npm run test:unit
