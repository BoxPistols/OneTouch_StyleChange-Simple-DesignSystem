const getCssProps = (_searchElm, _target, _styling) => { // (ボタングループ, 表示のターゲット要素, 取得スタイル)
  for (let i = 0; i < _searchElm.length; i++) { // for文で回す
    if (_searchElm[i] = !null) {
      _searchElm[i].addEventListener('click', function () {

        let tx = this.innerText; // ボタンのテキストを取得
        let para = document.querySelector(_target); // セレクターでクラスを取得

        let style = para.style[`${_styling}`]; // styleの中身を設定[CSSのプロパティ]
        style = tx; // ボタンのテキストを値としてセット
        para.style.setProperty(_styling, tx); // styleの中身を設定[CSSのプロパティ, <- ボタンのテキスト]

        // コードの可視化
        let codeAll = window.getComputedStyle(container);
        let codeAllselfElement = window.getComputedStyle(selfElement)

        let getCssResult = (
          "{" + "\n" +
          "justify-content: " + codeAll.justifyContent + ";" + "\n" +
          "align-items: " + codeAll.alignItems + ";" + "\n" +
          "flex-direction: " + codeAll.flexDirection + ";" + "\n" +
          "flex-wrap: " + codeAll.flexWrap + ";" + "\n" +
          "place-items: " + codeAll.placeItems + ";" + "\n"
        )
        let getCssResultSelf = (
          "\n" +
          "justify-self: " + codeAllselfElement.justifySelf + ";" + "\n" +
          "align-self: " + codeAllselfElement.alignSelf + ";" + "\n" +
          "}"
        )
        resultCssCode.innerText = getCssResult + getCssResultSelf;

        // Debug
        let compStyles = window.getComputedStyle(para); // styleの中身を取得
        let result = compStyles[`${_styling}`]; // 最終styleの中身を取得
        console.log(style, result); // 当てにいっているスタイル, 最終styleの中身
      });
    }
  }
};

const getSelectorAll = (x) => {
  return document.querySelectorAll(`.buttons.${x} > button`);
};

const resProp = (_searchElm, _target, _styling) => { // (ボタングループ, 表示のターゲット要素, 取得スタイル)
  _res = getSelectorAll(_searchElm); // ボタングループを取得
  getCssProps(_res, _target, _styling); // ターゲットに値を当てる
};

resProp('justifyContent', '.container', "justify-content"); // (ボタングループ, 表示のターゲット要素, 取得スタイル)
resProp('alignItems', '.container', "align-items");
resProp('flexDirection', '.container', "flex-direction");
resProp('justifySelf', '.element', "justify-self");
resProp('alignSelf', '.element', "align-self");
resProp('flexWrap', '.container', "flex-wrap");
resProp('placeItems', '.container', "place-items");


// ======= Main Result View Container Element =======
const container = document.querySelector(".container");
const selfElement = document.querySelector(".selfElement");

// ======= Reseult Text Grid =======
const resultGrid = document.querySelector('.resultGrid');
const resultCssCode = document.querySelector('.resultCssCode');

// ======= Reset =======
const reset = document.querySelector(".reset");

reset.addEventListener('click', function () {
  resultGrid.innerText = "flex";
  resultCssCode.innerText = ""
  // remove inline Style
  function removeStyles(container) {
    container.removeAttribute('style');
    if (container.childNodes.length > 0) {
      for (let child in container.childNodes) {
        /* filter containerement nodes only */
        if (container.childNodes[child].nodeType == 1)
          removeStyles(container.childNodes[child]);
      }
    }
  }
  removeStyles(container)
});

//  ======= Change Grid =======


const setGridValue = (_tergetGridElem, _gridValue) => {
  _tergetGridElem.addEventListener('click', function () {
    container.style.setProperty('display', _gridValue);
    resultGrid.innerText = window.getComputedStyle(container).display;
  });
}

const changeGridSetting = (_targetGridElem, _gridValue) => {
  _targetGridElem = document.querySelector(_targetGridElem);
  setGridValue(_targetGridElem, _gridValue);
};
changeGridSetting(".displayGrid", "grid");
changeGridSetting(".displayFlex", "flex");


// ======= Girid Pattern　

const getTargetVal = (_val) => {
  container.style.setProperty('grid-template-columns', _val);
}

const gridNone = document.querySelector(".grid-none-repeat");
gridNone.addEventListener('click', function () {
  getTargetVal('none');
});

const gridRepeat3 = document.querySelector(".grid-repeat-3");
gridRepeat3.addEventListener('click', function () {
  getTargetVal('repeat(3, auto)');
});

const gridRepeat4 = document.querySelector(".grid-repeat-4");
gridRepeat4.addEventListener('click', function () {
  getTargetVal('repeat(4, auto)');
});

const gridAutoFit120 = document.querySelector(".grid-auto-fit-120");
gridAutoFit120.addEventListener('click', function () {
  getTargetVal('repeat(auto-fit, minmax(120px, 1fr))');
});


//  ======= Toggle Code =======
var trigger = document.querySelector('.toggle-code-trigger');
trigger.addEventListener('click', function () {
  var target = document.querySelector('.resultCssCode');
  target.classList.toggle("showCodeToggle")
}, false);

// Import Test
async function main(x, y) {
  const { myutil } = await import('./module.js');
  var ret = myutil(x, y);
  console.log(ret);
} 0
main(12, 7)



/** Code Memo ==========================================================
 * @see: 
 *    https://developer.mozilla.org/ja/docs/Web/API/Element
 *    https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Grid_Layout
 *    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
 * /
  
/** Get Grid & Toggle
 const displayGrid = document.querySelector(".displayGrid");
 const displayFlex = document.querySelector(".displayFlex");
 container.style.setProperty('display', 'flex');
 container.style.setProperty('display', 'grid');
 displayFlex.addEventListener('click', function () {
   container.style.setProperty('display', "flex");
 });
*/

/** ==========================================================
  * 元のjQuery
  $("button:not(.remove)").on("click", function () {
    $(".selfElement").css("justify-self", $(this).text());
  }); 
*/

/** ==========================================================
 * ======= setProperty selfElement =======
 * elem.style.setProperty('color', '#ff0', '');
 * const elem = document.querySelector('.selfElement');
 * elem.style.setProperty('margin-bottom', '30px', 'important');
 */

/** ==========================================================
 * TODO: 汎用関数化
 *    ファイル分割
 *
 * TODO: React化
 *    useStateでボタンのテキストを取得、index.innerText?
 *    実際のクラスターゲットに値を当てる
 * 
 * TODO: 付加機能
 *    ClipBoard
 * 
 * DONE: jQuery to Vanilla
 */