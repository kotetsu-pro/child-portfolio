$(function () {


  // ハンバーガーメニュー
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });


  $(".hamburger-menu a").on("click", function () {
    $("header").removeClass("open");
  });

  // 背景

  const bg = document.getElementById("bg-fixed");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const newBg = entry.target.dataset.bg;

        gsap.to(bg, {
          opacity: 0, duration: 0.3, onComplete() {
            bg.style.backgroundImage = `url(${newBg})`;
            gsap.to(bg, { opacity: 1, duration: 0.3 });
          }
        });
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".section").forEach(sec => {
    observer.observe(sec);
  });

  // favorite

const FavoriteSwiper = new Swiper('.favorite-slide', {
  loop: true,
  slidesPerView: 1.3,
  spaceBetween: 10,
  speed: 600,
  initialSlide: 1, // ← これがポイント（2枚目を初期表示）
    navigation: {
    nextEl: '.favorite-next',
    prevEl: '.favorite-prev',
  },
});



});