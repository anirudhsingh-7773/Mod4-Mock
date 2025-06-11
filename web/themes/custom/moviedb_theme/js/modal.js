(function ($, Drupal, once) {
  Drupal.behaviors.moviePopup = {
    attach: function (context, settings) {
      console.log('moviePopup behavior attached');

      once('moviePopup', '.js-movie-card', context).forEach(function (card) {
        $(card).on('click', function () {
          const $card = $(this);
          $('.js-movie-modal .movie-modal__image').attr('src', $card.data('image'));
          $('.js-movie-modal .movie-modal__title').text($card.data('title'));
          $('.js-movie-modal .movie-modal__date').text($card.data('date'));
          $('.js-movie-modal .movie-modal__description').text($card.data('description'));
          $('.js-movie-modal').fadeIn();
        });
      });

      once('movieClose', '.js-modal-close', context).forEach(function (el) {
        $(el).on('click', function () {
          $('.js-movie-modal').fadeOut();
        });
      });
    }
  };
})(jQuery, Drupal, once);
