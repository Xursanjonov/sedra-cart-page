export function getStorage(key) {
  try {
    const getStorageItem = localStorage.getItem(key);

    if (!getStorageItem) return undefined;

    return JSON.parse(getStorageItem);
  } catch (e) {
    return undefined;
  }
}

export function setStorage(key, state) {
  try {
    const setStorageItem = JSON.stringify(state);

    localStorage.setItem(key, setStorageItem);
  } catch (e) {}
}
