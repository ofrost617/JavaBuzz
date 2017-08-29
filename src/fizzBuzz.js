var Javabuzz = function(){};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  if (number % 3 === 0) {
    return 'fizz'
  } else {
    return number
  }
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  if (number % 5 === 0) {
    return 'buzz'
  } else {
    return number
  }
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  if (number % 15 === 0) {
    return 'fizzbuzz'
  } else {
    return number
  }
};

