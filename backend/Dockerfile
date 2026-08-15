FROM node:20-alpine

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json* ./

# Install production dependencies
RUN npm install --omit=dev && npm cache clean --force

# Copy application source code
COPY src/ ./src/

# Create non-root user and set ownership securely in one layer
RUN addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup && \
    chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

EXPOSE 5000

CMD ["node", "src/index.js"]
