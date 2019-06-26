import React from 'react';

import './pokemon.css';

const Pokemon = ({ pokemon }) => (
  <div className="pokemon">
      <h1>{pokemon.name}</h1>
  </div>
);

export default Pokemon;