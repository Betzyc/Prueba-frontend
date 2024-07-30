import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PokemonDetail({ id }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = response.data;
      setPokemon({
        id: data.id,
        name: data.name,
        types: data.types.map(typeInfo => typeInfo.type.name),
        abilities: data.abilities.map(abilityInfo => abilityInfo.ability.name),
        sprites: data.sprites
      });
    };
    fetchPokemon();
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="pokemon-detail">
      <h2>{pokemon.name} (#{pokemon.id})</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>Types</h3>
      <p>{pokemon.types.join(', ')}</p>
      <h3>Abilities</h3>
      <p>{pokemon.abilities.join(', ')}</p>
    </div>
  );
}

export default PokemonDetail;
