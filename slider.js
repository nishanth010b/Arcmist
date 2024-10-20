$(".archives_layout").each(function (index) {
    const swiper = new Swiper($(this).find('.swiper')[0], {
        speed: 800,
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 12,
        breakpoints: {
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            }},
        followFinger: false,
        pagination: {
            el: $(this).find(".slider_bullet_wrap")[0],
            bulletActiveClass: "is-active",
            bulletClass: "slider_bullet",
            clickable: true
        },
        scrollbar: {
            el: '.archives_slider_bar_wrap',
            draggable: true,
            dragClass: "archives_slider_bar",
            snapOnRelease: true,
          },
    })
  });