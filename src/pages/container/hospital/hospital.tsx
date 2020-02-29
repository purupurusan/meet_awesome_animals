/* eslint-disable require-jsdoc */
/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import Layout from "../../../layouts/layout";
import hospitalStyle, { hospitalImg } from "../../../styles/hospitalStyle";
import Link from "next/link";
import HospitalGetter from "../../../components/dbConnect/hospitalGetter";
/* eslint require-jsdoc: 2*/
require("dotenv").config();

const hg = new HospitalGetter();

const dbHost: string = process.env.DB_HOST || "";
const dbUser: string = process.env.USER || "";
const dbPassword: string = process.env.PASSWORD || "";
const dbDatabase: string = process.env.DATABASE || "";

hg.connect(dbHost, dbUser, dbPassword, dbDatabase);
const nowlon = 139.3374233;
const nowlat = 35.7110031;
const rows = hg.getNearHospital(nowlon, nowlat, 600.0);
rows.then(function(resolve: Hospital[]) {
  console.log(resolve[0]);
});

interface Hospital {
  name: string;
  parse_source: string;
  address: string;
  tell: string;
  lon: number;
  lat: number;
  homepage: string;
}

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
      <table className="hospitalTable">
        <tbody>
          <tr>
            <td className="hopitalList">
              <Link href="/">
                <a>name</a>
              </Link>
              <p>address</p>
              <p>TEL</p>
            </td>
            <td className="hopitalList">
              <Link href="/">
                <a>name</a>
              </Link>
              <p>address</p>
              <p>TEL</p>
            </td>
          </tr>
          <tr>
            <td className="hopitalList">
              <Link href="/">
                <a>name</a>
              </Link>
              <p>address</p>
              <p>TEL</p>
            </td>
            <td className="hopitalList">
              <Link href="/">
                <a>name</a>
              </Link>
              <p>address</p>
              <p>TEL</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
);

export default Hospital;
