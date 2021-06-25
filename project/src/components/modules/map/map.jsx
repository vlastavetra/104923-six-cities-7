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
  const {offers, selectedPoint} = props;
  const mapRef = useRef(null);
  const city = offers[0].city.location;
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon: (offer.id === selectedPoint.id)
                ? currentCustomIcon
                : defaultCustomIcon,
            },
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return (
    <section
      ref={mapRef}
      style={{height: '100%'}}
      id='map'
      className='cities__map map'
    />
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  selectedPoint: PropTypes.number,
};

export default Map;
