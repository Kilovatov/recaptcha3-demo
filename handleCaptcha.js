const form = document.getElementById('form');
const tokenJumbotron = document.getElementById("token");
const tokenContainer = document.getElementById("token-place");
const googleRespJumbotron = document.getElementById("google");
const googleRespContainer = document.getElementById("response");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    grecaptcha.ready(function() {
        grecaptcha.execute('6LcBRm0UAAAAAP-ZmkTiqf4Zbd657frckbBHTSgE', {action: 'button_clicked'})
            .then(function(token) {
                tokenJumbotron.classList.remove('d-none');
                tokenContainer.innerHTML = token;
                fetch('https://www.google.com/recaptcha/api/siteverify', {
                    method: 'post',
                    body: `secret=6Lek-2sUAAAAABH9-lM5B5OwOAnK29Xc7tOJd3-H&response=${token}`,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then((response) => response.json()).then(function(data) {
                    googleRespJumbotron.classList.remove('d-none');
                    googleRespContainer.innerHTML = JSON.stringify(data);
                });
            });
    });
});
