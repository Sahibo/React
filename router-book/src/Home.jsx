import { Link, Routes, Route } from "react-router-dom"

import { Book } from "./Book"

export function Home({ books, searchResults }) {
    return (
        <div>
            <h1 style={{marginLeft: '20px'}}>Список книг</h1>
            <ul>
              {searchResults.map((book) => {
                return (
                  <li key={book.id}>
                    <Link to={`book/${book.id}`}>{book.title}</Link>
                  </li>
                );
              })}
            </ul>
            <Routes>
                <Route path="book/:id/*" element={<Book books={books} />}></Route>
            </Routes>
        </div>
    )
}