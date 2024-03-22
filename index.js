const siteKey = '6LcZhKEpAAAAAC_o9_c7-FaXYOpxCHhijwYcebae';

const url = 'https://script.google.com/macros/s/AKfycbx2_0rZ4Qvr6e5aMeQOPxGQkXyKrAOUQy7nB289Lxa-MnVdrvWpUwIPimbZ_xNOoZsk/exec';

function handleSubmit(event) {
  event.preventDefault();

  // Make an API call to get the reCAPTCHA token
  grecaptcha.ready(function () {
    grecaptcha.execute(siteKey, { action: 'submit' }).then(function (token) {
      // Add the reCAPTCHA token to the form data
      data.gCaptchaResponse = token;
      data.firstname = document.getElementById('firstname').value;
	  data.lastname = document.getElementById('lastname').value;
      data.email = document.getElementById('email').value;
	  data.language = document.getElementById('language').value;
      data.comment = document.getElementById('comment').value;

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log('data', data))
        .catch((err) => console.log('err', err));
    });
  });
}

document.getElementById('contact-form').addEventListener('submit', handleSubmit);