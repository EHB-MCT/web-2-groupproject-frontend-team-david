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

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow'
    };

    console.log(data.name);
    // fetch("https://web2-backend-teamdavid.herokuapp.com/api/saveBoardgame", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

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

async function getData()  {

  let resp = await fetch("https://web2-backend-teamdavid.herokuapp.com/api/challenges");

  return await resp.json();

}

async function showData () {

      let data = await getData();
  
      data.DEV.forEach(DEV => {
        console.log(DEV)
        let html = `
        <h1>Name</h1>
        <p>${DEV.name}</p>
        <h1>points</h1>
        <p>${DEV.points}</p>
        <h1>course</h1>
        <p>${DEV.course}</p>
        <h1>session</h1>
        <p>${DEV.session}</p>
        `  
        document.getElementById("list").insertAdjacentHTML('beforeend', html) 
      })
  
      data.WEB.forEach(WEB => {
        console.log(WEB)
        let html = `
        <h1>Name</h1>
        <p>${WEB.name}</p>
        <h1>points</h1>
        <p>${WEB.points}</p>
        <h1>course</h1>
        <p>${WEB.course}</p>
        <h1>session</h1>
        <p>${WEB.session}</p>
        `  
        document.getElementById("list").insertAdjacentHTML('beforeend', html)
  
      })
  
    }
  
    showData()