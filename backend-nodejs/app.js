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
const sequelize_1 = require("sequelize");
const learningpackage_1 = __importDefault(require("./models/learningpackage"));
const learningfact_1 = __importDefault(require("./models/learningfact"));
const user_1 = __importDefault(require("./models/user"));
const app = (0, express_1.default)();
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
