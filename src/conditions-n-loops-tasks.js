/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let retNum = a;
  if (b > a) retNum = b;
  if (c > a && c > b) retNum = c;
  return retNum;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let ret = false;
  if (queen.x === king.x || queen.y === king.y) ret = true;
  let xDif;
  let yDif;
  if (queen.x < king.x) {
    xDif = king.x - queen.x;
  } else {
    xDif = queen.x - king.x;
  }
  if (queen.y < king.y) {
    yDif = king.y - queen.y;
  } else {
    yDif = queen.y - king.y;
  }
  if (xDif === yDif) ret = true;
  return ret;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let numA;
  let numB;
  let numC;
  if (a === 0 || b === 0 || c === 0) return false;
  if (a === b) {
    numA = a;
    numB = b;
    numC = c;
  }
  if (a === c) {
    numA = a;
    numB = c;
    numC = b;
  }
  if (b === c) {
    numA = b;
    numB = c;
    numC = a;
  }
  if (numC - numB === 1 && numC - numA === 1) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const roma = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };
  const romaX = {
    1: 'X',
    2: 'XX',
    3: 'XXX',
  };
  if (num <= 10) return roma[num];
  const first = parseInt(String(num)[0], 10);
  const second = parseInt(String(num)[1], 10);
  return romaX[first] + roma[second];
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  function convertToWord(key) {
    switch (key) {
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      case '-':
        return 'minus';
      case '+':
        return 'plus';
      case '.':
      case ',':
        return 'point';
      default:
        return 'unknown';
    }
  }

  let ourString = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const element = numberStr[i];
    if (i === 0) {
      ourString += `${convertToWord(element)}`;
    } else {
      ourString += ` ${convertToWord(element)}`;
    }
  }

  return ourString;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  if (str.length === 1) return true;
  for (let i = 0; i < str.length / 2; i += 1) {
    const elStart = str[i];
    const elEnd = str[str.length - (i + 1)];
    if (elStart !== elEnd) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    const element = str[i];
    if (element === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = String(num);
  const digitStr = String(digit);
  for (let i = 0; i < numStr.length; i += 1) {
    const element = numStr[i];
    if (element === digitStr) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 2) return -1;
  for (let ii = 1; ii < arr.length - 1; ii += 1) {
    let left = 0;
    let right = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (i < ii) {
        left += arr[i];
      } else if (i > ii) {
        right += arr[i];
      }
    }
    if (left === right) {
      return ii;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [[1, 2, 3],[8, 9, 4],[7, 6, 5]]
 *
 *        [
 * [1,  2,  3,  4], - 0 arr[]
 *  [12, 13, 14, 5], - 1
 *    [11, 16, 15, 6], - 2
 *      [10, 9,  8,  7] - 3
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = Array(size);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = Array(size);
  }

  let currentNum = 1;
  const endNum = size * size;
  let posX = 0;
  let posY = 0;
  arr[posX][posY] = currentNum;

  function toRight() {
    while (posY + 1 < size && !arr[posX][posY + 1]) {
      currentNum += 1;
      arr[posX][posY + 1] = currentNum;
      posY += 1;
    }
  }
  function toDown() {
    while (posX + 1 < size && !arr[posX + 1][posY]) {
      currentNum += 1;
      arr[posX + 1][posY] = currentNum;
      posX += 1;
    }
  }
  function toLeft() {
    while (posY - 1 >= 0 && !arr[posX][posY - 1]) {
      currentNum += 1;
      arr[posX][posY - 1] = currentNum;
      posY -= 1;
    }
  }
  function toUp() {
    while (posX - 1 >= 0 && !arr[posX - 1][posY]) {
      currentNum += 1;
      arr[posX - 1][posY] = currentNum;
      posX -= 1;
    }
  }
  while (currentNum !== endNum) {
    toRight();
    toDown();
    toUp();
    toLeft();
  }

  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const workMatrix = matrix;
  const matrixClone = Array(workMatrix.length);
  for (let i = 0; i < workMatrix[0].length; i += 1) {
    matrixClone[i] = Array(workMatrix[0].length);
  }
  let workMatrixI = 0;
  for (let i = workMatrix[0].length - 1; i >= 0; i -= 1) {
    for (let ii = 0; ii < workMatrix[0].length; ii += 1) {
      matrixClone[ii][i] = workMatrix[workMatrixI][ii];
    }
    workMatrixI += 1;
  }
  for (let i = 0; i < workMatrix[0].length; i += 1) {
    for (let ii = 0; ii < workMatrix[0].length; ii += 1) {
      workMatrix[i][ii] = matrixClone[i][ii];
    }
  }
  return workMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const workArr = arr;
  let startPoint = 0;
  while (startPoint < workArr.length) {
    let minNum = workArr[startPoint];
    let minIndex = startPoint;
    for (let i = startPoint; i < workArr.length; i += 1) {
      if (workArr[i] <= minNum) {
        minNum = workArr[i];
        minIndex = i;
      }
    }
    workArr[minIndex] = workArr[startPoint];
    workArr[startPoint] = minNum;
    startPoint += 1;
  }
  return workArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let word = str;
  let iterCounter = 0;
  let hashReady = false;
  const hash = [];
  let repeater = 1;
  hash[0] = word;
  for (let iter = 0; iter < iterations; iter += 1) {
    if (!hashReady) {
      let first = '';
      let second = '';
      for (let i = 0; i < word.length; i += 1) {
        if (i % 2 === 0) {
          first += word[i];
        } else if (i % 2 === 1) {
          second += word[i];
        }
      }

      word = first + second;
      if (word === str) {
        hashReady = true;
      }
      if (!hashReady) {
        iterCounter += 1;
        hash[iterCounter] = word;
      }
    } else if (hashReady) {
      word = hash[repeater];
      if (repeater === hash.length - 1) {
        repeater = 0;
      } else if (repeater < hash.length - 1) {
        repeater += 1;
      }
    }
  }
  return word;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let strNum = String(number);
  let numIndex = -1;
  let num = 0;
  for (let i = strNum.length - 1; i >= 0; i -= 1) {
    if (Number(strNum[i - 1]) < Number(strNum[i])) {
      numIndex = i - 1;
      break;
    }
  }
  if (numIndex === -1) return number;
  num = Number(strNum[numIndex]);
  let memNum = 10;
  let memIndex = 0;
  for (let i = numIndex + 1; i < strNum.length; i += 1) {
    if (
      Number(strNum[i]) > Number(strNum[numIndex]) &&
      Number(strNum[i]) <= memNum
    ) {
      memNum = Number(strNum[i]);
      memIndex = i;
    }
  }
  let strNumTemp = strNum;
  strNum = [];
  for (let i = 0; i < strNumTemp.length; i += 1) {
    strNum.push(strNumTemp[i]);
  }
  strNum[memIndex] = String(num);
  strNum[numIndex] = String(memNum);
  const needSort = [];
  for (let i = numIndex + 1; i < strNum.length; i += 1) {
    needSort.push(strNum[i]);
  }
  needSort.sort(function (a, b) {
    return a - b;
  });
  let needSortInx = 0;
  for (let i = numIndex + 1; i < strNum.length; i += 1) {
    strNum[i] = needSort[needSortInx];
    needSortInx += 1;
  }
  strNumTemp = strNum;
  strNum = '';
  for (let i = 0; i < strNumTemp.length; i += 1) {
    strNum += strNumTemp[i];
  }
  return Number(strNum);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
