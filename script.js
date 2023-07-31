// Написать свой аналог fetch, который будет возвращать промис с переданными в него данными через указанное количество секунд

const fetch = (data, ms) => {
  setTimeout(() => {
    const promise = new Promise((res) => res(data))
    console.log(promise)
    return promise
  }, ms)
}

// fetch({name: 'Sveta', surname: 'Ivanova'}, 5000) - Ожидаю что через 5 секунд функция fetch вернет данные
// fetch({ name: 'Sveta', surname: 'Ivanova' }, 5000)
