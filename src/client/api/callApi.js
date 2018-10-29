import { fetch } from 'whatwg-fetch';

export default async (path, options) => {
  const response = await fetch(`/api/${path}`, options);

  let json;
  try {
    json = await response.json();
  } catch (error) {
    console.error(error);
    json = null;
  }

  if (response.ok) {
    return {
      ok: response.ok,
      result: json,
    };
  }
  return {
    ok: response.ok,
    result: json,
  };
};
