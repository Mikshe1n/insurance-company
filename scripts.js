// function viewDiv() {
//     document.getElementById("block-vis").style.display = "block";
//   }

// function hideDiv() {
//     document.getElementById("block-vis").style.display = "none";
//   }

// function viewDiv() {
//     var block = document.getElementById("block-vis");
//     block.style.display = "block";
  
//     var animBlock = document.getElementById(".anim-block");
//     animBlock.addEventListener("click", function() {
//       block.style.display = "none";
//     });
//   }

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
