import React from 'react';
import SearchInput from './components/searchInput';
import SearchButton from './components/searchButton';
import { State } from './types';
import ResultsComponent from './components/searchResult';

class App extends React.Component<object, Readonly<State>> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: '',
      results: [],
    };
  }

  componentDidMount() {
    const savedSearch = localStorage.getItem('search');
    if (savedSearch !== null) {
      this.setState({ searchTerm: savedSearch });
    }
    this.search();
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    localStorage.setItem('search', searchTerm);
    this.search();
  };

  search() {
    const { searchTerm } = this.state;
    let url = 'https://swapi.dev/api/people/';

    if (searchTerm.trim() !== '') {
      url += `?search=${searchTerm}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ results: data.results });
        console.log(data.results);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  render() {
    const { searchTerm, results } = this.state;
    return (
      <div>
        <h1>Star Wars characters</h1>

        <div>
          <SearchInput
            searchTerm={searchTerm}
            handleInputChange={this.handleInputChange}
          />
          <SearchButton onClick={this.handleSearch} />
        </div>

        <div>
          <ResultsComponent results={results} />
        </div>
      </div>
    );
  }
}

export default App;
