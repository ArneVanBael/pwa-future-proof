import React from 'react';
import Loader from '../../components/loader';
import Pokemon from '../../components/pokemon';
import Pagination from '../../components/pagination';
import { useState, useEffect } from 'react';
import PokeService from '../../services/pokeservice';

import './pokemon-container.css';
import pokeservice from '../../services/pokeservice';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

const loadPokemons = (setLoading, setData, setPage, page = 0) => {
  setLoading(true);
  setPage(page);
  pokeservice.getPokemons(page).then(response => {
    console.log(response);
    setData(response);
    setLoading(false);
  })
}

const PokemonContainer = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("fetching pokemons");
    console.log("pagina " + page);
    loadPokemons(setLoading, setData, setPage, page);
  }, [page]);

  if(loading) {
    return (<Loader/>);
  } else {
    return (
    <div className="pokemon-container">
      { data ? (data.map(pokemon => <Pokemon pokemon={pokemon}/>))
       : <p>No Data</p>
      }
      <Pagination page={page} nextPage = {setPage} previousPage = {setPage}/>
    </div>
    );
  }
};

export default PokemonContainer;