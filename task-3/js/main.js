function get(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    // открываем соединение
    xhr.open("get", url, true);
    xhr.onload = () => {
      try {
        if (xhr.status === 200) { // если запрос выполнен успешно, то статус 200 OK
          resolve(xhr.response);
        } else { // не 200 - значит вывести статус и текст ошибки
          reject(new Error(xhr.status + ' ' + xhr.statusText));
        }
      } catch (e) {
        reject(e);
      }
    }
    // отправить запрос
    xhr.send();
  });
}

let firstData, secondData;

get('data1.json')
  .then(response => {
    firstData = JSON.parse(response);
    return get('data2.json')
  })
  .then(response => {
    secondData = JSON.parse(response);
    console.log(`Оба ответа получены: ${firstData.result.message} ${secondData.result.message}`)
  });
