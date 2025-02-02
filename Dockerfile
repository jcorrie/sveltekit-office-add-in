# Build stage
FROM node:22-bullseye-slim AS builder
WORKDIR /app

# Install sudo so that certificate installation can succeed
RUN apt-get update && apt-get install -y sudo && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --omit=dev

# Production stage
FROM node:22-bullseye-slim
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]