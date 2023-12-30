import express from 'express';
import { Sequelize, Model, DataTypes } from 'sequelize';

import setupLearningPackageModel from './models/learningpackage';
import setupLearningFactModel from './models/learningfact';
import setupUser from './models/user';

const app = express();
const port = 3000;

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'LearningUser',
    password: 'root',
    database: 'Learning'
});

// initialize models
const LearningPackage = setupLearningPackageModel(sequelize, DataTypes);
const LearningFact = setupLearningFactModel(sequelize, DataTypes);
const User = setupUser(sequelize, DataTypes);

// make sure that all models are synced
sequelize.sync();

app.use(express.json());

app.get('/api/liveness', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// GET "/api/package"
app.get('/api/package', async (req, res) => {
    try {
        const packages = await LearningPackage.findAll();
        res.json(packages);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
});

// GET "/api/package/:id"
app.get('/api/package/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const packageFound = await LearningPackage.findByPk(id);
        if (packageFound) {
            res.json(packageFound);
        } else {
            res.status(404).json({ error: 'Package not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
});