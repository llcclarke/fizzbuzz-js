
describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multipe of 3', function() {
    it('returns fizz with 3', function() {
      expect(fizzBuzz.play(3)).toEqual('fizz');
   });

    it('returns fizz with 9', function() {
      expect(fizzBuzz.play(9)).toEqual('fizz');
    });
  });

  describe('multipe of 5', function(){
    it('returns buzz with 5', function() {
      expect(fizzBuzz.play(5)).toEqual('buzz');
    });

    it('returns buzz with 25', function() {
      expect(fizzBuzz.play(25)).toEqual('buzz');
    });
  });

  describe('multiple of 15', function(){
    it('returns fizzbuzz with 15', function() {
      expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
    });

    it('returns fizzbuzz with 45', function() {
      expect(fizzBuzz.play(45)).toEqual('fizzbuzz');
    });
  });

  describe('all other numbers', function(){
    it('1 for 1', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });

    it('11 for 11', function() {
      expect(fizzBuzz.play(11)).toEqual(11);
    });
  });
});