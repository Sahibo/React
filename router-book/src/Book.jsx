import { useParams } from "react-router-dom";

export function Book({ books }) {
    let { id } = useParams()
    let userId = Number(id)

    return (
        <div>
            <ul>
            {books.filter((book) => book.id === userId).map((item) => {
                return (
                <div key={item.id} style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <img style={{width:'185px', height: '270px'}} src={item.url} alt="Book poster"></img>
                    <div>
                        <p>Название: {item.title}</p>
                        <p>Автор: {item.author}</p>
                        <p>Жанр: {item.genre}</p>
                        <p>Год: {item.year}</p>
                        <p>Описание: {item.description}</p>
                    </div>
                </div>
                )
            })}
            </ul>
        </div>
    )
}