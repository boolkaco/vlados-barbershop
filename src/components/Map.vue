<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

const mapContainer = ref<HTMLDivElement | null>(null);

const markerCoordinates = [14.39958667755127, 50.06711959838867];

onMounted(() => {
  if (!mapContainer.value) return;

  // Создание карты
  const map = new Map({
    target: mapContainer.value,
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: fromLonLat(markerCoordinates),
      zoom: 18
    })
  });

  // Создание маркера
  const marker = new Feature({
    geometry: new Point(fromLonLat(markerCoordinates))
  });

  marker.setStyle(new Style({
    image: new Icon({
      src: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      anchor: [0.5, 1],
      scale: 1
    })
  }));

  const vectorSource = new VectorSource({
    features: [marker]
  });

  const markerLayer = new VectorLayer({
    source: vectorSource
  });

  map.addLayer(markerLayer);
  
});

</script>

<style scoped>
.map-container {
  height: 504px;
  width: 1400px;
  filter: grayscale(100%);
}
</style>