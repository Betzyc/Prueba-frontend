import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// function PokemonCard({ pokemon, onClick }) {
//   return (
//     <div className="pokemon-card" onClick={() => onClick(pokemon.id)}>
//       <img src={pokemon.image} alt={pokemon.name} />
//       <p>#{pokemon.number}</p>
//       <h3>{pokemon.name}</h3>
//       <p>{pokemon.type.join(', ')}</p>
//     </div>
//   );
// }

function PokemonCard({ pokemon, onClick }) {
    return (
        <div className="col-12 col-sm-6 col-md-4 mb-4">
          <div className="card pokemon-card" onClick={() => onClick(pokemon.id)}>
            <img src={pokemon.image} className="card-img-top" alt={pokemon.name} />
            <div className="card-body text-center">
              <p className="card-text">#{pokemon.number}</p>
              <h5 className="card-title">{pokemon.name}</h5>
              <p className="card-text">{pokemon.type.join(', ')}</p>
            </div>
          </div>
        </div>
      );
  }

export default PokemonCard;
