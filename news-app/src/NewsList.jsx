import './App.css';
import React from 'react';
import styled from 'styled-components';
import { Link, Routes, Route } from 'react-router-dom';
import NewsDetails from './NewsDetails';

export function NewsList({ newsArr }) {
    return (
        <div className='app-container' >
            {Array.isArray(newsArr) && newsArr.length > 0 ? (
                newsArr.map((article, index) => (
                    <Link to={`details/${index}`} key={index}>
                        <div>
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
                    </Link>
                ))
            ) : (
                <p>No articles available.</p>
            )}
        </div>
    );
}

const Image = styled.img`
    width: 300px;
    height: 200px;
`;

export default NewsList;