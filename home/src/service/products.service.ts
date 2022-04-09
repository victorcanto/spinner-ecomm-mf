const API_SERVER = 'http://localhost:8080';

export const getProducts = () =>
  fetch(`${API_SERVER}/products`).then((res) => res.json());

export const getProductById = (id: string | number) =>
  fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());