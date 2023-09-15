import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  let [info, setInfo] = useState([1, 2, 3, 4, 5]);

  const handleClick = () => {
    let i = info[info.length - 1] + 1;
    let newArr = [...info, i];
    setInfo(newArr);
  };

  return (
    <div className="App">
      <Header/>
      <Main info={info} setInfo={handleClick} />
      <Footer info={info} setInfo={handleClick} />
    </div>
  );
}



export default App;
