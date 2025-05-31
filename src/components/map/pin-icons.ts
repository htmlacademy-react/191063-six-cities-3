import leaflet from 'leaflet';

const URL_PIN_DEFAULT = '../../../public/img/pin.svg';
const URL_PIN_ACTIVE = '../../../public/img/pin-active.svg';

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

export { defaultCustomIcon, activeCustomIcon };
