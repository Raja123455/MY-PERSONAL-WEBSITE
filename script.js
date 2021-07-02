
AOS.init();

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwQWpGiLwI87VKy2jaw9A86jZU8VVwmUVuf0gdwFGxEqT9ZAaU8ze9aJQrHaboy-QhSHg/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})