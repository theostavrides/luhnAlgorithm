const assert = require("chai").assert;
const luhnAlgorithm = require('../lib/luhnAlgorithm.js');

describe("Luhn Algorithm Function", function(){
  it("Should return false", function(){
    let numbers = [
      79927398710,
      79927398711,
      79927398712,
      79927398714,
      79927398715,
      79927398716,
      79927398717,
      79927398718,
      79927398719]
    numbers.forEach(e => assert.isFalse(luhnAlgorithm.check(e)));
  });
  it("should return true", function(){
    let numbers = [79927398713];
    numbers.forEach(e => assert.isTrue(luhnAlgorithm.check(e)));
  });
});