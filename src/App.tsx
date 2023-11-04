import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchInput from './components/searchInput';
import SearchButton from './components/searchButton';
import CharacterData from './components/characterData';
import './App.css';
import { SearchResult } from './types';
import PageControl from './components/pageControl';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const savedSearch = localStorage.getItem('search');
    if (savedSearch !== null) {
      setSearchTerm(savedSearch);
      performSearch(savedSearch);
    } else {
      performSearch('');
    }
  }, []);

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    localStorage.setItem('search', searchTerm);
    performSearch(searchTerm);
  };

  const performSearch = (searchTerm: string, page = 1) => {
    const url = `https://swapi.dev/api/people/?page=${page}&search=${searchTerm}`;
    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setResults(data.results);
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
    <div className="App">
      <h1>Star Wars Characters</h1>
      <div className="search-result-container">
        <div className="search-container">
          <SearchInput
            searchTerm={searchTerm}
            handleInputChange={handleInputChange}
          />
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
              isLoading ? (
                <div className="loader"></div>
              ) : (
                <div>
                  <CharacterData results={results} />
                </div>
              )
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
