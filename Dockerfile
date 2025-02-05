FROM nginx:alpine

COPY ./dist/aws/browser /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf



