<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Style, Icon } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';


const markerCoordinates = [14.39958667755127, 50.06711959838867]; 

const mapContainer = ref<HTMLDivElement | null>(null);
let map: Map;

// const apiKey = import.meta.env.VITE_APP_MAP_API_KEY;

onMounted(() => {
  if (mapContainer.value) {
    map = new Map({
      target: mapContainer.value,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: `https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=tZlf1fWGAtJUabKHF3iM` ,
          }),
        }),
      ],
      view: new View({
        center: fromLonLat(markerCoordinates),
        zoom: 17,
      }),
      controls: [], // Убираем все элементы управления
    });

    // Создаем маркер
    const marker = new Feature({
      geometry: new Point(fromLonLat(markerCoordinates)),
    });

    // Настраиваем стиль маркера
    marker.setStyle(
      new Style({
        image: new Icon({
          src: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          scale: 1, // Измените размер иконки, если необходимо
        }),
      })
    );

    // Добавляем маркер на карту
    const vectorSource = new VectorSource({
      features: [marker],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    map.addLayer(vectorLayer);
  }
});

// onBeforeUnmount(() => {
//   if (map) {
//     map.setTarget(null);
//   }
// });
</script>

<style scoped>
.map-container {
  width: 1400px;
  height: 504px;
  filter: grayscale(100%); 
}
</style>
