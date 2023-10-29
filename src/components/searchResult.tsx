import React from 'react';
import { ResultsProps } from '../types';

class ResultsComponent extends React.Component<ResultsProps> {
  render() {
    const { results } = this.props;
    return (
      <div>
        {results.map((result) => (
          <div key={result.name}>
            <p>Name: {result.name}</p>
            <p>Height: {result.height}</p>
            <p>Mass: {result.mass}</p>
            <p>Hair color: {result.hair_color}</p>
            <p>Skin color: {result.skin_color}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ResultsComponent;
