# node-and-react-development-project

## Node.js: backend

Globally, typescript should be installed:
- `npm install -g typescript`

Because of some errors, the following command should be run:
- `npm i --save-dev @types/express`

To install the dependencies, run the following command:
- `npm install -s express`
- `npm install sequelize sequelize-typescript pg pg-hstore`
- `npm install cors`
- `npm install chart.js primeng --force`

Then, create a new role in PostgreSQL. Go to pgAdmin 4 and create a new role named `LearningUser` with the password `root` and all privileges (see below):
![LearningUser role]('captures/role.png')
![LearningUser password]('captures/password.png')
![LearningUser privileges]('captures/privileges.png')

To create and populate the database, run the following command (make sure that this package is globally installed: `npm install -g sequelize-cli`):
- `npx sequelize-cli db:create`
- `npx sequelize-cli db:migrate`
- `npx sequelize-cli db:seed:all`

To run the server, run the following command:
- `node app.js`


## Angular: frontend

Globally, @angular-cli should be installed:
- `npm install -g @angular/cli`

To install the dependencies, run the following command:
- 
- `npm install primeng --force`
- `npm install @angular/router @angular/animations --force`