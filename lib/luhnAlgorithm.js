const check = function(num) {
  let rev = num.toString().split('').reverse()
  let sum = rev.filter((e,i) => i % 2 !== 0)
      .map( e => e * 2)
      .join('')
      .split('')
      .concat(rev.filter((e,i) => i % 2 === 0))
      .reduce((acc,cur) => acc + Number(cur), 0)
  return sum % 10 === 0
};

module.exports = { check };