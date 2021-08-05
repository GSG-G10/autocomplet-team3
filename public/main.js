const result = document.querySelector('.reslut');
const inputValue = document.querySelector('.input-search');
const clearBtn = document.querySelector('.clearBtn');
const autoCompleteSpace = document.querySelector('.autocomplete-items');

function addListener(selector, action, callback) {
  document.querySelector(selector).addEventListener(action, callback);
}

const api = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status <= 299) {
        const response = JSON.parse(xhr.responseText);
        callback(response);
      } if (xhr.status >= 300 && xhr.status <= 399) {
        const response = 300;
        callback(response);
      } else if (xhr.status >= 400 && xhr.status <= 499) {
        const response = 400;
        callback(response);
      } else if (xhr.status >= 500 && xhr.status <= 599) {
        const response = 500;
        callback(response);
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
};

const getRandomArbitrary = (min, max) => {
  const randomNum = Math.random() * (max - min) + min;
  return parseInt(randomNum, 10);
};

const showResult = (response) => {
  if (response >= 300 && response <= 399) {
    result.textContent = 'Redirection – Indicates that the client must take some additional action in order to complete their request.';
  } else if (response >= 400 && response <= 499) {
    result.textContent = 'Client Error – This category of error status codes points the finger at clients.';
  } else if (response >= 500 && response <= 599) {
    result.textContent = 'Server Error – The server takes responsibility for these error status code';
  } else {
    const img = document.createElement('img');
    img.classList = 'image';
    const randomNumber = getRandomArbitrary(0, response.results.length);
    img.src = response.results[randomNumber].urls.small;
    result.appendChild(img);
  }
};

const autoComplete = (response) => {
  if (response >= 300 && response <= 399) {
    result.textContent = 'Redirection – Indicates that the client must take some additional action in order to complete their request.';
  } else if (response >= 400 && response <= 499) {
    result.textContent = 'Client Error – This category of error status codes points the finger at clients.';
  } else if (response >= 500 && response <= 599) {
    result.textContent = 'Server Error – The server takes responsibility for these error status code';
  } else {
    autoCompleteSpace.textContent = '';
    for (let index = 0; index < response.length; index += 1) {
      const ele = response[index];
      const div = document.createElement('div');
      const inputWithValue = document.createElement('input');
      inputWithValue.setAttribute('type', 'submit');
      inputWithValue.setAttribute('value', ele);
      inputWithValue.setAttribute('id', 'autoCompleteInput');
      inputWithValue.classList = `autocomplete${index}`;
      div.appendChild(inputWithValue);
      autoCompleteSpace.appendChild(div);
      if (index === 5) {
        break;
      }
    }
    const a = document.querySelectorAll('#autoCompleteInput');
    for (let index = 0; index < a.length; index += 1) {
      const element = a[index];
      element.addEventListener('click', () => {
        inputValue.value = element.value;
        autoCompleteSpace.textContent = '';
        document.querySelector('.myBtn').click();
      });
    }
  }
};

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
  const url = `/search&q=${inputValue.value}`;
  api(url, autoComplete);
});
