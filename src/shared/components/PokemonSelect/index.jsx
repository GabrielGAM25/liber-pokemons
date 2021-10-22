import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import { comparator, pipe } from 'ramda';

import ignoreCaseIncludes from 'shared/utils/ignoreCaseIncludes';
import ignoreCaseSearch from 'shared/utils/ignoreCaseSearch';
import upperFirst from 'shared/utils/upperFirst';
import useAsyncEffect from 'shared/hooks/useAsyncEffect';
import useLoading from 'shared/hooks/useLoading';
import API from 'abilities/api';

import styles from './styles.module.scss';

export default function PokemonSelect({ onSelect }) {
  const [pokemonNames, setPokemons] = useState([]);

  const { isLoading, stopLoading } = useLoading();

  useAsyncEffect(API.getPokemonNames, pipe(setPokemons, stopLoading));

  const filterByName = (inputValue) => (pokemonName) => ignoreCaseIncludes(pokemonName, inputValue);

  const sortBySearchRank = (inputValue) => comparator((item1, item2) => (
    ignoreCaseSearch(item1, inputValue) < ignoreCaseSearch(item2, inputValue)
  ));

  const formatOption = (pokemonName) => ({ value: pokemonName, label: pokemonName });

  const loadOptions = (inputValue, callback) => callback(
    pokemonNames.filter(filterByName(inputValue))
      .sort(sortBySearchRank(inputValue))
      .slice(0, 50)
      .map(formatOption),
  );

  const getValue = ({ value }) => upperFirst(value);

  return (
    isLoading ? (
      <>Loading</>
    ) : (
      <AsyncSelect
        className={styles.select}
        formatOptionLabel={getValue}
        loadOptions={loadOptions}
        onChange={onSelect}
        defaultOptions
        cacheOptions
      />
    )
  );
}

PokemonSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
