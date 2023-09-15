import './main.css';

function Main() {
    return (
        <div className="book-container">
            <div className='Info-container'>
                <ul className='Info-list'>
                    <li className='list-item'><h3>Author: </h3> <span>Erich Maria Remarque</span></li>
                    <li className='list-item'><h3>Book: </h3> <span>Arch of Triumph</span></li>
                    <li className='list-item'><h3>Genre: </h3> <span>War novel</span></li>
                    <li className='list-item'><h3>Pages: </h3> <span>455 pp</span></li>
                    <li className='list-item'><h3>Pages: </h3> <span>War novel</span></li>
                </ul>
            </div>

            <div className='img-container'>
                <img className='img' src='https://kbimages1-a.akamaihd.net/90c6a296-360d-4224-94c6-ebaed193d261/1200/1200/False/arch-of-triumph-3.jpg'></img>
                <img className='img' src='https://rgnp.ru/wp-content/uploads/c/9/8/c98a9389c0aca911e7e75dc339857492.jpeg'></img>
            </div>

        </div>
    );
}

export default Main;

// -----------TASK2-----------

// import React, { Component } from 'react';
// import './main.css';

// class Main extends Component {
//   render() {
//     return (
//         <div className="book-container">
//         <div className='Info-container'>
//             <ul className='Info-list'>
//                 <li className='list-item'><h3>Author: </h3> <span>Erich Maria Remarque</span></li>
//                 <li className='list-item'><h3>Book: </h3> <span>Arch of Triumph</span></li>
//                 <li className='list-item'><h3>Genre: </h3> <span>War novel</span></li>
//                 <li className='list-item'><h3>Pages: </h3> <span>455 pp</span></li>
//                 <li className='list-item'><h3>Pages: </h3> <span>War novel</span></li>
//             </ul>
//         </div>

//         <div className='img-container'>
//             <img className='img' src='https://kbimages1-a.akamaihd.net/90c6a296-360d-4224-94c6-ebaed193d261/1200/1200/False/arch-of-triumph-3.jpg'></img>
//             <img className='img' src='https://rgnp.ru/wp-content/uploads/c/9/8/c98a9389c0aca911e7e75dc339857492.jpeg'></img>
//         </div>

//     </div>
//     );
//   }
// }

// export default Main;