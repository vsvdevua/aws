export const environment = {
production: false,
apiURL: 'https://localhost:8080/orders',
getAll: process.env['GET_ALL'] || 'http://default-api-url/',
getOne: process.env['GET_ONE'] || 'http://default-api-url/',
postOne: process.env['POST_ONE'] || 'http://default-api-url/',
};
