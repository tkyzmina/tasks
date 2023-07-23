// https://leetcode.com/problems/integer-to-roman/

const intToRoman = function (num) {
  const romanSigns = [
    { 1000: 'M' },
    { 900: 'CM' },
    { 500: 'D' },
    { 400: 'CD' },
    { 100: 'C' },
    { 90: 'XC' },
    { 50: 'L' },
    { 40: 'XL' },
    { 10: 'X' },
    { 9: 'IX' },
    { 5: 'V' },
    { 4: 'IV' },
    { 1: 'I' },
  ]
  let rezStr = ''
  romanSigns.forEach((el) => {
    for (key in el) {
      while (num >= key) {
        num -= key
        rezStr += el[key]
      }
    }
  })
  return rezStr
}

// intToRoman(190)
