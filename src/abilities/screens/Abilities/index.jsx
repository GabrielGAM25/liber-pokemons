import React, { useState } from 'react';

import API from 'abilities/api';
import PokemonSelect from 'shared/components/PokemonSelect';
import upperFirst from 'shared/utils/upperFirst';

import styles from './styles.module.scss';

export default function Abilities() {
  const [abilityNames, setAbilityNames] = useState();

  const sortNames = (names) => names.sort();

  const onSelectPokemon = ({ value: pokemonName }) => (
    API.getAbilityNames(pokemonName).then(sortNames).then(setAbilityNames)
  );

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Type the Pokémon name
      </h1>

      <PokemonSelect onSelect={onSelectPokemon} />

      <div className={styles.abilities}>
        {abilityNames && (
          <span className={styles.abilitiesTitle}>
            Abilities
          </span>
        )}

        {abilityNames && abilityNames.map((abilityName) => (
          <span
            key={abilityName}
            className={styles.abilityName}
          >
            {upperFirst(abilityName)}
          </span>
        ))}
      </div>

      <div className={styles.background} />
    </main>
  );
}
