# NestJs Domain Driven Design Example

A simple Rest API using NestJS in order to apply some Domain Driven Design concepts

### End Points

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
