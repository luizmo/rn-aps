import api from './api';

export async function getAll() {
  try {
    const response = await api.get('items');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getById(id) {
  try {
    const response = await api.get(`items/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function create(data) {
  try {
    const response = await api.post('items', data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function patch(id, data) {
  try {
    const response = await api.patch(`items/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function update(id, data) {
  try {
    const response = await api.put(`items/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function remove(id) {
  try {
    const response = await api.delete(`items/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getAll,
  getById,
  create,
  patch,
  update,
  remove
};
