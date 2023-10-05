import { Link, Routes, Route } from "react-router-dom"

import { Book } from "./Book"

export function Home({ booksArr }) {
    return (
        <div>
            <h1>Список книг</h1>
            <ul>
                {booksArr.map((book, index) => {
                    return <li key={index}>
                        <Link to={`book/${index}`}>{book.title}</Link>
                    </li>
                })}
            </ul>
            <Routes>
                <Route path="book/:id" element={<Book booksArr={booksArr} />}></Route>
            </Routes>
        </div>
    )
}

<h1>Список книг</h1>
        <ul>
          {searchResults.map((book, index) => (
            <li key={index}>
              <div style={{ display: 'flex' }}>
                <img src={book.url} alt={book.title} style={{ width: '100px', marginRight: '20px' }} />
                <div>
                  <h2>{book.title}</h2>
                  <p>Автор: {book.author}</p>
                  <p>Жанр: {book.genre}</p>
                  <p>Год: {book.year}</p>
                  <p>Описание: {book.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>