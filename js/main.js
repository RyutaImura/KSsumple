(function() {
    let lastScrollY = window.pageYOffset;  // 前回のスクロール位置
    const header = document.getElementById('header');
  
    window.addEventListener('scroll', () => {
      const currentScrollY = window.pageYOffset;
      // 下方向にスクロールしている場合
      if (currentScrollY > lastScrollY) {
        header.classList.remove('header--visible');
        header.classList.add('header--hidden');
      } else {
        // 上方向にスクロールしている場合
        header.classList.remove('header--hidden');
        header.classList.add('header--visible');
      }
      // 次回判定用にスクロール位置を更新
      lastScrollY = currentScrollY;
    });
  })();
  