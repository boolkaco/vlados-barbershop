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

const data = ref<any>(null);

// const apiKey = import.meta.env.VITE_APP_MAP_API_KEY;

onMounted(async () => {
  try {
    const response = await fetch('/data.json');
    if (response.ok) {
      data.value = await response.json();
      if (mapContainer.value && data.value != null) {
        map = new Map({
          target: mapContainer.value,
          layers: [
            new TileLayer({
              source: new XYZ({
                url: data.value.map,
              }),
            }),
          ],
          view: new View({
            center: fromLonLat(markerCoordinates),
            zoom: 17,
          }),
          controls: [],
        });

        const marker = new Feature({
          geometry: new Point(fromLonLat(markerCoordinates)),
        });

        marker.setStyle(
            new Style({
              image: new Icon({
                src: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                scale: 1,
              }),
            })
        );

        const vectorSource = new VectorSource({
          features: [marker],
        });

        const vectorLayer = new VectorLayer({
          source: vectorSource,
        });

        map.addLayer(vectorLayer);
      }
    } else {
      console.error('Failed to fetch data.json');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
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
