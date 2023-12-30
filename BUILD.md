# node-and-react-development-project

## Node.js: backend

- `npm install -g typescript`
- `npm i --save-dev @types/express`

To install the dependencies, run the following command:
- `npm install sequelize sequelize-typescript pg pg-hstore`

Then, create a new role in PostgreSQL. Go to pgAdmin 4 and create a new role named `LearningUser` with the password `root` and all privileges (see below):
![LearningUser role]('captures/role.png')
![LearningUser password]('captures/password.png')
![LearningUser privileges]('captures/privileges.png')

To create and populate the database, run the following command (make sure that this package is installed: `npm install -g sequelize-cli`):
- `npx sequelize-cli db:create`
- `npx sequelize-cli db:migrate`
- `npx sequelize-cli db:seed:all`

To run the server, run the following command:
- `node app.js`


## Angular: frontend

To install the dependencies, run the following command:
- 
- `npm install primeng --force`
- `npm install @angular/router @angular/animations --force`