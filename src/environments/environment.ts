export const environment = {
production: true,
apiURL: 'https://apimocha.com/vsvdev/orders',
getAll: process.env['GET_ALL'] || 'http://default-api-url/',
getOne: process.env['GET_ONE'] || 'http://default-api-url/',
postOne: process.env['POST_ONE'] || 'http://default-api-url/',
};
