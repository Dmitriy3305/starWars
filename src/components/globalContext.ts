import React from 'react';
import { GlobalContextProps } from '../types';

const GlobalContext = React.createContext<GlobalContextProps>({
  searchTerm: '',
  results: [],
});

export default GlobalContext;
