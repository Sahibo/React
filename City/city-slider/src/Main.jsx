// import Slider from './Slider'
// import MainInfo from './MainInfo'

// function Main() {
//   const cityData = {
//     city: "Baku",
//     country: "Azerbaijan",
//     images: [
//       "http://www.bakuchessolympiad.com/files/image/34.jpg",
//       "http://www.bakuchessolympiad.com/files/file/baku21-big.jpg",
//       "http://www.bakuchessolympiad.com/files/image/b8.jpg"
//     ]
//   };
//     return (
//       <div>
//         <MainInfo {...cityData}/>
//         <Slider images={cityData.images} />
//       </div>
//     );
// }

// export default Main;

// -----------TASK2-----------

import React, { Component } from 'react';
import MainInfo from './MainInfo';
import Slider from './Slider';

class Main extends Component {
  render() {
    const cityData = {
      city: "Baku",
      country: "Azerbaijan",
      images: [
        "http://www.bakuchessolympiad.com/files/image/34.jpg",
        "http://www.bakuchessolympiad.com/files/file/baku21-big.jpg",
        "http://www.bakuchessolympiad.com/files/image/b8.jpg"
      ]
    };

    return (
      <div>
        <MainInfo {...cityData} />
        <Slider images={cityData.images} />
      </div>
    );
  }
}

export default Main;