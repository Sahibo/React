import React from 'react'; 
import styled from 'styled-components'; 
import { Link, useParams, useNavigate } from 'react-router-dom'; 
import './App.css';
 
export default function NewsDetails({ newsArr }) { 
    const { id } = useParams(); 
    const index = Number(id); 
 
    if (!newsArr || !Array.isArray(newsArr) || index < 0 || index >= newsArr.length) { 
        return <p>error</p>; 
    } 
 
    const article = newsArr[index]; 
 
    return ( 
        <div> 
            <Link to="/">Go Back</Link> 
            <h1>{article.title}</h1> 
            <div style={{ display: 'flex' }}> 
                <Image src={article.urlToImage} alt={article.title} /> 
                <div> 
                    <div> 
                        <h2>{article.author}</h2> 
                    </div> 
                    <p>Published at: {article.publishedAt}</p> 
                </div> 
            </div> 
        </div> 
    ); 
} 
 
const Image = styled.img` 
    width: 300px; 
    height: 200px; 
`;