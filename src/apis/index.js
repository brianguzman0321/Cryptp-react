// const proxyServer = 'https://cors-anywhere.herokuapp.com';
// const server = 'https://pro-api.coinmarketcap.com';

// const endPoint = 'v1/cryptocurrency/listings/latest';

// const API_KEY = '563def96-4344-4da6-a0f4-253a903f9a07';

const server = 'https://node-cap-table-server.herokuapp.com';
const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:2000'
    : process.env.NODE_ENV === 'production'
    ? server
    : null;

export const getCurrencyLists = async () => {
  const res = await fetch(`${baseURL}/api/currency`, {
    method: 'Get',
    headers: { 'Content-Type': 'application/json' },
  });
  return {
    status: res.status,
    data: await res.json(),
  };
};

// export const getCurrencyLists = async () => {
//   const res = await fetch(`${proxyServer}/${server}/${endPoint}`, {
//     method: 'Get',
//     method: 'get',
//     headers: {
//       'X-CMC_PRO_API_KEY': API_KEY,
//       'Content-Type': 'application/json',
//     },
//   });
//   return {
//     status: res.status,
//     data: await res.json(),
//   };
// };
