$(function () {
  $('.item_0').show().css('display', 'flex');
  $('.styling-slick').slick({
  }).on('afterChange', function (event, slick, currentIndex) {
    $('ul[class^="item_"]').hide();
    $('.item_' + currentIndex).show().css('display', 'flex');
    history.replaceState(currentIndex, null);
  });

  // �O��̃X���C�h�ʒu�𕜌�
  if (history.state) {
    $('.styling-slick').slick('slickGoTo', history.state);
  }
});
