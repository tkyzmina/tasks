// Написать функцию, которая принимает 2 аргумента (строка, подстрока) и возвращает массив индексов всех подстрок
// function searchIndexes(str, substr) {}

// Примеры
// str- далеко далеко пасутся кто? правильно - коровы
// substr - да

// result - [0,7]

// str- далеко далеко пасутся кто? правильно - коровы
// substr - ко

// result - [4,11,38]

function searchIndexes(str, substr) {
  let pos = 0
  let resArr = []
  while (true) {
    let foundPos = str.indexOf(substr, pos)
    if (foundPos == -1) break
    resArr = [...resArr, foundPos]
    pos = foundPos + 1
  }
  // console.log(resArr)
  return resArr
}
searchIndexes('далеко далеко пасутся кто? правильно - коровы', 'да')
searchIndexes('далеко далеко пасутся кто? правильно - коровы', 'ко')
