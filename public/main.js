const result = document.querySelector('.reslut');
let inputValue = document.querySelector('.input-search');
const saerchBtn = document.querySelector(".myBtn");
function addListener(selector, action, callback) {
  document.querySelector(selector).addEventListener(action, callback);
}
// General  Function Api
function api(url, callback) {
  console.log('in api ')
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      console.log(xhr.status)
      if (xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);
        callback(response);
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}
function showResult(response) {

  console.log(response.results[0].urls.raw)
  result.innerHTML = response.results[0].urls.raw;
}
addListener('.myBtn','click', (e) => {
  e.preventDefault();
  const url = `https://api.unsplash.com/search/photos?query=${inputValue.value}&client_id=qp1xazQhIzra13wFLMNGz3ayhyy-ouNonVyzwcbtnLY`;
  api(url, showResult);
});


inputValue.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".myBtn").click();
  }
});