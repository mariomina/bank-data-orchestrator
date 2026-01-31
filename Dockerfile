# --- Stage 1: Build Angular Client ---
FROM node:20-alpine as client-build
WORKDIR /usr/src/app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# --- Stage 2: Build Node Server & Serve ---
FROM node:20-alpine
WORKDIR /usr/src/app

# Copy server dependencies
COPY server/package*.json ./
RUN npm install --production

# Copy server source code
COPY server/ .

# Make a directory for the frontend build
RUN mkdir public

# Copy built frontend assets from Stage 1 to the server's public folder
# Note: Adjust 'dist/client/browser' if your angular.json outputs somewhere else, 
# but this is standard for Angular 17+
COPY --from=client-build /usr/src/app/client/dist/client/browser ./public

# Expose the port (Render will set the PORT env var, typically 10000 or similar, but we explose 3000 as default)
EXPOSE 3000

# Start command
CMD ["node", "src/index.js"]
