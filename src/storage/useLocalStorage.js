
export const getListCities = () => {
  if (!localStorage["cities"]) {
    localStorage["cities"] = "[]";
  }

  let cities = localStorage["cities"];
  cities = JSON.parse(cities);
  return cities;
};

export const addCity = (city) => {
  const cities = getListCities();
  cities.push(city);
  localStorage["cities"] = JSON.stringify(cities);
};

export const deleteCity = (id) => {
  let cities = getListCities();
  cities = cities.filter((city) => city.id !== id);
  localStorage["cities"] = JSON.stringify(cities);
};

export const getCityById = (id) => {
  const cities = getListCities();
  return cities.find((city) => city.id === id);
};
