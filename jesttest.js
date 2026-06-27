const BASE_URL = 'http://localhost:4000';

test('REST products endpoint returns all products', async () => {
  const res = await fetch(`${BASE_URL}/api/products`);
  const data = await res.json();
  expect(res.status).toBe(200);
  expect(Array.isArray(data)).toBe(true);
  expect(data).toHaveLength(3);
});

test('REST single product endpoint returns correct product', async () => {
  const res = await fetch(`${BASE_URL}/api/products/1`);
  const data = await res.json();
  expect(res.status).toBe(200);
  expect(data.id).toBe('1');
  expect(data.name).toBe('Wireless Headphones');
});

test('REST orders endpoint returns all orders', async () => {
  const res = await fetch(`${BASE_URL}/api/orders`);
  const data = await res.json();
  expect(res.status).toBe(200);
  expect(Array.isArray(data)).toBe(true);
});

test('REST unknown product returns 404', async () => {
  const res = await fetch(`${BASE_URL}/api/products/999`);
  expect(res.status).toBe(404);
});
