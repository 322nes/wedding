// loader
const loader = (() => {
  const loaderElement = document.querySelector('#loader');

  const hideLoader = () => {
    setTimeout(() => {
      loaderElement.classList.add('preloader-hidden');
    }, 1000);
  };

  window.addEventListener('load', hideLoader);

  return {};
})();

export { loader };


// Audio
let audioplay = document.querySelector('.audioplay');
let audioBtn = document.querySelector('.audioplay__btn');
let audio = document.querySelector('.audioplay__audio');

audioplay.addEventListener('click', e => {
  audioplay.classList.toggle('paused');
  audio.paused ? audio.play() : audio.pause();
})

window.onfocus = function () {
  audioplay.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function () {
  audio.pause()
}

////////////////////////////// YANDEX MAPS //////////////////////////////

const center = [55.87572521856528, 37.436384970775734]; // координаты на карте

function init() {
  let map = new ymaps.Map('map', {
    center: center, // положение точки на карте
    zoom: 15 // отдаленность
  });

  let placemark = new ymaps.Placemark(center, {}, {});

  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark);
}

ymaps.ready(init);