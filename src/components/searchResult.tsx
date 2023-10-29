import React from 'react';
import { ResultsProps } from '../types';

class ResultsComponent extends React.Component<ResultsProps> {
  render() {
    const { results } = this.props;
    return (
      <div className="search-results">
        {results.map((result) => (
          <div key={result.name}>
            <p className="results-item">Name: {result.name}</p>
            <p className="results-item">Height: {result.height}</p>
            <p className="results-item">Mass: {result.mass}</p>
            <p className="results-item">Hair color: {result.hair_color}</p>
            <p className="results-item">Skin color: {result.skin_color}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ResultsComponent;
