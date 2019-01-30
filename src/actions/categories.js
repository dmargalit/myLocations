import uuid from 'uuid';

export const FETCH_CATEGORIES = "fetch_categories";
export const FETCH_CATEGORY = "fetch_category";
export const CREATE_CATEGORY = "create_category";
export const DELETE_CATEGORY = "delete_category";
export const EDIT_CATEGORY = "edit_category";

export function fetchCategories() {
  const snapshot = localStorage.getItem('categories');
  const categories = (snapshot == null) ? [] : JSON.parse(snapshot);

  return {
    type: FETCH_CATEGORIES,
    payload: categories
  };
}

export function createCategory(values) {
  const category = { id: uuid(), ...values };
  const snapshot = localStorage.getItem('categories');
  const categories = (snapshot == null) ? [] : JSON.parse(snapshot);
  categories.push(category);
  localStorage.setItem('categories', JSON.stringify(categories));

  return {
    type: CREATE_CATEGORY,
    payload: category
  };
}

export function editCategory(category) {
  const snapshot = localStorage.getItem('categories');
  const categories = (snapshot == null) ? [] : JSON.parse(snapshot);
  categories[categories.findIndex(cat => cat.id == category.id)] = category;
  localStorage.setItem('categories', JSON.stringify(categories));

  return {
    type: CREATE_CATEGORY,
    payload: category
  };
}

export function fetchCategory(id) {
  const snapshot = localStorage.getItem('categories');
  const categories = (snapshot == null) ? [] : JSON.parse(snapshot);
  const category = categories.find(cat => cat.id === id);

  return {
    type: FETCH_CATEGORY,
    payload: category
  };
}

export function deleteCategory(id, callback) {
  const snapshot = localStorage.getItem('categories');
  const categories = (snapshot == null) ? [] : JSON.parse(snapshot);
  const category = categories.find(cat => cat.id === id);

  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id == id) {
      categories.splice(i, 1);
      localStorage.setItem('categories', JSON.stringify(categories));
    }
  }

  return {
    type: DELETE_CATEGORY,
    payload: id
  };
}
