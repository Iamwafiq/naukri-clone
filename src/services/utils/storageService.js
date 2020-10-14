export function getAuthToken() {
  return window.localStorage.getItem('authToken');
}

export function getUserRole() {
  return window.localStorage.getItem('userRole');
}

export function setStorage(arg, arg1) {
  window.localStorage.setItem('authToken', arg);
  return window.localStorage.setItem('userRole', arg1);
}
