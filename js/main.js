(function () {
  let lastScrollY = window.pageYOffset;
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;
    if (currentScrollY > lastScrollY) {
      header.classList.remove('header--visible');
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
      header.classList.add('header--visible');
    }
    lastScrollY = currentScrollY;
  });

  // カルーセルスライダー
  let currentIndex = 0;
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  const nextBtn = document.querySelector('.arrow-right');
  const prevBtn = document.querySelector('.arrow-left');
  let autoSlide = setInterval(nextSlide, 5000);
  let userInteracted = false; // ユーザーが矢印をクリックしたかを判定

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
  }

  function stopAutoSlide() {
    if (!userInteracted) {
      clearInterval(autoSlide); // 自動スライドを停止
      userInteracted = true; // 以降、stopAutoSlide() は呼ばれなくなる
    }
  }

  nextBtn.addEventListener('click', () => { nextSlide(); stopAutoSlide(); });
  prevBtn.addEventListener('click', () => { prevSlide(); stopAutoSlide(); });

  // 1〜300の数字リストを生成
  const numbersList = document.getElementById('numbers-list');
  for (let i = 1; i <= 300; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    numbersList.appendChild(li);
  }
})();
