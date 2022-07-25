# Attractech
Submission to YYC hacks 2022.

## What is Attractech?
This is a web application that allows tourists, and people who are new to downtown Calgary, to explore, and see new things, and make the most of their time downtown. 

## What technoliges are we using?
### Frontend
- React
- Bootstrap
- Vite

### Backend
- Go
- SQL Database

### Project Directories
Build this project as a [Monorepo](https://en.wikipedia.org/wiki/Monorepo).

You can put your project under those directories.

```
├── api
├── app
├── backend
├── frontend
```

- api: for api specification.
- app: mobile app application project.
- backend: backend service project.
- frontend: frontend project.

### Migration

Create Migration:
```
migrate create -dir migrate -ext sql [schema_name|alter_name]
```

Create Golang XO:
```
xo schema mysql://user:pass@host:port/Attractech -o model
```
