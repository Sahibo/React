import newsReducer, { toggleSortOrder, fetchContent } from './store/reducer'; 

 

describe('newsSlice.reducer', () => {
  it('should handle the initial state', () => {
    const initialState = {
      newsArr: [],
      isLoading: false,
      error: null,
      sortOrder: 'DESC',
    };

 

    expect(newsReducer(undefined, {})).toEqual(initialState);
  });

 

  it('should handle toggleSortOrder', () => {
    const initialState = {
      newsArr: [{ publishedAt: '2023-10-10' }, { publishedAt: '2023-10-12' }],
      isLoading: false,
      error: null,
      sortOrder: 'DESC',
    };

 

    const nextState = newsReducer(initialState, toggleSortOrder());
    expect(nextState.sortOrder).toEqual('ASC');
    expect(nextState.newsArr[0].publishedAt).toEqual('2023-10-12');
    expect(nextState.newsArr[1].publishedAt).toEqual('2023-10-10');
  });

 

  it('should handle fetchContent.pending', () => {
    const initialState = {
      newsArr: [],
      isLoading: false,
      error: null,
      sortOrder: 'DESC',
    };

 

    const nextState = newsReducer(initialState, fetchContent.pending());
    expect(nextState.isLoading).toEqual(true);
  });

 

  it('should handle fetchContent.fulfilled', () => {
    const initialState = {
      newsArr: [],
      isLoading: true,
      error: null,
      sortOrder: 'DESC',
    };

 

    const fakeData = { articles: [{ publishedAt: '2023-10-10' }, { publishedAt: '2023-10-12' }] };

 

    const nextState = newsReducer(initialState, fetchContent.fulfilled(fakeData));
    expect(nextState.isLoading).toEqual(false);
    expect(nextState.newsArr).toEqual(fakeData);
  });

 

  it('should handle fetchContent.rejected', () => {
    const initialState = {
      newsArr: [],
      isLoading: true,
      error: null,
      sortOrder: 'DESC',
    };

 

    const nextState = newsReducer(initialState, fetchContent.rejected());
    expect(nextState.isLoading).toEqual(false);
    expect(nextState.error).toEqual(true);
  });
});