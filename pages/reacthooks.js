import React, { Fragment, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { Spin } from 'antd';
import Layouts from '../components/Layouts';
import ListItem from '../components/Utils/ListItem';



const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

function reacthooks() {
  
  // const [query, setQuery] = useState('redux');
  // const [ data, isLoading, isError , doFetch] = useHackerNewsApi();
  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] },
  );
  

  return (
    <Layouts>
      
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button
        type="button"
        onClick={() =>
          doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <Spin spinning={isLoading} size="large" />
      ) : (
            data.hits.length ? (
              <ListItem query={query} hits={data.hits} />
            ) : (
              <p>no data</p>
            )
        )}
    </Layouts>
  );
}
export default reacthooks;

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
 
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });
 
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
 
      try {
        const result = await axios(url);
 
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };
 
    fetchData();
  }, [url]);
 
  return [state, setUrl];
};