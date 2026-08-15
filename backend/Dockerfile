FROM node:20-alpine

WORKDIR /app

# Copy dependency manifests first
COPY package.json ./
COPY package-lock.json* ./

# Install production dependencies with unsafe-perm / network flags if needed
RUN npm install --omit=dev --no-audit --no-fund && npm cache clean --force

# Copy application source code
COPY src/ ./src/

# Create non-root user and set ownership securely
RUN addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup && \
    chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

EXPOSE 5000

CMD ["node", "src/index.js"]
