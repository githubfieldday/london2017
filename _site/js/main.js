var map = document.querySelector('.map-container');

if (map) {
  var timer = void 0;
  map.addEventListener('mouseenter', function () {
    timer = setTimeout(function () {
      map.classList.add('is-clickable');
    }, 500);
  });

  map.addEventListener('mouseleave', function () {
    clearTimeout(timer);
    map.classList.remove('is-clickable');
  });
}