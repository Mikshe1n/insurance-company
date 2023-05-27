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

document.getElementById('fio').addEventListener('input', function() {
  document.getElementById('fioValue').innerText = this.value;
});

document.getElementById('phone').addEventListener('input', function() {
  document.getElementById('phoneValue').innerText = this.value;
});

document.getElementById('email').addEventListener('input', function() {
  document.getElementById('emailValue').innerText = this.value;
});

document.getElementById('region').addEventListener('input', function() {
  document.getElementById('regionValue').innerText = this.value;
});

document.getElementById('productName').addEventListener('input', function() {
  document.getElementById('productNameValue').innerText = this.value;
});

document.getElementById('topic').addEventListener('input', function() {
  document.getElementById('topicValue').innerText = this.value;
});

document.getElementById('policyNumber').addEventListener('input', function() {
  document.getElementById('policyNumberValue').innerText = this.value;
});

document.getElementById('message').addEventListener('input', function() {
  document.getElementById('messageValue').innerText = this.value;
});

function clearForm1() {
  document.getElementById("fio").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("region").value = "";
  document.getElementById("fioValue").textContent = "";
  document.getElementById("phoneValue").textContent = "";
  document.getElementById("emailValue").textContent = "";
  document.getElementById("regionValue").textContent = "";
}

function clearForm2() {
  document.getElementById("category1").value = "";
  document.getElementById("category2").value = "";
  document.getElementById("policyNumber").value = "";
  document.getElementById("message").value = "";
  document.getElementById("category1Value").textContent = "";
  document.getElementById("category2Value").textContent = "";
  document.getElementById("policyNumberValue").textContent = "";
  document.getElementById("messageValue").textContent = "";
}

function updateCategory() {
  var selectedCategory = document.getElementById("category").value;
  // Действия, которые нужно выполнить в зависимости от выбранной категории
  console.log("Выбрана категория: " + selectedCategory);
  // Другой код для обработки выбора категории
}

// Обработчик отправки формы
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