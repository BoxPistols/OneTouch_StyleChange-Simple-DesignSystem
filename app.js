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

resultJustifySelf = getSelectorAll('justifySelf');

/** 
console.log(
`style.justifySelf:${style.justifySelf} \n tx:${tx} \n compStyles[i]:${compStyles.justifySelf}`
);
*/

// justify-self
const getCssProps = (_searchElm, _target, _styling) => {
  for (let i = 0; i < resultJustifySelf.length; i++) {
    resultJustifySelf[i].addEventListener('click', function () {
      let tx = this.innerText;
      let para = document.querySelector(_target);

      let style = para.style[`${_styling}`];
      // style.justifySelf = tx;
      style = tx;

      let compStyles = window.getComputedStyle(para);
      let r = compStyles[`${_styling}`];
      r = tx


      // Test 
      console.log(style, r);
    });
  }
};



const resProp = (_searchElm, _target, _styling) => {
  _res = getSelectorAll(_searchElm);
  getCssProps(_res, _target, _styling);
};

resProp('justifySelf', '.example', "justifySelf");

// test

const elem = document.querySelector('.example');
elem.style.setProperty('color', '#ff0', '');
elem.style.setProperty('margin-bottom', '30px', 'important');

console.log("x" + elem); // id="div1" の要素の align の値を表示します。

// ----------------











// resProp('alignItems', '.container');
// resProp('justifyContent', '.container');

// justify-content
const ButtonJustifyContent = document.querySelectorAll(
  '.buttons.justifyContent > button'
);

for (let i = 0; i < ButtonJustifyContent.length; i++) {
  ButtonJustifyContent[i].addEventListener('click', function () {
    let tx = this.innerText;
    // console.log(tx);
    // justifyContent
    let para = document.querySelector('.container');
    const style = para.style;
    style.justifyContent = tx;
    // console.log(compStyles.getPropertyValue('justifyContent'));
  });
}

// Align
const ButtonAlignItems = document.querySelectorAll(
  '.buttons.alignItems > button'
);

for (let i = 0; i < ButtonAlignItems.length; i++) {
  ButtonAlignItems[i].addEventListener('click', function () {
    let tx = this.innerText;
    // console.log(tx);
    //     justifySelf
    let para = document.querySelector('.container');
    const style = para.style;
    style.alignItems = tx;
    // console.log(compStyles.getPropertyValue('alignItems'));
  });
}


// const className = document.querySelectorAll('element');

// for (let i = 0; i < className.length; i++) {
//   className[i].addEventListener('click', function () {
//     this.classList.toggle('example');
//     alert(this.classList);
//   });
// }
