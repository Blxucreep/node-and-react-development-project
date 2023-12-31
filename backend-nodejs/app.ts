import express from 'express';
import cors from 'cors';
import { Sequelize, DataTypes } from 'sequelize';

import setupLearningPackageModel from './models/learningpackage';
import setupLearningFactModel from './models/learningfact';
import setupUser from './models/user';
import setupUserLearningFactModel from './models/userlearningfact';
import setupUserLearningPackageModel from './models/userlearningpackage';

const app = express();
app.use(cors());

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
const UserLearningFact = setupUserLearningFactModel(sequelize, DataTypes);
const UserLearningPackage = setupUserLearningPackageModel(sequelize, DataTypes);

// setup associations
LearningPackage.associate({ LearningFact });
LearningFact.associate({ LearningPackage });
UserLearningFact.associate({ User, LearningFact });
UserLearningPackage.associate({ User, LearningPackage });

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

// PUT "/api/package/:id"
app.put('/api/package/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const packageFound = await LearningPackage.findByPk(id);
        if (packageFound) {
            const { title, description, category, level, prerequisite, tags, license } = req.body;
            await packageFound.update({ title, description, category, level, prerequisite, tags, license });
            res.json(packageFound);
        } else {
            res.status(404).json({ error: 'Package not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
});

// GET "/api/package/:id/fact"
app.get('/api/package/:id/fact', async (req, res) => {
    try {
        const { id } = req.params;
        const packageFound = await LearningPackage.findByPk(id);
        if (packageFound) {
            const facts = await packageFound.getLearningFacts();
            res.json(facts);
        } else {
            res.status(404).json({ error: 'Package not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
});

// GET "/api/fact"
app.get('/api/fact', async (req, res) => {
    try {
        const facts = await LearningFact.findAll();
        res.json(facts);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
});

// GET "/api/fact/:id"
app.get('/api/fact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const factFound = await LearningFact.findByPk(id);
        if (factFound) {
            res.json(factFound);
        } else {
            res.status(404).json({ error: 'Fact not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
});

// PUT "/api/fact/:id"
app.put('/api/fact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const factFound = await LearningFact.findByPk(id);
        if (factFound) {
            const { title, fact } = req.body;
            await factFound.update({ title, fact });
            res.json(factFound);
        } else {
            res.status(404).json({ error: 'Fact not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
});

// POST "/api/fact"
app.post('/api/fact', async (req, res) => {
    try {
        const { title, fact, package_id } = req.body;
        const factCreated = await LearningFact.create({ title, fact, package_id });
        res.json(factCreated);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
});

// DELETE "/api/fact/:id"
app.delete('/api/fact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const factFound = await LearningFact.findByPk(id);
        if (factFound) {
            await factFound.destroy();
            res.json(factFound);
        } else {
            res.status(404).json({ error: 'Fact not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' })
    }
});

// GET "/api/user"
app.get('/api/user', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
});

// GET "/api/user/:id"
app.get('/api/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const userFound = await User.findByPk(id);
        if (userFound) {
            res.json(userFound);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
});

// GET "api/userlearningfact"
app.get('/api/userlearningfact', async (req, res) => {
    try {
        const userLearningFacts = await UserLearningFact.findAll();
        res.json(userLearningFacts);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error'});
    }
});