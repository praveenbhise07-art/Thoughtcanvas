# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev && npm cache clean --force

# ---- Production stage ----
FROM node:20-alpine AS production

# Security: create non-root user cleanly
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN apk --no-cache add dumb-init

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
