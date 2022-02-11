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

// resultJustifySelf = getSelectorAll('justifySelf');
// Test
const nums = () => {
  let t = this.innerText;
  let targetParam = document.querySelector(target);
  let x = window.getComputedStyle(targetParam);
  let thisStyle = targetParam.style;
};

const getCssProps = (searchElm, target) => {
  for (let i = 0; i < searchElm.length; i++) {
    searchElm[i].addEventListener('click', function () {
      let para = document.querySelector(target);
      let tx = this.innerText;
      let compStyles = window.getComputedStyle(para);
      const style = para.style;
      style.justifySelf = tx;
      console.log(
        `style.justifySelf:${style.justifySelf} \n tx:${tx} \n compStyles[i]:${compStyles.justifySelf}`
      );
    });
  }
};
// getCssProps(resultJustifySelf, '.example');

const resProp = (_searchElm, _target) => {
  _res = getSelectorAll(_searchElm);
  getCssProps(_res, _target);
  return;
};

resProp('justifySelf', '.example');

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

// resProp('alignItems', '.container');
// resProp('justifyContent', '.container');

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
