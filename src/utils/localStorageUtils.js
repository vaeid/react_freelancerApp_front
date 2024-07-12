export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getFromLocalStorage(key, defaultValue) {
  const value = localStorage.getItem(key) || null;
  return value ? JSON.parse(value) : defaultValue;
}
