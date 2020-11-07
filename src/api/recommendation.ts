/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_KEY, BASE_URL, PROXY_URL } from '../constants';

export default async function getSimilarRecommendations(
  input: string,
): Promise<any> {
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${PROXY_URL}${BASE_URL}similar?k=${API_KEY}&info=1&q=${encodeURIComponent(
    input,
  )}`;

  return new Promise<any>((resolve) => {
    fetch(proxyurl + url, { method: 'GET' })
      .then((response) => response.json())
      .then((response) => resolve(response.Similar.Results));
  });
}
