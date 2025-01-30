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

Base crud version

`ng build --configuration=development`


ng build --configuration=development

ENV_API_URL

## Docker

docker build -t k8angular-app:latest .

docker run -p 8080:80 kangular-app:latest

docker run --env ENV_API_URL=http://localhost:9999 -p 8080:80 k8angular-app:latest

docker tag k8angular-app:latest vsvdev/k8angular-app:latest

docker login

docker push /k8angular-app:latest

ENV_API_URL

Restart pod to apply new configurations without rebuilding.
