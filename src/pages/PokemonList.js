import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import PokemonCard from '../components/PokemonCard';
import PokemonCard from 'C:/Users/betzy/OneDrive/Escritorio/frontend/pokedex-frontend/src/componentes/PokemonCard.js';
import { useNavigate } from 'react-router-dom';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      const promises = response.data.results.map(async (pokemon) => {
        const pokeDetails = await axios.get(pokemon.url);
        return {
          id: pokeDetails.data.id,
          name: pokeDetails.data.name,
          image: pokeDetails.data.sprites.front_default,
          type: pokeDetails.data.types.map(typeInfo => typeInfo.type.name),
          number: pokeDetails.data.id
        };
      });
      const results = await Promise.all(promises);
      setPokemonList(results);
    };
    fetchPokemonList();
  }, []);

  const handlePokemonClick = (id) => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <div className="pokemon-list">
      {pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={handlePokemonClick} />
      ))}
    </div>
  );
}

export default PokemonList;
