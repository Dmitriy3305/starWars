import React from 'react';
import { State } from './types';

export default class App extends React.Component<object, Readonly<State>> {
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

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSearch() {
    const { searchTerm } = this.state;
    localStorage.setItem('search', searchTerm);
    this.search();
  }

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
        <h1>Search Page</h1>

        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={this.handleInputChange}
            placeholder="Search term"
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>

        <div>
          {results.map((result) => (
            <div key={result.name}>
              <p>
                <h3>name: {result.name}</h3>
              </p>
              <p>
                Height: {result.height}, Mass: {result.mass}
              </p>
              <p>Hair color: {result.hair_color}</p>
              <p>Skin color: {result.skin_color}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
