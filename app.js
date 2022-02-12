// jQuery
// $("button:not(.remove)").on("click", function () {
//   $(".example").css("justify-self", $(this).text());
// });

// TODO: 汎用関数化　Class化？ new インスタンス
// to Vanilla
var classNameButton = document.querySelectorAll(
  '.buttons.justifySelf > button'
);

for (let i = 0; i < classNameButton.length; i++) {
  classNameButton[i].addEventListener('click', function () {
    let tx = this.innerText;
    console.log(tx);
    //     justifySelf
    let para = document.querySelector('.example');
    let compStyles = window.getComputedStyle(para);
    var style = para.style;
    style.justifySelf = tx;
    console.log(compStyles.getPropertyValue('justifySelf'));
  });
}

// Align
var ButtonAlignItems = document.querySelectorAll(
  '.buttons.alignItems > button'
);

for (let i = 0; i < ButtonAlignItems.length; i++) {
  ButtonAlignItems[i].addEventListener('click', function () {
    let tx = this.innerText;
    console.log(tx);
    //     justifySelf
    let para = document.querySelector('.container');
    let compStyles = window.getComputedStyle(para);
    var style = para.style;
    style.alignItems = tx;
    console.log(compStyles.getPropertyValue('alignItems'));
  });
}

// justify-content
var ButtonJustifyContent = document.querySelectorAll(
  '.buttons.justifyContent > button'
);

for (let i = 0; i < ButtonJustifyContent.length; i++) {
  ButtonJustifyContent[i].addEventListener('click', function () {
    let tx = this.innerText;
    console.log(tx);
    // justifyContent
    let para = document.querySelector('.container');
    let compStyles = window.getComputedStyle(para);
    var style = para.style;
    style.justifyContent = tx;
    console.log(compStyles.getPropertyValue('justifyContent'));
  });
}

// var className = document.querySelectorAll("element");

// for (let i = 0; i < className.length; i++) {
//   className[i].addEventListener("click", function () {
//     this.classList.toggle("example");
//     alert(this.classList);
//   });
// }
