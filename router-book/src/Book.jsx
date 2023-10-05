import { useParams } from "react-router-dom";

export function Book({ booksArr }) {
    let { id } = useParams()


    return (
        <div>
            <ul>
            {booksArr.filter((book) => book.id === id).map((item) => {
                return (<div key={item.id}>
                    <p >{item.title}</p>
                    <p >{item.author}</p>
                    <p >{item.genre}</p>
                </div>
                )
            })}
            </ul>
        </div>
    )
}