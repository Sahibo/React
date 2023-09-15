// function MainInfo(props) {
//     return (
//       <div>
//         <h1>Country: {props.country}</h1>
//         <h2>City: {props.city}</h2>
//       </div>
//     );
// }
  
// export default MainInfo;

// -----------TASK2-----------

import React, { Component } from 'react';

class MainInfo extends Component {
  render() {
    return (
      <div>
        <h1>Country: {this.props.country}</h1>
        <h2>City: {this.props.city}</h2>
      </div>
    );
  }
}

export default MainInfo;
