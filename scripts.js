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
var currentStep = 1;
    var formSteps = document.querySelectorAll('.form-step');
    
    function showStep(step) {
      formSteps.forEach(function(stepElement) {
        stepElement.classList.remove('active');
      });
      document.getElementById('step-' + step).classList.add('active');
    }
    
    function nextStep() {
      if (currentStep < formSteps.length) {
        currentStep++;
        showStep(currentStep);
      }
    }
    
    function prevStep() {
      if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
      }
    }
    
    showStep(currentStep);