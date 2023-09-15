// import './App.css';
// import Main from './Main'

// export default function App() {
//   const bookInfo = {
//     author: "Erich Maria Remarque",
//     book: "Arch of Triumph",
//     genre: "War novel",
//     pages: "455 pp",
//     bookImg: "https://kbimages1-a.akamaihd.net/90c6a296-360d-4224-94c6-ebaed193d261/1200/1200/False/arch-of-triumph-3.jpg",
//     authorImg: "https://rgnp.ru/wp-content/uploads/c/9/8/c98a9389c0aca911e7e75dc339857492.jpeg"
//   };
//   return (
//     <div className="App">
//       <h1>My favorite book</h1>
//       <Main bookInfo={bookInfo}/>
//     </div>
//   );
// }

// -----------TASK2-----------

import React, { Component } from 'react';
import './App.css';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookInfo: {
        author: "Erich Maria Remarque",
        book: "Arch of Triumph",
        genre: "War novel",
        pages: "455 pp",
        bookImg: "https://kbimages1-a.akamaihd.net/90c6a296-360d-4224-94c6-ebaed193d261/1200/1200/False/arch-of-triumph-3.jpg",
        authorImg: "https://rgnp.ru/wp-content/uploads/c/9/8/c98a9389c0aca911e7e75dc339857492.jpeg"
      }
    };
  }

  render() {
    return (
      <div className="App">
        <h1>My favorite book</h1>
        <Main bookInfo={this.state.bookInfo} />
      </div>
    );
  }
}

export default App;
