# Stage 1: Build Angular application
FROM node:16-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the app directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the app directory
COPY . .

# Build the Angular application
RUN npm run build

# Stage 2: Use NGINX to serve the built Angular application
FROM nginx:stable

# Copy the built Angular application files from the builder stage to the NGINX directory
COPY --from=builder /app/dist/file-rouge-frontend /usr/share/nginx/html


COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (default port for HTTP traffic)
EXPOSE 80

# Command to start NGINX (this command is provided by the base NGINX image)
# CMD ["nginx", "-g", "daemon off;"]
