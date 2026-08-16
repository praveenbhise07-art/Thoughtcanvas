# --- Stage 1: Build the React Frontend ---
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# --- Stage 2: Build and Run the Node.js Backend ---
FROM node:18-alpine
WORKDIR /app

# Install backend dependencies
COPY backend/package*.json ./
RUN npm install --production

# Copy backend source code
COPY backend/ ./

# Copy built static files from Stage 1 into backend's public directory
COPY --from=frontend-build /app/frontend/dist ./public

ENV PORT=80
EXPOSE 80

CMD ["node", "src/index.js"]
