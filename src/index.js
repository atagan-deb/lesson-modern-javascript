import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの文字列を変数に格納
  // テキストボックスの文字列を空にする
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // DOMタグの作成
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "list-text";
  p.innerText = text;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    const todoText = addTarget.firstElementChild.innerText;
    // 押された完了ボタンの祖父母タグを未完了リストからコピー＆削除
    deleteFromIncompleteList(addTarget.parentNode);

    addTarget.textContent = null;
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.className = "list-text";
    p.innerText = todoText;
    const backButton = document.createElement("button");
    backButton.innerText = "戻る";

    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      const deleteTargetText = deleteTarget.firstElementChild.innerText;
      document
        .getElementById("complete-list")
        .removeChild(deleteTarget.parentNode);
      createIncompleteList(deleteTargetText);
    });
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    li.appendChild(addTarget);
    document.getElementById("complete-list").appendChild(li);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの祖父母タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // リストに追加
  const ul = document.getElementById("incomplete-list");
  ul.appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
