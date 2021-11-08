import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import classes from './GoogleMap.module.css';

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '400px',
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <div style={containerStyle}>
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={15}
          // style={containerStyle}
          className={classes.MapContainer}
          initialCenter={{
            lat: 13.9054371,
            lng: 100.5169084,
          }}
          streetViewControl={false}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Grablepro Office'}
            description={'Grablepro Showroom and Product display'}
            url={'https://goo.gl/maps/Y3kwbNMUpK2cGEkz7'}
            position={{ lat: 13.9054371, lng: 100.5169084 }}
          />
          <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
            <div className={classes.Info}>
              <h3>{this.state.selectedPlace.name}</h3>
              <p>{this.state.selectedPlace.description}</p>
              <a href={this.state.selectedPlace.url}>Go to map!!</a>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
})(MapContainer);
