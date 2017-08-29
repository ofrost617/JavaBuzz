var Javabuzz = function(){};

Javabuzz.prototype.says = function(number) {

  if (this._isDivisibleByFifteen(number)) {
    return 'fizzbuzz';
  }
  if (this._isDivisibleByFive(number)) {
    return 'buzz';
  }
  if (this._isDivisibleByThree(number)) {
    return 'fizz';
  }
  return number;
}

Javabuzz.prototype._isDivisibleByThree = function(number) {
  if (number % 3 === 0) {
    return true
  }
};

Javabuzz.prototype._isDivisibleByFive = function(number) {
  if (number % 5 === 0) {
    return true
  }
};

Javabuzz.prototype._isDivisibleByFifteen = function(number) {
  if (number % 15 === 0) {
    return true
  }
};
