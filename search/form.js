$(document).ready(function() {
  $('.js-tooltip[data-position="left"]').tooltipster({
    animation: 'grow',
    delay: 200,
    contentAsHTML: true,
    trigger: 'hover',
    position: 'left',
    interactive: true,
    functionInit: function() {
      return $(this).find('.tooltip').html();
    }
  });

  $('.js-tooltip[data-position="top"]').tooltipster({
    animation: 'grow',
    delay: 200,
    contentAsHTML: true,
    trigger: 'hover',
    position: 'top',
    interactive: true,
    functionInit: function() {
      return $(this).find('.tooltip').html();
    }
  });
});