# Aws

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

`npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


`ng serve --configuration=development`



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Prepare to docker image env

create in assets:

env.js

```text
(function(window) {
    window.env = window.env || {};
  
    // Environment variables
    window["env"].API_URL = 'http://localhost:8000';
  })(this);
```

env.template.js


```text
(function(window) {
    window.env = window.env || {};
  
    // Environment variables
    window["env"].API_URL = '${ENV_API_URL}';
  })(this);
```


add to app/index.html

```html
  <!-- Add placeholders for environment variables -->
    <script src="assets/env.js"></script>
```

environments/

environment.ts

```typo3_typoscript
export const environment = {
production: false,
// @ts-ignore
apiURL: window['env'].API_URL,
};
```
environment.development.ts

```typo3_typoscript
export const environment = {
production: false,
// @ts-ignore
apiURL: window['env'].API_URL,
};
```
Dockerfile

```shell
FROM nginx:alpine
COPY ./dist/aws/browser /usr/share/nginx/html
#COPY ./assets/env.template.js /usr/share/nginx/html/assets/env.template.js
ENV ENV_API_URL=http://localhost:9000
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
```


## Base crud version

`ng build --configuration=development`


ENV_API_URL

## Docker

docker build -t kangular-app:5 .

docker run -p 8080:80 kangular-app:5

docker run --env ENV_API_URL=http://localhost:9999 -p 8080:80 kangular-app:5

docker tag kangular-app:5 vsvdevua/kangular-app:5

docker login

docker push vsvdevua/kangular-app:5

ENV_API_URL

Restart pod to apply new configurations without rebuilding.





