(function ($, Drupal, once) {
  Drupal.behaviors.movieBannerSlider = {
    attach: function (context) {
      once('movieBannerSlider', '.movie-banner-view', context).forEach(function (slider) {
        $(slider).slick({
          dots: true,
          arrows: true,
          infinite: true,
          speed: 500,
          fade: false,
          cssEase: 'linear',
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 4000
        });
      });

      $('.slick-prev').html('<i class="fa-solid fa-chevron-left"></i>');
      $('.slick-next').html('<i class="fa-solid fa-chevron-right"></i>');
    }
  };
})(jQuery, Drupal, once);
