import uuid from 'uuid';

export const FETCH_LOCATIONS = "fetch_locations";
export const FETCH_LOCATION = "fetch_location";
export const CREATE_LOCATION = "create_location";
export const DELETE_LOCATION = "delete_location";
export const EDIT_LOCATION = "edit_location";

export function fetchLocations() {
  const snapshot = localStorage.getItem('locations');
  const locations = (snapshot == null) ? [] : JSON.parse(snapshot);

  return {
    type: FETCH_LOCATIONS,
    payload: locations
  };
}

export function createLocations(values) {
  const location = { id: uuid(), ...values };
  const snapshot = localStorage.getItem('locations');
  const locations = (snapshot == null) ? [] : JSON.parse(snapshot);
  locations.push(location);
  localStorage.setItem('locations', JSON.stringify(locations));

  return {
    type: CREATE_LOCATION,
    payload: location
  };
}

export function editLocation(location) {
  const snapshot = localStorage.getItem('locations');
  const locations = (snapshot == null) ? [] : JSON.parse(snapshot);
  locations[locations.findIndex(cat => cat.id == location.id)] = location;
  localStorage.setItem('locations', JSON.stringify(locations));

  return {
    type: CREATE_LOCATION,
    payload: location
  };
}

export function fetchLocation(id) {
  const snapshot = localStorage.getItem('locations');
  const locations = (snapshot == null) ? [] : JSON.parse(snapshot);
  const location = locations.find(cat => cat.id === id);

  return {
    type: FETCH_LOCATION,
    payload: location
  };
}

export function deleteLocation(id, callback) {
  const snapshot = localStorage.getItem('locations');
  const locations = (snapshot == null) ? [] : JSON.parse(snapshot);
  const location = locations.find(cat => cat.id === id);

  for (let i = 0; i < locations.length; i++) {
    if (locations[i].id == id) {
      locations.splice(i, 1);
      localStorage.setItem('locations', JSON.stringify(locations));
    }
  }

  return {
    type: DELETE_LOCATION,
    payload: id
  };
}
