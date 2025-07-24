# Base image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build TypeScript (wenn verwendet)
RUN npm run build

# Start server
CMD ["npm", "run", "start"]
