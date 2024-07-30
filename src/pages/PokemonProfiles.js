import React from 'react';
import { useParams } from 'react-router-dom';
// import PokemonDetail from '.../components/PokemonDetail';
import PokemonDetail from 'C:/Users/betzy/OneDrive/Escritorio/frontend/pokedex-frontend/src/componentes/PokemondDetail.js';

function PokemonProfile() {
  const { id } = useParams();
  return (
    <div className="pokemon-profile">
      <PokemonDetail id={id} />
    </div>
  );
}

export default PokemonProfile;
