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


// justify-self
const getCssProps = (_searchElm, _target, _styling) => { // (ボタングループ, 表示のターゲット要素, 取得スタイル)
  for (let i = 0; i < resultJustifySelf.length; i++) { // for文で回す
    if (resultJustifySelf[i] = !null) {
      resultJustifySelf[i].addEventListener('click', function () {
        let tx = this.innerText; // ボタンのテキストを取得
        let para = document.querySelector(_target); // セレクターでクラスを取得

        let style = para.style[`${_styling}`]; // styleの中身を設定[CSSのプロパティ]
        style = tx; // ボタンのテキストを値としてセット
        para.style.setProperty(_styling, tx); // styleの中身を設定[CSSのプロパティ, <- ボタンのテキスト]

        let compStyles = window.getComputedStyle(para); // styleの中身を取得
        let r = compStyles[`${_styling}`]; // 最終styleの中身を取得

        console.log(style, r);
      });
    }
  }
};

const resProp = (_searchElm, _target, _styling) => { // (ボタングループ, 表示のターゲット要素, 取得スタイル)
  _res = getSelectorAll(_searchElm); // ボタングループを取得
  getCssProps(_res, _target, _styling); // ターゲットに値を当てる
};

resProp('justifySelf', '.example', "justify-self"); // (ボタングループ, 表示のターゲット要素, 取得スタイル)

/** Example setProperty
 * elem.style.setProperty('color', '#ff0', '');
 * const elem = document.querySelector('.example');
 * elem.style.setProperty('margin-bottom', '30px', 'important');
 */

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
