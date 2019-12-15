import React from 'react';
import ReactDOM from 'react-dom';

import Header from './container/common/header';
import Footer from './container/common/footer';
import TopImage from './container/topImage/top';

const IndexBody = () =>(
  <div>
    <Header></Header>
    <TopImage></TopImage>
    <Footer></Footer>
  </div>
);

ReactDOM.render(
  <IndexBody />,
  document.getElementById('body')
);

