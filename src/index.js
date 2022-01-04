import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの文字列を変数に格納
  // テキストボックスの文字列を空にする
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // DOMタグの作成
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "list-text";
  p.innerText = inputText;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // リストに追加
  const ul = document.getElementById("imcomplete-list");
  ul.appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
