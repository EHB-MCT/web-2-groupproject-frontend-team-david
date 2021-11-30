button();


function button() {

    document.getElementById('challenge_button').addEventListener("click", lol);

}

function lol() {
    fetch(`https://web2-backend-teamdavid.herokuapp.com/api/boardgames`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        });
}