import './App.css';
import React, { useState } from 'react';
import Header from './Header';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const books = [
    {
      id: 1,
      title: 'Убить пересмешника',
      author: 'Харпер Ли',
      genre: 'Роман',
      year: 1960,
      description: 'Роман о расизме и неравенстве в американском обществе.',
      url: 'https://avatars.mds.yandex.net/i?id=e2deeef21dd4f77835ed282afe866a3cb76a291b-9838067-images-thumbs&n=13'
    },
    {
      id: 2,
      title: 'Великий Гэтсби',
      author: 'Фрэнсис Скотт Фицджеральд',
      genre: 'Роман',
      year: 1925,
      description: 'История о богатстве, любви и иллюзиях в эпоху роковых двадцатых.',
      url: 'https://ndc.book24.ru/iblock/750/750b210f353468390562f6ed816649d5/f17cf990600548ea839f14a46b45d5b1.jpg'
    },
    {
      id: 3,
      title: 'Гордость и предубеждение',
      author: 'Джейн Остин',
      genre: 'Роман',
      year: 1813,
      description: 'Классический роман о любви и общественных нормах в Англии 19 века.',
      url: 'https://static.insales-cdn.com/images/products/1/1020/171074556/c1704ecce94582f91de8bc0ea1824bf2.jpg'

    },
  ];

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  return (
    <BrowserRouter>
      <Header searchTerm={searchTerm} onInputChange={handleInputChange}/>
      <Routes>
        <Route path='/*' element={<Home books={books}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/book' element={<Book/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
