// import styled from 'styled-components';
// import { Link, useParams } from 'react-router-dom';

// export default function NewsDetails({ newsArr }) {
    
//     // const { id } = useParams();

//     // let userId = Number(id)
//     // const article = newsArr[id];

//     // if (!article) {
//     //     return <p>Article not found.</p>;
//     // }
//     //console.log(id);
//     return (
//         <div>
//             <h1>{newsArr[0].title}</h1>
//             {/* <h1>{article.title}</h1>
//             <div style={{ display: 'flex' }}>
//                 <Image src={article.urlToImage} alt={article.title} />
//                 <div>
//                     <div>
//                         <h2>{article.author}</h2>
//                     </div>
//                     <p>Published at: {article.publishedAt}</p>
//                 </div>
//             </div> */}
//         </div>
//     );
// }

// const Image = styled.img`
//     width: 300px;
//     height: 200px;
// `;

import React from 'react';
import styled from 'styled-components';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function NewsDetails({newsArr}) {
    const { id } = useParams();
    const index = Number(id);
    // console.log(index, id)

    // if (!newsArr || !newsArr[index]) {
    //     return <p>Article not found.</p>;
    // }

    console.log(index);
    console.log(newsArr[index])
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
    height: 200px;
`;