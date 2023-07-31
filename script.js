// написать функцию, которая будет считать до 50 каждые 300 милисекунд. после достижения 50. функция должна вернуть сообщение done

const counter = async () => {
  const res = setInterval(() => {
    let counter = 0
    while (counter <= 50) {
      counter++
      if (counter === 50) {
        console.log('done')
      }
    }
  }, 300)

  setTimeout(() => {
    clearInterval(res)
  }, 3000) //думаю, 10 раз достаточно.
}
counter()
console.log('синхронный код - выполянется первым')
