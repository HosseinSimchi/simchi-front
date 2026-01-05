# Stage 1: Build the Angular app using Node
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci  # Clean install for reproducibility

# Copy source code and build
COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve static files with Nginx
FROM nginx:alpine

# Copy built Angular files (adjust if dist folder is e.g., dist/browser)
COPY --from=build /app/dist/crm /usr/share/nginx/html

# Copy custom Nginx config for SPA routing (created in next step)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]