export const environment = {
production: false,
apiURL: process.env['API_URL'] || 'https://default-api-url/',
getAll: process.env['GET_ALL'] || 'http://default-api-url/',
getOne: process.env['GET_ONE'] || 'http://default-api-url/',
postOne: process.env['POST_ONE'] || 'http://default-api-url/',
};
