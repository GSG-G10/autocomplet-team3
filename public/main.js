const result = document.querySelector('.reslut');
const inputValue = document.querySelector('.input-search');
const clearBtn = document.querySelector('.clearBtn');

function addListener(selector, action, callback) {
  document.querySelector(selector).addEventListener(action, callback);
}
// General  Function Api
function api(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callback(response);
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

function getRandomArbitrary(min, max) {
  const randomNum = Math.random() * (max - min) + min;
  return parseInt(randomNum, 10);
}

function showResult(response) {
  const img = document.createElement('img');
  img.classList = 'image';
  const randomNumber = getRandomArbitrary(0, 10);
  img.src = response.results[randomNumber].urls.raw;
  result.appendChild(img);
}
addListener('.myBtn', 'click', (e) => {
  e.preventDefault();
  const url = `https://api.unsplash.com/search/photos?query=${inputValue.value}&client_id=qp1xazQhIzra13wFLMNGz3ayhyy-ouNonVyzwcbtnLY`;
  api(url, showResult);
});

inputValue.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('.myBtn').click();
  }
});

clearBtn.addEventListener('click', () => {
  result.textContent = '';
});

addListener('.input-search', 'input', (e) => {
  e.preventDefault();
  const url = `http://localhost:3030/search&q=${inputValue.value}`;
  api(url, (res) => {
    console.log(res);
  });
});
