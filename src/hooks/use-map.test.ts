import { renderHook } from '@testing-library/react';
import leaflet from 'leaflet';
import { Cities } from '../const/app-const';
import useMap from './use-map';

describe('Hook: useMap', () => {
  let mockMapRef = {
    current: document.createElement('div'),
  };
  const mockCity = Cities.Paris;

  beforeEach(() => {
    mockMapRef = {
      current: document.createElement('div'),
    };
  });

  it('should return a Leaflet Map instance', () => {
    const { result } = renderHook(() => useMap(mockMapRef, mockCity));

    expect(result.current).toBeInstanceOf(leaflet.Map);
  });

  it('should initialize map with correct city location', () => {
    const { result } = renderHook(() => useMap(mockMapRef, mockCity));

    if (result.current) {
      const center = result.current.getCenter();
      const zoom = result.current.getZoom();

      expect(center.lat).toBe(mockCity.location.latitude);
      expect(center.lng).toBe(mockCity.location.longitude);
      expect(zoom).toBe(mockCity.location.zoom);
    } else {
      throw new Error('Map instance is null');
    }
  });
});
