# Customers Service

Dieser Microservice verwaltet Business-Kunden und stellt eine REST-API bereit. Er basiert auf Node.js, Express und Prisma ORM mit einer PostgreSQL-Datenbank. Die Bereitstellung kann lokal oder via Docker erfolgen.

## Features

- Anlegen und Abrufen von Business-Kunden
- Anbindung an PostgreSQL über Prisma
- Einfache Erweiterbarkeit und Docker-Support

## Projektstruktur

```
.
├── prisma/
│   └── schema.prisma         # Datenbankschema
├── src/
│   ├── app.ts                # Express-App
│   ├── server.ts             # Server-Startpunkt
│   ├── controllers/
│   │   └── businessCustomer.controller.ts
│   ├── routes/
│   │   └── businessCustomer.routes.ts
│   ├── services/
│   │   └── businessCustomer.service.ts
│   └── db/
│       └── client.ts         # Prisma-Client
├── .env                      # Umgebungsvariablen
├── Dockerfile                # Docker-Buildfile
├── docker-compose.yml        # Docker-Compose Setup
└── README.md
```

## Setup & Entwicklung

1. **Repository klonen**

   ```sh
   git clone <repo-url>
   cd customers-service
   ```

2. **Abhängigkeiten installieren**

   ```sh
   npm install
   ```

3. **Umgebungsvariablen anpassen**  
   Die Datei `.env` enthält die Datenbankverbindung (z.B. `DATABASE_URL`).

4. **Prisma Client generieren**

   ```sh
   npx prisma generate
   ```

5. **Migration durchführen**

   ```sh
   npx prisma migrate dev --name init
   ```

6. **Server starten**
   ```sh
   npm run dev
   ```

## Docker-Nutzung

1. **Docker-Container starten**

   ```sh
   docker-compose up --build
   ```

2. **Migration im Container ausführen**
   ```sh
   docker-compose exec app npx prisma migrate deploy
   ```

## API Endpunkte

### POST `/api/customers/business-customers`

Legt einen neuen Business-Kunden an.

**Beispiel:**

```sh
curl -X POST http://localhost:3001/api/customers/business-customers \
  -H "Content-Type: application/json" \
  -d '{"name":"Test GmbH","email":"info@test.de"}'
```

### GET `/api/customers/business-customers/:id`

Gibt einen Business-Kunden anhand der ID zurück.

**Beispiel:**

```sh
curl http://localhost:3001/api/customers/business-customers/123
```

## Datenbankmodell

Das Datenbankschema befindet sich in `prisma/schema.prisma`.  
Die Verbindung wird über die Umgebungsvariable `DATABASE_URL` gesteuert.

## Lizenz

ISC

---

**Hinweis:**  
Für Fragen oder Erweiterungen siehe die jeweiligen Quellcodedateien oder kontaktiere das Entwicklungsteam.
