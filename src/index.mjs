import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteText(inputText);
  };

// 未完了リストから指定の要素を削除
const deleteFormIncompleteList = (target) => {
  // removeChild で子要素から指定のものを消す
  document.getElementById("incomplete-list").removeChild(target)
}

// 未完了リストに追加する関数
const createIncompleteText = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // ボタン(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除する
    // parentNode で deleteButton の親ノードを取得する
    deleteFormIncompleteList(deleteButton.parentNode);

    // 完了リストに追加する要素
    // parentNode <div class="list-row">
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    // firstElementChild <li>TODOです</li>, innerText "TODOです"
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    // textContent 特定のノードに対して、ノード内のテキストを文字列で取得
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す"
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget)

      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteText(text);
    })

    // divタグの子要素に書く要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget)
  })

  // ボタン(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除する
    deleteFormIncompleteList(deleteButton.parentNode);
  })

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
