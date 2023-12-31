"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sequelize_1 = require("sequelize");
const learningpackage_1 = __importDefault(require("./models/learningpackage"));
const learningfact_1 = __importDefault(require("./models/learningfact"));
const user_1 = __importDefault(require("./models/user"));
const userlearningfact_1 = __importDefault(require("./models/userlearningfact"));
const userlearningpackage_1 = __importDefault(require("./models/userlearningpackage"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 3000;
const sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'LearningUser',
    password: 'root',
    database: 'Learning'
});
// initialize models
const LearningPackage = (0, learningpackage_1.default)(sequelize, sequelize_1.DataTypes);
const LearningFact = (0, learningfact_1.default)(sequelize, sequelize_1.DataTypes);
const User = (0, user_1.default)(sequelize, sequelize_1.DataTypes);
const UserLearningFact = (0, userlearningfact_1.default)(sequelize, sequelize_1.DataTypes);
const UserLearningPackage = (0, userlearningpackage_1.default)(sequelize, sequelize_1.DataTypes);
// setup associations
LearningPackage.associate({ LearningFact });
LearningFact.associate({ LearningPackage });
UserLearningFact.associate({ User, LearningFact });
UserLearningPackage.associate({ User, LearningPackage });
// make sure that all models are synced
sequelize.sync();
app.use(express_1.default.json());
app.get('/api/liveness', (req, res) => {
    res.status(200).json({ message: 'OK' });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// GET "/api/package"
app.get('/api/package', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packages = yield LearningPackage.findAll();
        res.json(packages);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// GET "/api/package/:id"
app.get('/api/package/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const packageFound = yield LearningPackage.findByPk(id);
        if (packageFound) {
            res.json(packageFound);
        }
        else {
            res.status(404).json({ error: 'Package not found' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// PUT "/api/package/:id"
app.put('/api/package/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const packageFound = yield LearningPackage.findByPk(id);
        if (packageFound) {
            const { title, description, category, level, prerequisite, tags, license } = req.body;
            yield packageFound.update({ title, description, category, level, prerequisite, tags, license });
            res.json(packageFound);
        }
        else {
            res.status(404).json({ error: 'Package not found' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// GET "/api/package/:id/fact"
app.get('/api/package/:id/fact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const packageFound = yield LearningPackage.findByPk(id);
        if (packageFound) {
            const facts = yield packageFound.getLearningFacts();
            res.json(facts);
        }
        else {
            res.status(404).json({ error: 'Package not found' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// GET "/api/fact"
app.get('/api/fact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const facts = yield LearningFact.findAll();
        res.json(facts);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// GET "/api/fact/:id"
app.get('/api/fact/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const factFound = yield LearningFact.findByPk(id);
        if (factFound) {
            res.json(factFound);
        }
        else {
            res.status(404).json({ error: 'Fact not found' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// PUT "/api/fact/:id"
app.put('/api/fact/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const factFound = yield LearningFact.findByPk(id);
        if (factFound) {
            const { title, fact } = req.body;
            yield factFound.update({ title, fact });
            res.json(factFound);
        }
        else {
            res.status(404).json({ error: 'Fact not found' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// POST "/api/fact"
app.post('/api/fact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, fact, package_id } = req.body;
        const factCreated = yield LearningFact.create({ title, fact, package_id });
        res.json(factCreated);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// DELETE "/api/fact/:id"
app.delete('/api/fact/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const factFound = yield LearningFact.findByPk(id);
        if (factFound) {
            yield factFound.destroy();
            res.json(factFound);
        }
        else {
            res.status(404).json({ error: 'Fact not found' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// GET "/api/user"
app.get('/api/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User.findAll();
        res.json(users);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// GET "/api/user/:id"
app.get('/api/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userFound = yield User.findByPk(id);
        if (userFound) {
            res.json(userFound);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// GET "api/userlearningfact"
app.get('/api/userlearningfact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userLearningFacts = yield UserLearningFact.findAll();
        res.json(userLearningFacts);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// GET "api/userlearningfact/:fact_id" fact_id is a foreign key
app.get('/api/userlearningfact/:fact_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fact_id } = req.params;
        const userLearningFactFound = yield UserLearningFact.findOne({ where: { fact_id } });
        if (userLearningFactFound) {
            res.json(userLearningFactFound);
        }
        else {
            res.status(404).json({ error: 'User learning fact not found' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// POST "api/userlearningfact"
app.post('/api/userlearningfact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fact_id, user_id, timesReviewed } = req.body;
        const userLearningFactCreated = yield UserLearningFact.create({ fact_id, user_id, timesReviewed });
        res.json(userLearningFactCreated);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// PUT "api/userlearningfact/:fact_id" fact_id is a foreign key
app.put('/api/userlearningfact/:fact_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fact_id } = req.params;
        const userLearningFactFound = yield UserLearningFact.findOne({ where: { fact_id } });
        if (userLearningFactFound) {
            const { timesReviewed } = req.body;
            yield userLearningFactFound.update({ fact_id, timesReviewed });
            res.json(userLearningFactFound);
        }
        else {
            res.status(404).json({ error: 'User learning fact not found' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// GET "api/userlearningpackage"
app.get('/api/userlearningpackage', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userLearningPackages = yield UserLearningPackage.findAll();
        res.json(userLearningPackages);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// GET "api/userlearningpackage/:package_id" package_id is a foreign key
app.get('/api/userlearningpackage/:package_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { package_id } = req.params;
        const userLearningPackageFound = yield UserLearningPackage.findOne({ where: { package_id } });
        if (userLearningPackageFound) {
            res.json(userLearningPackageFound);
        }
        else {
            res.status(404).json({ error: 'User learning package not found' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
// PUT "api/userlearningpackage/:package_id" package_id is a foreign key
app.put('/api/userlearningpackage/:package_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { package_id } = req.params;
        const userLearningPackageFound = yield UserLearningPackage.findOne({ where: { package_id } });
        if (userLearningPackageFound) {
            const { minutes } = req.body;
            yield userLearningPackageFound.update({ package_id, minutes });
            res.json(userLearningPackageFound);
        }
        else {
            res.status(404).json({ error: 'User learning package not found' });
        }
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal error' });
    }
}));
