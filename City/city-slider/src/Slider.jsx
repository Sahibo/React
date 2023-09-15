// import './slider.css'
// import React, { useState } from 'react';

// function Slider() {
//   const imageUrls = [
//     "http://www.bakuchessolympiad.com/files/image/34.jpg",
//     "http://www.bakuchessolympiad.com/files/file/baku21-big.jpg",
//     "http://www.bakuchessolympiad.com/files/image/b8.jpg"
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   const scroll = (step) => {
//     const newIndex = currentImage + step;

//     if (newIndex >= 0 && newIndex < imageUrls.length) {
//       setCurrentImage(newIndex);
//     }
//   };

//   return (
//     <div className="slider-container">
//       <a className="slider-prev" onClick={() => scroll(-1)}>&#10094;</a>
//       <div className="image-container">
//         <img className="image" src={imageUrls[currentImage]} alt={`Image ${currentImage + 1}`} />
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
      imageUrls: [
        "http://www.bakuchessolympiad.com/files/image/34.jpg",
        "http://www.bakuchessolympiad.com/files/file/baku21-big.jpg",
        "http://www.bakuchessolympiad.com/files/image/b8.jpg"
      ],
      currentImage: 0
    };
  }

  scroll = (step) => {
    const { currentImage, imageUrls } = this.state;
    const newIndex = currentImage + step;

    if (newIndex >= 0 && newIndex < imageUrls.length) {
      this.setState({ currentImage: newIndex });
    }
  };

  render() {
    const { currentImage, imageUrls } = this.state;
    return (
      <div className="slider-container">
        <a className="slider-prev" onClick={() => this.scroll(-1)}>&#10094;</a>
        <div className="image-container">
          <img className="image" src={imageUrls[currentImage]} alt={`Image ${currentImage + 1}`} />
        </div>
        <a className="slider-next" onClick={() => this.scroll(1)}>&#10095;</a>
      </div>
    );
  }
}

export default Slider;