async function saveChallenge(e) {
  e.preventDefault()
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let data = {
    name: document.getElementById("challenge_name").value,
    "points": "film",
    "course": "WEB II",
    "session": "123456  een bordspel"
  };


  console.log(data.name);
}

document.getElementById("challenge").addEventListener("submit", e => {
  e.preventDefault();
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let data = JSON.stringify({
    "name": document.getElementById("challenge_name").value,
    "points": document.getElementById("challenge_points").value,
    "course": document.getElementById("challenge_course").value,
    "session": document.getElementById("challenge_session").value
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  };

  fetch("https://web2-backend-teamdavid.herokuapp.com/api/saveChallenge", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
})

async function getData() {

  let resp = await fetch("https://web2-backend-teamdavid.herokuapp.com/api/challenges");

  return await resp.json();

}

async function showData() {

  let data = await getData();
  console.log(data);
  data.forEach(WEB => {
    console.log(WEB)
    let html = `<div id="item"><img id="edit" src="./img/iconmonstr-pencil-14-240.png" alt=""><img id="delete" src="./img/iconmonstr-trash-can-1-240.png" alt=""><h1>Name</h1><p>${WEB.name}</p><h1>points</h1><p>${WEB.points}</p><h1>course</h1><p>${WEB.course}</p><h1>session</h1><p>${WEB.session}</p></div>`
    document.getElementById("list").insertAdjacentHTML('beforeend', html)

  })

}
async function deleteData(e) {
  document.getElementById("delete").addEventListener("click", e)
  let requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: data,
    redirect: 'follow'

  };
  fetch("https://web2-backend-teamdavid.herokuapp.com/api/challenges/61a5faa5b28bc82729248efa", requestOptios)
}
showData()