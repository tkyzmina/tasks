// https://leetcode.com/problems/multiply-strings (https://leetcode.com/problems/multiply-strings/)
// Немного усложняем. Ожидаю что могу туда передать строки в формате
// “..5”, “2,5”, “0.0000026”, “0000050,10”.
// Если вычислить не можем, то выводим ошибку
// “Error: can’t count as number”

const multiply = function (num1, num2) {
  if (!isFinite(num1) || !isFinite(num2)) {
    console.log("Error: can't count as number")
    return
  }
  const rez = (+num1 * num2).toString()
  console.log(rez)
  return rez
}

// multiply('..5', '2,5')
// multiply('..5', '4')
// multiply('3', '4')
// multiply('0.0000026', '0000050,10')
// multiply('890', '345')
// multiply('123456789', '987654321') //тут литкод выдает ошибку они ожидают "121932631112635269" а получают "121932631112635260"
// multiply('2.4', '5.2')
// multiply('1', '1')
