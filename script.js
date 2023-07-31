// Самостоятельно написать фунцию как на уроке. если в массиве статус ошибки, пробуем перезапросить.
// если статус успеха, выводим на экран сообщение. если попыток больше 3-х, выводим ошибку

const fetch1 = ['error', 'error', 'success']
const fetch2 = ['success']
const fetch3 = ['error', 'error', 'error']

const pushStatus = (statuses) => {
  const currentStatuses = [...statuses] //Тут копируем масссив чтобы не мутировать его?
  return async () => {
    //как я поняла из документации:  выражение await, которое приостанавливает выполнение функции async и ожидает ответа от переданного Promise, затем возобновляя выполнение функции async и возвращая полученное значение.
    //те в данном случае возвращает перый эл-т из массива statuses через 1 секунду. Только зачем  currentStatuses[0], если shift и так удаляет первый (под индексом 0) и возращает его?
    // const status = currentStatuses.shift() в такой записи есть разница??
    return await new Promise((res) => {
      const status = currentStatuses[0]
      currentStatuses.shift(status)
      setTimeout(() => {
        res(status)
      }, 1000)
    })
  }
}

// вспомогательная функция, которая каждую секунду обновляет статус
const statusMap = pushStatus(fetch2)

const retryFetching = async (count) => {
  // your code here
}

retryFetching(0) //почему тут 0?
