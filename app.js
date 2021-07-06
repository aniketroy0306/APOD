//Spinner
const spinner = document.getElementById("spinner");

//Function to get date manually from the User
function getDate() {
    return document.getElementById('dateSearch').value;
}

//Function to generate random date in YYYY-MM-DD format
function randomDate() {
    var minYear = 1996
    var maxYear = 2020

    var minMonth = 1;
    var maxMonth = 12;

    var minDay = 1;
    var maxDay = 28;


    function randomYear(minYear, maxYear) {
        let year1 = maxYear - minYear + 1;
        let year2 = Math.random() * year1;
        let result = Math.floor(year2) + minYear;

        return result;
    }

    function randomMonth(minMonth, maxMonth) {
        let month1 = maxMonth - minMonth + 1;
        let month2 = Math.random() * month1;
        let result2 = Math.floor(month2) + minMonth;

        return result2;
    }

    function randomDay(minDay, maxDay) {
        let day1 = maxDay - minDay + 1;
        let day2 = Math.random() * day1;
        let result3 = Math.floor(day2) + minDay;

        return result3;
    }

    const final = randomYear(minYear, maxYear) + '-' + randomMonth(minMonth, maxMonth) + '-' + randomDay(minDay, maxDay);
    return final;
}


async function call() {
    spinner.removeAttribute('hidden');      //Spinner
    let request = `https://api.nasa.gov/planetary/apod?date=` + getDate() + '&api_key=Ex17JeLdvtdQbSqmqRS7ARLQJyBcVeTzliVJdkDt';
    fetch(request).then(response => {
        return response.json();
    }).then(async function (myJSON) {
        //request = `https://api.nasa.gov/planetary/apod?date=` + getDate() + '&api_key=Ex17JeLdvtdQbSqmqRS7ARLQJyBcVeTzliVJdkDt';
        await fetch(request).then(function (response) {
            return response.json();
        }).then(function (myJSON) {

            document.querySelector('.result').style.display = 'grid';
            spinner.setAttribute('hidden', '');     //Spinner

            //Title of Pic
            h2 = document.getElementById("title");
            h2.innerHTML = myJSON.title;

            //Description
            p = document.getElementById("description");
            p.innerHTML = myJSON.explanation;

            //Date of Pic
            h3 = document.getElementById("dateOfPic");
            h3.innerHTML = myJSON.date;

            //Image
            img = document.getElementById("spacePic");
            img.src = myJSON.url;
        })
    })
}

async function random() {
    spinner.removeAttribute('hidden');      //Spinner
    let request = `https://api.nasa.gov/planetary/apod?date=` + randomDate() + '&api_key=Ex17JeLdvtdQbSqmqRS7ARLQJyBcVeTzliVJdkDt';
    fetch(request).then(response => {
        return response.json();
    }).then(async function (myJSON) {
        //request = `https://api.nasa.gov/planetary/apod?date=` + getDate() + '&api_key=Ex17JeLdvtdQbSqmqRS7ARLQJyBcVeTzliVJdkDt';
        await fetch(request).then(function (response) {
            return response.json();
        }).then(function (myJSON) {

            
            document.querySelector('.result').style.display = 'grid';
            spinner.setAttribute('hidden', '');     //Spinner

            //Title of Pic
            h2 = document.getElementById("title");
            h2.innerHTML = myJSON.title;

            //Description
            p = document.getElementById("description");
            p.innerHTML = myJSON.explanation;

            //Date of Pic
            h3 = document.getElementById("dateOfPic");
            h3.innerHTML = myJSON.date;

            //Image
            img = document.getElementById("spacePic");
            img.src = myJSON.url;
        })
    })
}