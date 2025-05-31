import { useRef, useEffect } from 'react';
import { OfferPreview, OfferPreviews } from '../../types/offer-types';
import { City, Page } from '../../types/app-types';
import { getMapClasses } from './map-utils';
import { defaultCustomIcon, activeCustomIcon } from './pin-icons';
import useMap from '../../hooks/use-map';
import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export type MapProps = {
  pageType: Page;
  city: City;
  offerPreviews: OfferPreviews;
  hoveredOffer: OfferPreview | null;
};

function Map(props: MapProps): JSX.Element {
  const { pageType, city, offerPreviews, hoveredOffer } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const mapClasses = getMapClasses(pageType);

  const markerLayerRef = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      markerLayerRef.current.addTo(map);
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      markerLayerRef.current.clearLayers();
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
      offerPreviews.forEach((offerPreview) => {
        leaflet
          .marker(
            {
              lat: offerPreview.location.latitude,
              lng: offerPreview.location.longitude,
            },
            {
              icon:
                offerPreview.id === hoveredOffer?.id
                  ? activeCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(markerLayerRef.current);
      });
    }
  }, [map, city, offerPreviews, hoveredOffer]);

  return (
    <section
      className={mapClasses.sectionClass}
      data-testid="map-test-id"
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
