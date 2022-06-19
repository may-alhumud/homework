let api = "https://www.breakingbadapi.com/api/characters";

async function getData() {
  try {
    let response = await fetch(api);
    let data = await response.json();
    printData(data);
  } catch (e) {
    console.log("Error:", e.message);
  }
}

function printData(data) {
  let item = document.querySelector("#header");
  let content = document.querySelector("#content");
  item.innerHTML += `<select class="from-control" onmouseover="getcharacter(this.value)">
    <option>Please Select</option>${data.map(
      (m) => `<option>${m.name}</option>`
    )} 
    </select>`;
}

async function getcharacter(e) {
  if (e != "please select") {
    let response = await fetch(`${api}?name=${e}`);
    let data = await response.json();
    content.innerHTML = `<h2>${data[0].name}</h2>
    <img src="${data[0].img}" width="250">
    `;
  }
}
getData();
