import api from './api-helper';

export const getCharacteristics = async () => {
  const resp = await api.get('/characteristics');
  return resp.data;
}

export const addCharacteristic = async (birdId, characteristicId) => {
  const resp = await api.post(`/birds/${birdId}/characteristics/${characteristicId}`);
  return resp.data;
}