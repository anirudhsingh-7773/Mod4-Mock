(function ($, Drupal, once) {
  Drupal.behaviors.movieModalBehavior = {
    attach: function (context) {
      once('movieModalClick', '.js-movie-card', context).forEach(function (card) {
        $(card).on('click', function () {
          const $card = $(this);
          const $modal = $('#movieModal');

          const title = $card.data('title') || '';
          const imageUrl = $card.data('image') || '';
          const description = $card.data('description') || '';
          const link = $card.data('link') || '#';
          const date = $card.data('date') || '';
          const genre = $card.data('genre') || '';
          const subgenre = $card.data('subgenre') || '';
          const genres = [genre, subgenre].filter(Boolean).join(', ');
          
          $modal.find('.movie-modal__title').text(title);
          $modal.find('.js-movie-modal-bg').attr('src', imageUrl);
          $modal.find('.movie-modal__date').text(`(${date})`);
          $modal.find('.movie-modal__description').text(description);
          $modal.find('.js-movie-link').attr('href', link);
          $modal.find('.movie-modal__genres').text(genres);

          const bsModal = bootstrap.Modal.getOrCreateInstance($modal[0]);
          bsModal.show();
        });
      });
    }
  };
})(jQuery, Drupal, once);
