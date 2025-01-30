FROM nginx:alpine
COPY ./dist/aws/browser /usr/share/nginx/html
#COPY ./assets/env.template.js /usr/share/nginx/html/assets/env.template.js
ENV ENV_API_URL=http://localhost:9000
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
