
const xhr = {
  buildQuery: obj => Object.keys(obj).reduce((a, k) => {
    a.push(`${k}=${encodeURIComponent(obj[k])}`);
    return a;
  }, []).join('&'),

  get: url => new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open('GET', url, true);
    http.onload = () => resolve(http.responseText);
    http.onerror = () => reject(http.statusText);
    http.send();
  }),

  post: (url, data) => new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.onload = () => resolve(http.responseText);
    http.onerror = () => reject(http.statusText);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.send(xhr.buildQuery(data));
  }),
}