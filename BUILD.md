# Node and React Development Project

## Node.js: backend (in the `backend-nodejs` folder)

Globally, typescript and sequelize-cli should be installed:
- `npm install -g typescript sequelize-cli`

To install the dependencies, run the following command:
- `npm install --force`

If any trouble, here all the commands we used to install the packages/dependencies:
- `npm install cors sequelize sequelize-typescript pg pg-hstore`
- `npm install -s express`
- `npm i --save-dev @types/express` (because of some errors with express, the following command should be run)

Then, create a new role in PostgreSQL. Go to pgAdmin 4 and create a new role named `LearningUser` with the password `root` and all privileges (see below):
![LearningUser role]('captures/role.png')
![LearningUser password]('captures/password.png')
![LearningUser privileges]('captures/privileges.png')

To create and populate the database, run the following command (make sure that sequelize-cli is globally installed):
- `npx sequelize-cli db:create`
- `npx sequelize-cli db:migrate`
- `npx sequelize-cli db:seed:all`

To run the server, run the following command:
- `node app.js`


## Angular: frontend (in the `frontend-angular` folder)

Globally, @angular-cli should be installed:
- `npm install -g @angular/cli`

To install the dependencies, run the following command:
- `npm install --force`

If any trouble, here all the commands we used to install the packages/dependencies:
- `ng add @fortawesome/angular-fontawesome @ng-bootstrap/ng-bootstrap`
- `npm install chart.js primeng --force`