import React, {Component} from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import hospitalStyle, {hospitalImg} from '../../../static/hospitalStyle';

/* eslint require-jsdoc: 2*/
class Hospital extends Component {
  render() {
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

