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
  div.appendChild(p);
  li.appendChild(div);
  const ul = document.getElementById("imcomplete-list");
  ul.appendChild(li);
  console.log(ul);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
