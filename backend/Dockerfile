# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev && npm cache clean --force

# ---- Production stage ----
FROM node:20-alpine AS production

# Install dumb-init and create non-root user in a single RUN command to prevent shim task failure
RUN apk update && \
    apk add --no-cache dumb-init && \
    addgroup -S appgroup && \
    adduser -S appuser -G appgroup

WORKDIR /app

# Copy production files
COPY --from=build /app/node_modules ./node_modules
COPY src/ ./src/

# Change ownership
RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 5000

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "src/index.js"]
