import { useState } from "react"
import styled from 'styled-components';
import './App.css';

function News(props) {
    const { newsInfo } = props

    const [selectedIndex, setIndex] = useState(null)

    const getById = (index) => {
        if (index === selectedIndex) {setIndex(null)}
        else{setIndex(index)}
    }

    return (
        <div>
            {newsInfo.map((item, index) => (
                <div key={index}>
                    <h1 onClick={() => getById(index)}>{index + 1}. {item.title}</h1>
                    {selectedIndex === index && (
                    <div className="News-container">
                        <Image src={item.urlToImage}></Image>
                        <div className="News-text-container">
                            <div className="News-text-header-container">
                                <h2>{item.author}</h2>
                            </div>
                            <div className="New-text-description-container">
                                <h3>{item.description}</h3>
                                <p>Content: {item.content}</p>
                            </div>
                            <p>Published at: {item.publishedAt}</p>
                            <a href={item.url}>Link</a>
                        </div>
                    </div>
                )}
                </div>  
            ))}        
        </div>
    )
}

export default News;

const Image = styled.img`
  width: 300px;
  height: 200px;
`;