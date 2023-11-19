import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchInput from '../components/searchInput/searchInput';
import SearchButton from '../components/searchButton';
import CharacterData from '../components/characterData/characterData';
import '../styles/app.css';
import PageControl from '../components/pageControl/pageControl';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootState } from '../reducers/rootReducer';
import { useSelector } from 'react-redux';
import {
  setSearchResults,
  startLoading,
  endLoading,
} from '../reducers/dataReducer';
import { useDispatch } from 'react-redux';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage] = useState(10);
  const searchTerm = useSelector((state: RootState) => state.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedSearch = localStorage.getItem('search');
    if (savedSearch !== null) {
      performSearch(savedSearch);
    } else {
      performSearch('');
    }
  }, []);

  const handleSearch = () => {
    performSearch(searchTerm);
  };

  const performSearch = (searchTerm: string, page = 1) => {
    const url = `https://swapi.dev/api/people/?page=${page}&search=${searchTerm}`;
    setIsLoading(true);
    dispatch(startLoading());

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          dispatch(setSearchResults(data.results));
          setCurrentPage(page);
          setTotalPages(Math.ceil(data.count / itemsPerPage));
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        setIsLoading(false);
      })
      .finally(() => {
        dispatch(endLoading());
      });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      performSearch(searchTerm, currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      performSearch(searchTerm, currentPage + 1);
    }
  };

  return (
    <Router>
      <div className="App">
        <h1>Star Wars Characters</h1>
        <div className="search-result-container">
          <div className="search-container">
            <SearchInput />
            <SearchButton onClick={handleSearch} />
          </div>
          <PageControl
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
          />
          <Routes>
            <Route
              path="/"
              element={
                isLoading ? <div className="loader"></div> : <CharacterData />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
