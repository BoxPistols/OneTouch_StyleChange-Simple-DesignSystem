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
 * React化：
 *  useStateでボタンのテキストを取得、index.innerText?
 *  実際のクラスターゲットに値を当てる
 *  style.xxxが鬼門
 *
 * DONE: jQuery to Vanilla
 */

const getSelectorAll = (x) => {
  return document.querySelectorAll(`.buttons.${x} > button`);
};

// resultJustifySelf = getSelectorAll('justifySelf');

/** 
console.log(
`style.justifySelf:${style.justifySelf} \n tx:${tx} \n compStyles[i]:${compStyles.justifySelf}`
);
*/

const getCssProps = (searchElm, target, val) => {
  for (let i = 0; i < searchElm.length; i++) {
    searchElm[i].addEventListener('click', function () {
      let para = document.querySelector(target);
      let tx = this.innerText;
      let compStyles = window.getComputedStyle(para);
      //
      let value = compStyles.getPropertyValue(val);
      /**
       *     let compStyles = window.getComputedStyle(para);
    const style = para.style;
    style.justifyContent = tx;

       */
      // const style = para.style;
      // style.value = tx;
      // value = para.val;
      // value = tx;
      console.log(val, value);
    });
  }
};

const resProp = (_searchElm, _target, val) => {
  _res = getSelectorAll(_searchElm);
  getCssProps(_res, _target, val);
};

justifySelf = 'justify-self';
resProp('justifySelf', '.example', justifySelf);

// ----------------
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
