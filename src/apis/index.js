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
