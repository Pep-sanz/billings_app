'use client'; // Jika menggunakan Next.js App Router

import React, { useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Style, Icon } from 'ol/style';

const OpenLayersMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Data marker
    const locations = [
      { id: 1, lat: -6.2, lon: 106.816666, title: 'Jakarta' },
      { id: 2, lat: -6.914744, lon: 107.60981, title: 'Bandung' },
      { id: 3, lat: -7.250445, lon: 112.768845, title: 'Surabaya' },
      { id: 4, lat: -8.65, lon: 115.216667, title: 'Denpasar' },
    ];

    // Convert locations to OpenLayers features
    const features = locations.map((location) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([location.lon, location.lat])),
        title: location.title,
      });
      feature.setStyle(
        new Style({
          image: new Icon({
            src: '/icons/location-dot.svg',
            scale: 0.1, // Skala ikon (0.1 untuk lebih kecil)
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            anchor: [0.5, 46],
          }),
        }),
      );
      return feature;
    });

    // Vector layer untuk marker
    const vectorSource = new VectorSource({
      features: features,
    });
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Inisialisasi map
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([106.816666, -6.2]), // Koordinat awal (Jakarta)
        zoom: 6,
      }),
    });

    return () => {
      map.setTarget(undefined); // Bersihkan target ketika komponen di-unmount
    };
  }, []);

  return <div ref={mapRef} className="w-full h-[300px]" />;
};

export default OpenLayersMap;
