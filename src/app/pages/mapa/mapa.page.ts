import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {

  lat: number;
  lng: number;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    let geo: any = this.route.snapshot.paramMap.get('geo');

    geo = geo.substr(4);
    geo = geo.split(',');

    this.lat = Number(geo[0]);
    this.lng = Number(geo[1]);
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VtaW5hZGVzIiwiYSI6ImNqd3p2Y3cwczE3MHU0M3J2bGRsbm81cHgifQ.99S2uyGFszWTNIwa0PhKbg';

    const geojson = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "message": "Foo",
            "iconSize": [30, 30],
            "description": "<h1>Hola</h1>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              this.lng + 0.001000000000,
              this.lat + 0.001000000000
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "message": "Bar",
            "iconSize": [30, 30],
            "description": "<h1>Chao</h1>"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              this.lng,
              this.lat
            ]
          }
        }
      ]
    };

    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.lng, this.lat],
      zoom: 15.5,
      pitch: 25,
      // bearing: -17.6,
      container: 'map'
    });

    geojson.features.forEach(function (marker) {
      // create a DOM element for the marker
      var el = document.createElement('div');
        el.className = 'marker';
      el.style.backgroundImage = 'url(../assets/Logo.png)';
        el.style.width = marker.properties.iconSize[0] + 'px';
        el.style.height = marker.properties.iconSize[1] + 'px';

      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });

    map.on('load', (marker) => {
      
      map.resize();

      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;

      let labelLayerId;
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      // map.addLayer({
      //   'id': '3d-buildings',
      //   'source': 'composite',
      //   'source-layer': 'building',
      //   'filter': ['==', 'extrude', 'true'],
      //   'type': 'fill-extrusion',
      //   'minzoom': 15,
      //   'paint': {
      //     'fill-extrusion-color': '#aaa',

      //     // use an 'interpolate' expression to add a smooth transition effect to the
      //     // buildings as the user zooms in
      //     'fill-extrusion-height': [
      //       'interpolate', ['linear'], ['zoom'],
      //       15, 0,
      //       15.05, ['get', 'height']
      //     ],
      //     'fill-extrusion-base': [
      //       'interpolate', ['linear'], ['zoom'],
      //       15, 0,
      //       15.05, ['get', 'min_height']
      //     ],
      //     'fill-extrusion-opacity': .6
      //   }
      // }, labelLayerId);
    });
  }
}
