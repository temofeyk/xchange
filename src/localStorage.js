const Token = 'token'
;
export function getTokenFromLocalStorage() {
  return localStorage.getItem(Token);
}

export function setTokenToLocalStorage(token) {
  localStorage.setItem(Token, token);
}

export function removeTokenFromLocalStorage() {
  localStorage.removeItem(Token);
}
