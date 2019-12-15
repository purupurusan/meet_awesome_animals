import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import TopImg from './images/top_img';

const svgString = encodeURIComponent(renderToStaticMarkup(<TopImg />));
const background = `url("data:image/svg+xml,${svgString}")`;

const TopWrapper = () => (
  <div className = "topWrapper" style={{
    background: background,
    backgroundSize: 'cover'
  }}>
    <style jsx>{`
      .topWrapper {
          height:700px;
      }
        `}</style>
  </div>
);

export default TopWrapper;