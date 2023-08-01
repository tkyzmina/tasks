// написать функцию, которая будет считать до 50 каждые 300 милисекунд. после достижения 50. функция должна вернуть сообщение done
// task update  - каждые 300 мс счетчик увеличивается на 1 единицу. Работа заканчивается после достижения счетчиком значения 50.
const counter = async (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value >= 50 ? 'Done' : false)
    }, 300)
  })
  let result = await promise
  if (result === false) {
    return counter(value + 1)
  }
  return promise
}

counter(0)
