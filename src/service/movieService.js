const BASE_URL = 'http://localhost:3001';

export const getMovies = async () => {
  const response = await fetch(`${BASE_URL}/moviesList`);
  return response.json();
};

export const createMovie = async (post) => {
  const response = await fetch(`${BASE_URL}/moviesList`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  return response.json();
};

export const updateMovie = async (id, updatedPost) => {
  const response = await fetch(`${BASE_URL}/moviesList/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedPost),
  });
  return response.json();
};

export const deleteMovie = async (id) => {
  await fetch(`${BASE_URL}/moviesList/${id}`, { method: 'DELETE' });
};

export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};