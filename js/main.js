(function () {
  let lastScrollY = window.pageYOffset; // 前回のスクロール位置を保持
  const header = document.getElementById('header'); // ヘッダーの取得

  // スクロールイベントを監視
  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;

    // 下方向にスクロールしている場合
    if (currentScrollY > lastScrollY) {
      header.classList.remove('header--visible'); // 表示クラスを削除
      header.classList.add('header--hidden'); // 非表示クラスを追加
    } else {
      // 上方向にスクロールしている場合
      header.classList.remove('header--hidden'); // 非表示クラスを削除
      header.classList.add('header--visible'); // 表示クラスを追加
    }

    // 現在のスクロール位置を更新
    lastScrollY = currentScrollY;
  });

  // 1-300までの数字を表示
  const numbersList = document.getElementById('numbers-list');
  for (let i = 1; i <= 300; i++) {
    const li = document.createElement('li'); // <li>タグを作成
    li.textContent = i; // 数字を設定
    numbersList.appendChild(li); // <ul>に追加
  }
})();
