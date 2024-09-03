# Alondra Nuts Backend

**Descripción**: Este proyecto es una aplicación backend creada con Node.js, Express y Prisma, con autenticación JWT y Google Auth, y utilizando una base de datos PostgreSQL.

## Requisitos Previos

- Node.js (versión 14.x o superior)
- PostgreSQL (versión 12.x o superior)
- Prisma ORM

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/alondra-nuts-backend.git
cd alondra-nuts-backend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear base de datos alondra_nuts;

```bash
CREATE DATABASE alondra_nuts;
```
### Configurar archivo env para la conexion con la base de datos

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/alondra_nuts"
```

### Realizar la migracion con prisma

```bash
npx prisma migrate dev --name init
```


