var activeDiv = null; // Инициализируем переменную для активного div

function showDiv(targetDiv) {
  if (activeDiv) {
    activeDiv.style.display = "none"; // Скрываем предыдущий активный div
  }

  targetDiv.style.display = "block"; // Отображаем целевой div
  activeDiv = targetDiv; // Обновляем активный div
}

document.addEventListener("click", function(event) {
  var target = event.target;

  if (target.classList.contains("show-div")) {
    var divId = target.getAttribute("data-div-id");
    var targetDiv = document.getElementById(divId);

    if (targetDiv) {
      showDiv(targetDiv);
    }
  } else if (!target.classList.contains("target-div")) {
    if (activeDiv) {
      activeDiv.style.display = "none"; // Скрываем активный div при клике вне целевых div
      activeDiv = null; // Сбрасываем активный div
    }
  }
});

// forms
function showForm1() {
  var form1 = document.getElementById("form1");
  var form2 = document.getElementById("form2");
  form1.style.display = "block";
  form2.style.display = "none";
}

function showForm2() {
  var form1 = document.getElementById("form1");
  var form2 = document.getElementById("form2");
  form1.style.display = "none";
  form2.style.display = "block";
}

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const isValid = validateForm
  if (isValid) {
    alert('Форма отправлена!');
    form.reset();
  } else {
    alert('Пожалуйста, заполните все обязательные поля.');
  }
}

function alerted(){
  alert("Отправляя обращение, Вы соглашаетесь на обработку ваших персональных данных в соответсвии с требованиями Федерального закона от 27.07.2006 №152-ФЗ “О персональных данных”");
}

// function formsub(){
//   alert("Форма отправлена, спасибо. Мы постараемся ответить как можно скорее")
// }