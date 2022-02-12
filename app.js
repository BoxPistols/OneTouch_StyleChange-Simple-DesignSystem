/**
 * TODO: 汎用関数化
 *
 * TODO: React化
 *    useStateでボタンのテキストを取得、index.innerText?
 *    実際のクラスターゲットに値を当てる
 *
 * DONE: jQuery to Vanilla
 */

const getSelectorAll = (x) => {
  return document.querySelectorAll(`.buttons.${x} > button`);
};

// justify-self
const getCssProps = (_searchElm, _target, _styling) => { // (ボタングループ, 表示のターゲット要素, 取得スタイル)
  for (let i = 0; i < _searchElm.length; i++) { // for文で回す
    if (_searchElm[i] = !null) {
      _searchElm[i].addEventListener('click', function () {
        let tx = this.innerText; // ボタンのテキストを取得
        let para = document.querySelector(_target); // セレクターでクラスを取得

        let style = para.style[`${_styling}`]; // styleの中身を設定[CSSのプロパティ]
        style = tx; // ボタンのテキストを値としてセット
        para.style.setProperty(_styling, tx); // styleの中身を設定[CSSのプロパティ, <- ボタンのテキスト]

        let compStyles = window.getComputedStyle(para); // styleの中身を取得
        let result = compStyles[`${_styling}`]; // 最終styleの中身を取得

        console.log(style, result); // 当てにいっているスタイル, 最終styleの中身
      });
    }
  }
};

const resProp = (_searchElm, _target, _styling) => { // (ボタングループ, 表示のターゲット要素, 取得スタイル)
  _res = getSelectorAll(_searchElm); // ボタングループを取得
  getCssProps(_res, _target, _styling); // ターゲットに値を当てる
};

resProp('justifyContent', '.container', "justify-content");
resProp('alignItems', '.container', "align-items");
resProp('justifySelf', '.example', "justify-self"); // (ボタングループ, 表示のターゲット要素, 取得スタイル)
resProp('alignSelf', '.example', "align-self");


/** ==========================================================
  * 元のjQuery
  $("button:not(.remove)").on("click", function () {
    $(".example").css("justify-self", $(this).text());
  }); 
*/


/** ==========================================================
 * ======= setProperty example =======
 * elem.style.setProperty('color', '#ff0', '');
 * const elem = document.querySelector('.example');
 * elem.style.setProperty('margin-bottom', '30px', 'important');
 */
