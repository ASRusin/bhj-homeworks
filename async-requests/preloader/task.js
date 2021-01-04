const gif = document.getElementById("loader");
const items = document.getElementById("items");
const xhr = new XMLHttpRequest();
const url = "https://netology-slow-rest.herokuapp.com";

xhr.open("GET", url);
xhr.setRequestHeader("Content-type", "application/json");
xhr.send();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    gif.className = "loader";
    const response = JSON.parse(xhr.responseText);
    
    const resp = response.response.Valute;
    
    for (let value in resp) {
      
      const item = document.createElement("div");
      item.className = "item";
      const itemCode = document.createElement("div");
      itemCode.className = "item__code";
      itemCode.textContent = resp[value].CharCode;
      const itemValue = document.createElement("div");
      itemValue.className = "item__value";
      itemValue.textContent = resp[value].Value;
      const itemCurrency = document.createElement("div");
      itemCurrency.className = "item__currency";
      itemCurrency.textContent = "руб.";
      item.appendChild(itemCode);
      item.appendChild(itemValue);
      item.appendChild(itemCurrency);
      items.appendChild(item);
    }
  }
});
