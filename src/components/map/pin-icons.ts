import leaflet from 'leaflet';

const URL_PIN_DEFAULT = '/img/pin.svg';
const URL_PIN_ACTIVE = '/img/pin-active.svg';

export const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_PIN_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const activeCustomIcon = leaflet.icon({
  iconUrl: URL_PIN_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
