import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../hooks/useMap';

const DEFAULT_ICON = 'img/pin.svg';
const CURREN_ICON = 'img/pin-active.svg';
const ICON_SIZE = [30, 30];
const ICON_ANCHOR = [15, 30];

const defaultCustomIcon = leaflet.icon({
  iconUrl: DEFAULT_ICON,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
});

const currentCustomIcon = leaflet.icon({
  iconUrl: CURREN_ICON,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
});

function Map(props) {
  const {offers, selectedPointId} = props;
  const mapRef = useRef(null);
  const cityLocation = offers[0].city.location;
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    const layerGroup = new leaflet.LayerGroup();

    if (map) {
      offers.forEach((offer) => {
        const marker = leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon: (offer.id === selectedPointId)
                ? currentCustomIcon
                : defaultCustomIcon,
            },
          );
        layerGroup.addLayer(marker);
      });
      layerGroup.addTo(map);
    }
    return () => layerGroup.removeFrom(map);
  }, [map, offers, selectedPointId]);

  return (
    <div
      ref={mapRef}
      style={{height: '100%'}}
      id='map'
    />
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  selectedPointId: PropTypes.number,
};

export default Map;
