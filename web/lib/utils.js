export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) return response;
  let error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function parseJSON(response) {
  return response.json();
}

export function values(obj) {
  return Object.keys(obj).map(k => obj[k]);
}

export function normalizeBy(arr, transformer, opts = {})  {
  // Use `==` to check for `undefined` and `null`.
  if (arr == null) return [];
  if (isString(transformer)) {
    const id = transformer;
    transformer = (x) => x[id];
  }
  return arr.reduce((acc, a) => {
    const k = transformer(a);
    if (acc[k] && !opts.override) console.error('During normalization, %s appeared mulitple times', k);
    acc[k] = a;
    return acc;
  }, {})
}
