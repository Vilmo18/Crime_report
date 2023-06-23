import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '400px',
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 48.8566, lng: 2.3522 }} // Coordonnées de Paris, France
      >
        <Marker position={{ lat: 48.8566, lng: 2.3522 }} />{' '}
        {/* Marqueur pour votre position */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '',
})(MapContainer);
