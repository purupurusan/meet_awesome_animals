import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import HImg from "../../images/hospital_img";

const svgString = encodeURIComponent(renderToStaticMarkup(<HImg />));
const background = `url("data:image/svg+xml,${svgString}")`;

export const hospitalImg = {
  background: background,
  backgroundSize: "cover"
};

export default (
  <style>{`
    h1{
        color:blue;
    }

    .firstWrapper{
        height:650px;
        position: relative;
    }

    .favoriteList{
        width:30%;
        font-size: 120%;
        position: absolute;
        top:10%;
        left:10%;
        background: rgba(255, 255, 255,0.5);
        border-radius: 20px 20px 20px 20px;
        border-spacing:10px;
    }

    tr{
        text-align: center;
    }

    th{
        border-bottom: solid 2px white;
    }

    .num{
        color: blue;
        text-decoration: underline;
    }

    .secondWrapper{
        height: 100px;
        padding: 5% 5%;
        text-align: center;
    }

    .search{
        display: inline-block;
        margin: 0 auto;
        width: 50%;
        height: 100px;
    }

    .s{
        -webkit-appearance: none;
        width: 80%;
        height:80px;
        font-size:150%;
    }

    .byName{
        border: solid 4px #ff7c5c;
        border-radius: 20px 0 0 20px;
        margin-right: 0;
    }

    .fromHere{
        background-color: #ff7c5c;
        color: white;
        border-radius: 20px;
    }

    .submit{
        -webkit-appearance: none;
        height:80px;
        font-size:150%;
        background-color: #ff7c5c;
        color: white;
        border-radius: 0 20px 20px 0;
        border-left: solid 1px #ff7c5c;
        margin-left: 0;
        vertical-align:top;
    }

    .thirdWrapper{
        height: 2000px;
    }

    .hospitalTable{
        padding: 3% 10%;
        width: 100%;
    }

    .hopitalList{
        padding:5% 10%;
    }

`}</style>
);
