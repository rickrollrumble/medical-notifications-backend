# Setup

1. Run the Docker Compose file:
```
docker compose up -d
```
2. Run the migrations: 
```
npm run typeorm migration:run
```
To delete the migrations, run:
```
npm run typeorm migration:revert
```