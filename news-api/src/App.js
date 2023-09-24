import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import News from './News';

function App() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    async function fetchData() {
      const apiKey = '8fa592befbad4e34bd2c9132a78f9875'
      const url = 'https://newsapi.org/v2/top-headlines?' +
      'sources=bbc-news&' +
      `apiKey=${apiKey}`


      const response = await fetch(url)
      if (response.status === 200) {
        const data = await response.json()
        setInfo(data.articles)
      }
    }

    fetchData();
    
  }, [])

  return (
    <div className="App">
      <News newsInfo={info}/>
    </div>
  );
}

export default App;
