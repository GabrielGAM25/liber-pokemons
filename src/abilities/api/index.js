import APIClient from 'shared/apiClient';

const getName = ({ name }) => name;

const getPokemonNames = () => APIClient.get('pokemon-species?limit=898')
  .then(({ results }) => results.map(getName));

const getAbilityName = ({ ability }) => ability.name;

const getAbilityNames = (name) => APIClient.get(`pokemon/${name}`)
  .then(({ abilities }) => abilities.map(getAbilityName));

export default { getAbilityNames, getPokemonNames };
