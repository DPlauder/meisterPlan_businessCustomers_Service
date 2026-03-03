# Customers Service

Dieser Microservice verwaltet Business-Kunden und stellt eine REST-API bereit. Er basiert auf Node.js, Express und Prisma ORM mit einer PostgreSQL-Datenbank. Die Bereitstellung kann lokal oder via Docker erfolgen.

---

## Features

- Anlegen, Abrufen, Aktualisieren und Löschen von Business-Kunden
- Anbindung an PostgreSQL über Prisma
- REST-API mit Express
- Docker-Support für einfache Bereitstellung

---

## Projektstruktur

```
.
├── prisma/
│   └── schema.prisma         # Datenbankschema für Prisma
├── src/
│   ├── app.ts                # Express-App
│   ├── server.ts             # Server-Startpunkt
│   ├── config/
│   │   └── env.ts            # Umgebungsvariablen
│   ├── controllers/
│   │   └── businessCustomer.controller.ts
│   ├── db/
│   │   └── client.ts         # Prisma-Client-Initialisierung
│   ├── middlewares/
│   │   └── error.middleware.ts
│   ├── models/
│   │   └── businessCustomer.model.ts
│   ├── routes/
│   │   └── businessCustomer.routes.ts
│   ├── services/
│   │   └── businessCustomer.service.ts
│   └── validators/
│       └── businessCustomer.validator.ts
├── .env                      # Umgebungsvariablen
├── Dockerfile                # Docker-Buildfile
├── docker-compose.yaml       # Docker-Compose Setup
└── README.md
```

---

## Setup & Entwicklung

### 1. Repository klonen

```sh
git clone <repo-url>
cd customers-service
```

### 2. Abhängigkeiten installieren

```sh
npm install
```

### 3. Umgebungsvariablen anpassen

Passe die Datei `.env` an deine Umgebung an. Beispiel:

```
DATABASE_URL="postgresql://postgres:deinPasswort@localhost:5432/customers?schema=public"
PORT=3001
CORS_ORIGIN=http://localhost:5173
```

### 4. Prisma Client generieren

```sh
npx prisma generate
```

### 5. Migration durchführen

```sh
npx prisma migrate dev --name init
```

### 6. Server starten (Entwicklung)

```sh
npm run dev
```

---

## Docker-Nutzung

### 1. Container starten

```sh
docker-compose up --build
```

### 2. Migration im Container ausführen (optional)

```sh
docker-compose exec service npx prisma migrate deploy
```

---

## Deployment auf Render.com

Dieser Service kann direkt über ein Git-Repository auf Render deployed werden.

### 1. Voraussetzungen

- Repository in GitHub/GitLab/Bitbucket
- Datei `render.yaml` im Projekt-Root (ist enthalten)

### 2. Render Blueprint deployen

1. In Render: **New +** → **Blueprint**
2. Repository auswählen
3. Render erkennt `render.yaml` und erstellt:

- Web Service `customers-service`
- PostgreSQL `customers-db`

### 3. Wichtige Details

- `DATABASE_URL` wird automatisch aus der Render-Postgres-Instanz gesetzt.
- Beim Start werden Migrationen automatisch ausgeführt (`prisma migrate deploy`).
- `PORT` wird von Render vorgegeben; der Service nutzt bereits `process.env.PORT`.
- `CORS_ORIGIN` in Render als Environment Variable setzen (z. B. URL deines Frontends).

### 4. Build- und Start-Kommandos (aus `render.yaml`)

```sh
Build: npm ci && npm run build
Start: npm run prisma:migrate:deploy && npm run start
```

---

## API Endpunkte

### GET `/api/business-customers`

Gibt alle Business-Kunden zurück.

### POST `/api/business-customers`

Legt einen neuen Business-Kunden an.

**Beispiel:**

```sh
curl -X POST http://localhost:3001/api/business-customers \
  -H "Content-Type: application/json" \
  -d '{"name":"Test GmbH","email":"info@test.de"}'
```

### GET `/api/business-customers/:id`

Gibt einen Business-Kunden anhand der ID zurück.

### PUT `/api/business-customers/:id`

Aktualisiert einen Business-Kunden.

### DELETE `/api/business-customers/:id`

Löscht einen Business-Kunden.

---

## Datenbankmodell

Das Datenbankschema befindet sich in [`prisma/schema.prisma`](prisma/schema.prisma):

```prisma
model BusinessCustomer {
  id          String   @id @default(uuid())
  name        String
  email       String   @unique
  phone       String?
  website     String?
  address     String?
  city        String?
  postalCode  String?
  country     String?
  taxNumber   String?
  createdAt   DateTime @default(now())
}
```

---

## Entwicklungshinweise

- Die Datenbankverbindung wird über die Umgebungsvariable `DATABASE_URL` gesteuert.
- Der Prisma Client wird in [`src/db/client.ts`](src/db/client.ts) initialisiert.
- Die Business-Logik befindet sich im Service-Layer ([`src/services/businessCustomer.service.ts`](src/services/businessCustomer.service.ts)).
- Die API-Routen sind in [`src/routes/businessCustomer.routes.ts`](src/routes/businessCustomer.routes.ts) definiert.
- Fehlerbehandlung und Validierung können über Middleware und Validatoren erweitert werden.

---

## Lizenz

ISC

---

**Hinweis:**  
Für Fragen oder Erweiterungen siehe die jeweiligen Quellcodedateien oder kontaktiere das Entwicklungsteam.
