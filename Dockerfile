FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Prisma client generieren
RUN npx prisma generate

# Typescript kompilieren
RUN npm run build

# Starte nur das, was `docker-compose` vorgibt
CMD ["sh", "-c", "npm run start"]

