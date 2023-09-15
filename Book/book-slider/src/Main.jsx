// import './main.css';

// function Main(props) {
//     return (
//         <div className="book-container">
//             <div className='Info-container'>
//                 <ul className='Info-list'>
//                     <li className='list-item'><h3>Author: </h3> <span>{props.bookInfo.author}</span></li>
//                     <li className='list-item'><h3>Book: </h3> <span>{props.bookInfo.book}</span></li>
//                     <li className='list-item'><h3>Genre: </h3> <span>{props.bookInfo.genre}</span></li>
//                     <li className='list-item'><h3>Pages: </h3> <span>{props.bookInfo.pages}</span></li>
//                 </ul>
//             </div>

//             <div className='img-container'>
//                 <img className='img' src={props.bookInfo.bookImg}></img>
//                 <img className='img' src={props.bookInfo.authorImg}></img>
//             </div>

//         </div>
//     );
// }

// export default Main;

// -----------TASK2-----------

import React, { Component } from 'react';
import './main.css';

class Main extends Component {
  render() {
    const { bookInfo } = this.props;

    return (
      <div className="book-container">
        <div className='Info-container'>
          <ul className='Info-list'>
            <li className='list-item'><h3>Author: </h3> <span>{bookInfo.author}</span></li>
            <li className='list-item'><h3>Book: </h3> <span>{bookInfo.book}</span></li>
            <li className='list-item'><h3>Genre: </h3> <span>{bookInfo.genre}</span></li>
            <li className='list-item'><h3>Pages: </h3> <span>{bookInfo.pages}</span></li>
          </ul>
        </div>

        <div className='img-container'>
          <img className='img' src={bookInfo.bookImg} alt="Book Cover" />
          <img className='img' src={bookInfo.authorImg} alt="Author" />
        </div>
      </div>
    );
  }
}

export default Main;