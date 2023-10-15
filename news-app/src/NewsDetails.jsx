import React from 'react'; 
import styled from 'styled-components'; 
import { Link, useParams, useNavigate } from 'react-router-dom'; 
import './App.css';
 
export default function NewsDetails({ newsArr }) { 
    const { id } = useParams(); 
    const index = Number(id); 
    const navigate = useNavigate();
    if (!newsArr || !Array.isArray(newsArr) || index < 0 || index >= newsArr.length) { 
        return <p>error</p>; 
    } 
 
    const article = newsArr[index]; 
 
    const handleNext = () => {
        const nextIndex = (index + 1) % newsArr.length;
        navigate(`/details/${nextIndex}`);
    };
    
    return ( 
        <div className='app-container'>
            <div className='buttons-container'>
                <Link to="/" className='link'>
                    <button className='backButton'>
                        Go Back
                    </button>
                </Link> 

                <button className='nextButton' onClick={handleNext}>
                    Next
                </button>
            </div>
            
            <div className='main-container'>
                <div  className='main-inner-container'>
                    <h1>{article.title}</h1>
                    <Image src={article.urlToImage} alt={article.title} /> 
                    <div className='content-container'> 
                        <div>
                            <div>
                                <p>Content: {article.content} <a href={article.url}>Go to the link</a></p> 
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-around'}}> 
                                <p>Author: {article.author}</p> 
                                <p>Published at: {article.publishedAt}</p> 
                            </div>
                            
                        </div> 
                    </div> 
                </div>
            </div>
        </div> 
    ); 
} 
 
const Image = styled.img` 
    width: 300px; 
    height: 200px; 
`;