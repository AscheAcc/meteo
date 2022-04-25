const api = {
    key: "5b9583e885f22e37e6192b5a5894e2ad",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.getElementById("search");
const btn = document.querySelector(".button");
btn.addEventListener("click", getInput);

function getInput (event) {
    event.preventDefault();
    if (event.type == "click") {

        getData(search.value);

    }
}

function getData () {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
        .then(response => {
            return response.json();
        }).then(displayData);
        
}


function displayData (response) {

        const city = document.querySelector(".city");
        city.innerText = `${response.name}, ${response.sys.country}`;

        const today = new Date();
        const date = document.querySelector(".date");
        date.innerText = dateFunction(today);

        const temp = document.querySelector(".temp");
        temp.innerHTML = `${Math.round(response.main.temp)} `;

        const weather = document.querySelector(".weather");
        weather.innerText = ` ${response.weather[0].main}`;

        const hight = document.querySelector(".hight");
        hight.innerHTML = ` ${Math.round(response.main.temp_max)}°C `;

        const low = document.querySelector(".low");
        low.innerHTML = `${Math.round(response.main.temp_min)}°C  `;



        search.value = "";
    
}
function dateFunction (d) {
    let months = ["Jan", "Fev", "Mar", "Avr", "Mai", "June", "Jull", "Aou", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}
search.value = "london" 
getData(search.value);
search.value = ""

function faux(){return false}


