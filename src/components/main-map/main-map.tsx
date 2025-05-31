import { useRef, useEffect } from 'react';
import { OfferPreview } from '../../types/offer';
import { City } from '../../types/city';
import { URL_PIN_DEFAULT, URL_PIN_ACTIVE } from '../../const';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MainMapProps = {
  city: City;
  offerPreviews: OfferPreview[];
  hoveredOffer: OfferPreview | null;
};

function MainMap(props: MainMapProps): JSX.Element {
  const { city, offerPreviews, hoveredOffer } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const defaultCustomIcon = leaflet.icon({
      iconUrl: URL_PIN_DEFAULT,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const activeCustomIcon = leaflet.icon({
      iconUrl: URL_PIN_ACTIVE,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    if (map) {
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
          .addTo(map);
      });
    }
  }, [map, offerPreviews, hoveredOffer]);

  return <section className="cities__map map" ref={mapRef}></section>;
}

export default MainMap;
