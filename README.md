# SESAMm fullstack technical interview

## Database
- You have two CSV files available to create your database with `100 000` entries.
- Two SQL tables `users` and `addresses`.

### Prerequisites
- Sqlite3 database

### Data schemes
```
    `users` table schema:
        id int,
        firstName string,
        lastName string,
        gender string,
        email string,
        age int,
        eyeColor string,
        phone string,
        registered string
```
```
    `addresses` table schema:
        id int,
        streetNumber int,
        street string,
        postalCode int,
        city string,
        userId Foreign key users.id
```
