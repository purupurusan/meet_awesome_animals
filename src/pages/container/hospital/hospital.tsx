import React from "react";
import Layout from "../../../layouts/layout";
import hospitalStyle, { hospitalImg } from "../../../styles/hospitalStyle";
//import LiveMap from "../../../components/map/map";

/* eslint require-jsdoc: 2*/
const Hospital: React.FC = () => (
  <Layout>
    {hospitalStyle}
    <div className="firstWrapper" style={hospitalImg}>
      <table className="favoriteList">
        <tbody>
          <tr>
            <th>favorite list</th>
            <th>TEL</th>
          </tr>
          <tr>
            <td>最強病院</td>
            <td className="num">03-1111-2222</td>
          </tr>
          <tr>
            <td>無敵病院</td>
            <td className="num">03-3333-4444</td>
          </tr>
          <tr>
            <td>虚空病院</td>
            <td className="num">03-5555-6666</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="secondWrapper">
      <form className="search">
        <input
          type="search"
          className="s byName"
          placeholder="  名前から探す"
        />
        <input type="submit" className="submit" value="search" />
      </form>
      <form className="search">
        <input type="submit" className="s fromHere" value="現在地から探す" />
      </form>
    </div>
    <div className="thirdWrapper">
      <h1>reservation</h1>
    </div>
  </Layout>
);

export default Hospital;
