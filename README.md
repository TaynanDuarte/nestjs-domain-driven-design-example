# NestJs Domain Driven Design Example

A simple Rest API using NestJS in order to apply some Domain Driven Design concepts.

### Endpoints

```json

POST http://localhost:3000/user

{
 "name": "username",
 "email": "usr@gmail.com",
 "password": "12456"
}
```

### How to run

```bash
docker-compose build
docker-compose up -d
```

Two containers will be started. One of them with the Rest API and the other with MongoDB.

### Folder Structure

```
└ api               → Rest API
└ core              → Application core
    └ contracts     → DDD elements Abstractions
    └ domain        → Application domain
        └ entities
        └ enums
        └ interface
        └ services
        └ valueObjects
    └ infrastructure 
        └ mappers
            └ mongoose
        └ repositories
            └ mongoose
                └ schemas
```
