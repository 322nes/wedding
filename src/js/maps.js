export const initMap = (() => {
  const center = [55.87572521856528, 37.436384970775734];

  function init() {
    let map = new ymaps.Map('map', {
      center: center,
      zoom: 15
    });

    let placemark = new ymaps.Placemark(center, {}, {});

    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');
    map.behaviors.disable(['scrollZoom']);
    map.geoObjects.add(placemark);
  }

  return {
    start: () => ymaps.ready(init)
  };
})();
