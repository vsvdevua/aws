# Use an official Node.js runtime as a parent image
FROM nginx:alpine

# Copy the build output to the NGINX HTML directory
COPY dist/aws/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
