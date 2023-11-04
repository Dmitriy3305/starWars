import React, { useEffect, useState } from 'react';
import SearchInput from './components/searchInput';
import SearchButton from './components/searchButton';
import ResultsComponent from './components/searchResult';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const savedSearch = localStorage.getItem('search');
    if (savedSearch !== null) {
      setSearchTerm(savedSearch);
      performSearch();
    } else {
      performSearch();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    localStorage.setItem('search', searchTerm);
    performSearch();
  };

  const performSearch = () => {
    let url = 'https://swapi.dev/api/people/';
    const term = localStorage.getItem('search');

    if (term?.trim() !== '') {
      url += `?search=${term}`;
    }
    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('Error:', error);
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="search-result-container">
          <div className="search-container">
            <SearchInput
              searchTerm={searchTerm}
              handleInputChange={handleInputChange}
            />
            <SearchButton onClick={handleSearch} />
          </div>

          <div className="results-container">
            <ResultsComponent results={results} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
