export const httpClient = ({ params, method, url, data }) => {
  let headers = { 'Content-Type': 'application/json' };

  if (params?.headers) {
    headers = { ...headers, ...params.headers };
  }

  return fetch(url, {
    method,
    body: JSON.stringify(data),
    headers,
  })
    .then((res) => res.json())
    .catch(({ response }) => {
      if (!response) {
        throw new Error('Connection error');
      }

      if (response?.data?.message) {
        throw new Error(response.data.message);
      }

      throw new Error('An error occurred, try again later.');
    });
};
