import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Body from './body';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//classNameでcssを指定
// var Index = React.Component({
//   render(){
//     return (
//       <div className="style">
//         <h1>ボディです</h1>
//       </div>
//     );
//   }
// });

ReactDOM.render(
  <Body />,
  document.getElementById('content')
);

// if(module.hot){
//   module.hot.accept('./App', ()=>{
//     const NextApp = require('./App').default;
//     render(NextApp);
//   });
// }

// ReactDOM.hydrate(
//   <App />,
//   document.getElementById('root')
// );
