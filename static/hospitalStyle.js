import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

import HImg from '../images/hospital_img';

const svgString = encodeURIComponent(renderToStaticMarkup(<HImg />));
const background = `url("data:image/svg+xml,${svgString}")`;

export const hospitalImg = {
  background: background,
  backgroundSize: 'cover',
};

export default <style>{`
    h1{
        color:blue;
    }

    .firstWrapper{
        height:600px;
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
        height: 500px;
    }
`}</style>;
