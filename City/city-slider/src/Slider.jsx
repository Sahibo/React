// import React, { useState } from 'react';
// import './slider.css';

// function Slider({ images }) {
//   const [currentImage, setCurrentImage] = useState(0);

//   const scroll = (step) => {
//     const newIndex = currentImage + step;

//     if (newIndex >= 0 && newIndex < images.length) {
//       setCurrentImage(newIndex);
//     }
//   };

//   return (
//     <div className="slider-container">
//       <a className="slider-prev" onClick={() => scroll(-1)}>&#10094;</a>
//       <div className="image-container">
//         <img className="image" src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
//       </div>
//       <a className="slider-next" onClick={() => scroll(1)}>&#10095;</a>
//     </div>
//   );
// }

// export default Slider;

// -----------TASK2-----------

import React, { Component } from 'react';
import './slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
    };
  }

  scroll(step) {
    const newIndex = this.state.currentImage + step;

    if (newIndex >= 0 && newIndex < this.props.images.length) {
      this.setState({ currentImage: newIndex });
    }
  }

  render() {
    return (
      <div className="slider-container">
        <a className="slider-prev" onClick={() => this.scroll(-1)}>&#10094;</a>
        <div className="image-container">
          <img
            className="image"
            src={this.props.images[this.state.currentImage]}
            alt={`Image ${this.state.currentImage + 1}`}
          />
        </div>
        <a className="slider-next" onClick={() => this.scroll(1)}>&#10095;</a>
      </div>
    );
  }
}

export default Slider;