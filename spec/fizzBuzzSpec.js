describe('Fizzbuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divsible by 3', function() {

      expect(javabuzz.isDivisibleByThree(3)).toBe('fizz');
    });


    it('divisible by 5', function() {

      expect(javabuzz.isDivisibleByFive(5)).toBe('buzz');
    });


    it('divisible by 15', function() {

      expect(javabuzz.isDivisibleByFifteen(15)).toBe('fizzbuzz');
    });


  });

  describe('knows when a number is NOT', function() {

    it('divsible by 3', function() {

      expect(javabuzz.isDivisibleByThree(1)).toBe(1);
    });

    it('divsible by 5', function() {

      expect(javabuzz.isDivisibleByFive(1)).toBe(1);
    });

    it('divisible by 15', function() {

      expect(javabuzz.isDivisibleByFifteen(20)).toBe(20);
    });


  });

});
