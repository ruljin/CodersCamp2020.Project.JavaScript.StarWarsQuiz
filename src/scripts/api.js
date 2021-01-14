const SW_API_BASE_URL = 'https://swapi.dev/api/';
const SW_API_PEOPLE = `${SW_API_BASE_URL}people/`;
const SW_API_VEHICLES = `${SW_API_BASE_URL}vehicles/`;
const SW_API_STARSHIPS = `${SW_API_BASE_URL}starships/`;

const getPerson = async id => {
  return await getFromAPI(SW_API_PEOPLE, id);
};

const getVehicle = async id => {
  return await getFromAPI(SW_API_VEHICLES, id);
};

const getStarship = async id => {
  return await getFromAPI(SW_API_STARSHIPS, id);
};

const getFromAPI = async (link, id) => {
  console.log(`${link}${id}`);
  let res = await fetch(`${link}${id}`);
  let data = await res.json();
  return data.name;
};

module.exports = { getPerson, getVehicle, getStarship };
