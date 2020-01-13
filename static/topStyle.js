import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import TopImg from '../images/top_img';

const svgString = encodeURIComponent(renderToStaticMarkup(<TopImg />));
const background = `url("data:image/svg+xml,${svgString}")`;

export const backGroundStyle = {
  background: background,
  backgroundSize: 'cover'
};

export default <style>{`
  .topWrapper {
    height:880px;
  }
`}</style>;