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
  let data = { next: link };
  const objects = [];

  while (data.next !== null) {
    const res = await fetch(`${data.next}`);
    data = await res.json();
    objects.push(...data.results);
  }

  return objects.map(object => object.name)[id];
};

const getLengths = async () => {
  const lengths = { people: 0, vehicles: 0, starships: 0 };

  let res = await fetch(`${SW_API_PEOPLE}`);
  let data = await res.json();
  lengths.people = data.count;

  res = await fetch(`${SW_API_VEHICLES}`);
  data = await res.json();
  lengths.vehicles = data.count;

  res = await fetch(`${SW_API_STARSHIPS}`);
  data = await res.json();
  lengths.starships = data.count;

  return lengths;
};

export { getPerson, getVehicle, getStarship, getLengths };
