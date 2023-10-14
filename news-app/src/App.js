import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewsList } from './NewsList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from './store/reducer';
import './App.css';
import { useEffect } from 'react';
import NewsDetails from './NewsDetails';

function App() {
  const dispatch = useDispatch();
  let newsArr = useSelector((state) => state.news.newsArr);
  const loading = useSelector((state) => state.news.isLoading);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
  newsArr = dispatch(fetchContent());
  }, [dispatch]);

  if (error === true) {
    return <p>...ERROR</p>;
  }
  if (loading === true) {
    return <p>...LOADING</p>;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<NewsList newsArr={newsArr.articles} />}/>
          <Route path='/details' element={<NewsDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;