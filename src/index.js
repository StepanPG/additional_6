module.exports = function zeros(expression) {
  let arrOfFactorials = expression.split('*'),
    arrOfNumbers = [],
    twoCounter = 0,
    fiveCounter = 0;

  for (let i = 0; i < arrOfFactorials.length; i++) {
    if (arrOfFactorials[i].endsWith('!!')) { // or arrOfFactorials[i].slice(-2) == '!!'
      arrOfNumbers = arrOfNumbers.concat(addDF(parseInt(arrOfFactorials[i].slice(0, -2))));
    } else {
      arrOfNumbers = arrOfNumbers.concat(addF(parseInt(arrOfFactorials[i].slice(0, -1))));
    }
  }

  for (let i = 0; i < arrOfNumbers.length; i++) {
    if (arrOfNumbers[i] % 5 == 0) {
      countFive(arrOfNumbers[i]);
    }

    if (arrOfNumbers[i] % 2 == 0) {
      countTwo(arrOfNumbers[i]);
    }
  }

  if (twoCounter > fiveCounter) {
    return fiveCounter;
  } else {
    return twoCounter;
  }

  function addF(z) {
    let arr = [];
    while (z != 1) {
      arr.push(z);
      z -= 1;
    }
    return arr;
  }

  function addDF(z) {
    let arr = [];
    while (z > 1) {
      arr.push(z);
      z -= 2;
    }
    return arr;
  }

  function countTwo(x) {
    x /= 2;
    twoCounter++;
    if (x % 2 == 0) {
      countTwo(x);
    } else {
      return x;
    }
  }

  function countFive(x) {
    x /= 5;
    fiveCounter++;
    if (x % 5 == 0) {
      countFive(x);
    } else {
      return x;
    }
  }
}
