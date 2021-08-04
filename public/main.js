const result = document.querySelector('.reslut');
let inputValue = document.querySelector('.input-search');

function addListener(selector, action, callback) {
  document.querySelector(selector).addEventListener(action, callback);
}
// General  Function Api
function api(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status) {
        const response = JSON.parse(xhr.responseText);
        callback(response);
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}
function showResult(response) {
  result.innerHTML = response.results.urls;
}
addListener('submit', (e) => {
  e.preventDefault();
  inputValue = e.target.querySelector('input').value;
  const url = `https://api.unsplash.com/search/photos?query=${inputValue}&client_id=qp1xazQhIzra13wFLMNGz3ayhyy-ouNonVyzwcbtnLY`;
  api(url, showResult);
});
