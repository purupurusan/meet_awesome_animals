import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Header from '../common/header';
import Footer from '../common/footer';
import hospitalStyle, { hospitalImg } from '../../../static/hospitalStyle';

class Hospital extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  };
  state = {
    inBrowser: false
  };

  componentDidMount() {
    this.setState({ inBrowser: true });
  }
  render() {
    if (!this.state.inBrowser) {
      return null;
    }
    const position = [this.state.lat, this.state.lng];
    return (
      <>
        <Header />
        <div className='firstWrapper' style={hospitalImg}>
          <table className='favoriteList'>
            <tbody>
              <tr>
                <th>favorite list</th>
                <th>TEL</th>
              </tr>
              <tr>
                <td>最強病院</td>
                <td className='num'>03-1111-2222</td>
              </tr>
              <tr>
                <td>無敵病院</td>
                <td className='num'>03-3333-4444</td>
              </tr>
              <tr>
                <td>虚空病院</td>
                <td className='num'>03-5555-6666</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='secondWrapper'>
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        </div>
        <div className='thirdWrapper'>
          <h1>reservation</h1>
        </div>
        <Footer />
        {hospitalStyle}
      </>
    );
  }
}

export default Hospital;
