var Javabuzz = function(){};

Javabuzz.prototype.says = function(number) {

  if (this.isDivisibleByFifteen(number)) {
    return 'fizzbuzz';
  }
  if (this.isDivisibleByFive(number)) {
    return 'buzz';
  }
  if (this.isDivisibleByThree(number)) {
    return 'fizz';
  }
  return number;
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
 return (number % divisor === 0 );
 };
