import api from './api-helper';

export const getAllBirds = async () => {
  const resp = await api.get('/birds');
  return resp.data;
}

export const getOneBird = async (id) => {
  const resp = await api.get(`/birds/${id}`);
  return resp.data;
}

export const postBird = async (birdData) => {
  const resp = await api.post('/birds', { bird: birdData });
  return resp.data;
}

export const putBird = async (id, birdData) => {
  const resp = await api.put(`/birds/${id}`, { bird: birdData });
  return resp.data;
}

export const deleteBird = async (id) => {
  const resp = await api.delete(`/birds/${id}`);
  return resp;
}

// export const typeBird = async (name) => {
//   const resp = await api.get(`/birds/type/${name}`)
//   return resp
// }