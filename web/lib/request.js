import 'core-js/es6/object';

export function get(url, opts) {
  opts = Object.assign(opts || {}, {
    credentials: 'same-origin',
    method: 'get',
  });
  return fetch(url, opts);
}

export function post(url, data, opts = {}) {
  opts = Object.assign(opts, {
    credentials: 'same-origin',
    method: 'post',
    body: data,
  });
  if (opts.json) {
    opts.headers = Object.assign(opts.headers || {}, {
      'Content-Type': 'application/json',
    });
    opts.body = JSON.stringify(data); // overwrite body with JSON version.
  }
  return fetch(url, opts);
}

export function postJSON(url, data, opts = {}) {
  opts.json = true;
  return post(url, data, opts);
}

export function putJSON(url, data, opts = {}) {
  opts = Object.assign(opts, {
    credentials: 'same-origin',
    method: 'put',
    body: JSON.stringify(data),
    'Content-Type': 'application/json',
  });
  return fetch(url, opts);
}

export function del(url, opts = {}) {
  opts = Object.assign(opts, {
    credentials: 'same-origin',
    method: 'delete',
  });
  return fetch(url, opts);
}

export function delJSON(url, data, opts = {}) {
  opts = Object.assign(opts, {
    credentials: 'same-origin',
    method: 'delete',
    body: JSON.stringify(data),
    'Content-Type': 'application/json',
  });
  return fetch(url, opts);
}
