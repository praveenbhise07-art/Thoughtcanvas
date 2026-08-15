# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev && npm cache clean --force

# ---- Production stage ----
FROM node:20-alpine AS production

# Security: install dumb-init and create non-root user
RUN apk --no-cache add dumb-init && \
    addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup

WORKDIR /app

# Copy files with ownership assigned directly to avoid extra container runtime hooks
COPY --from=build --chown=appuser:appgroup /app/node_modules ./node_modules
COPY --chown=appuser:appgroup src/ ./src/

USER appuser

EXPOSE 5000

# Security: use dumb-init for proper signal handling (PID 1 problem)
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "src/index.js"]