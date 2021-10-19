const getForm = document.querySelector('.btn');
const feedback = document.querySelector('.feedback');
const check = document.querySelector('input[type="checkbox"]');

function openForm() {
  feedback.style.display = 'flex';
}
getForm.addEventListener('click', openForm);


window.addEventListener("load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();

    const FD = new FormData(form);

    XHR.addEventListener("load", function (event) {
      alert('Письмо отправлено');
      window.location.href = '/';
    });

    XHR.addEventListener("error", function (event) {
      alert('Oops! Something went wrong.');
    });

    XHR.open("POST", "./app/mail.php");

    if (check.checked) {
      XHR.send(FD);
    } else {
      alert('Вы не согласны с условиями соглашения');
    }
  }

  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
  });
});