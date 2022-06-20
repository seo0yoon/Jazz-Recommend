export async function getPlayList({ order = "createdAt", offset = 0, limit = 6 }) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(`./mock.json?${query}`);
  const body = await response.json();
  return body;
}
