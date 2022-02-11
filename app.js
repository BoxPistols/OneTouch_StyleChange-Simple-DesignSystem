/**
  // jQuery
  $("button:not(.remove)").on("click", function () {
    $(".example").css("justify-self", $(this).text());
  }); 
*/

/**
 * TODO: 汎用関数化　Class化？ new インスタンス
 * TODO: 最終CSSのView
 *
 * DONE: jQuery to Vanilla
 */

const getSelectorAll = (x) => {
  return document.querySelectorAll(`.buttons.${x} > button`);
};

const resultJustifySelf = getSelectorAll('justifySelf');

// Test
const getCssProps = (searchElm) => {
  for (let i = 0; i < searchElm.length; i++) {
    searchElm[i].addEventListener('click', function () {
      console.log(this.innerText);
      let para = document.querySelector('.example');
      let compStyles = window.getComputedStyle(para);
      const style = para.style;
      style.justifySelf = this.innerText;
    });
  }
};
getCssProps(resultJustifySelf);

// justify Self
// for (let i = 0; i < resultJustifySelf.length; i++) {
//   resultJustifySelf[i].addEventListener('click', function () {
//     let para = document.querySelector('.example');
//     let tx = this.innerText;
//     let compStyles = window.getComputedStyle(para);
//     const style = para.style;
//     console.log(tx);
//     style.justifySelf = tx;
//     console.log(resultJustifySelf[i]);
//   });
// }

// Align
const ButtonAlignItems = document.querySelectorAll(
  '.buttons.alignItems > button'
);

for (let i = 0; i < ButtonAlignItems.length; i++) {
  ButtonAlignItems[i].addEventListener('click', function () {
    let tx = this.innerText;
    console.log(tx);
    //     justifySelf
    let para = document.querySelector('.container');
    let compStyles = window.getComputedStyle(para);
    const style = para.style;
    style.alignItems = tx;
    console.log(compStyles.getPropertyValue('alignItems'));
  });
}

// justify-content
const ButtonJustifyContent = document.querySelectorAll(
  '.buttons.justifyContent > button'
);

for (let i = 0; i < ButtonJustifyContent.length; i++) {
  ButtonJustifyContent[i].addEventListener('click', function () {
    let tx = this.innerText;
    console.log(tx);
    // justifyContent
    let para = document.querySelector('.container');
    let compStyles = window.getComputedStyle(para);
    const style = para.style;
    style.justifyContent = tx;
    console.log(compStyles.getPropertyValue('justifyContent'));
  });
}

// const className = document.querySelectorAll('element');

// for (let i = 0; i < className.length; i++) {
//   className[i].addEventListener('click', function () {
//     this.classList.toggle('example');
//     alert(this.classList);
//   });
// }
