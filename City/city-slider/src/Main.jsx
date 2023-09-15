// import Slider from './Slider'
// import MainInfo from './MainInfo'

// function Main() {
//     return (
//       <div>
//         <MainInfo/>
//         <Slider/>
//       </div>
//     );
// }

// export default Main;

// -----------TASK2-----------

import React, { Component } from 'react';
import Slider from './Slider';
import MainInfo from './MainInfo';

class Main extends Component {
  render() {
    return (
      <div>
        <MainInfo />
        <Slider />
      </div>
    );
  }
}

export default Main;