# SeleBlog

## Installation

### Get started with docker:

1. Start docker

2. Run: `docker-compose build `

3. Run: `docker-compose up -d`

4. Connect database `localhost:3306 / user:sail, password:root`

5. Create new database name, ex: `seleblog`

6. Change information on .env
   `cp .env.example .env`

7. ssh: `docker exec -it seleblog bash `

8. Run migrate: `composer install`

9. Run migrate: `php artisan migrate`

10. Run : `npm install`

11. Run : `npm run dev`
