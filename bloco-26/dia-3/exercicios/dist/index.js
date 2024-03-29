"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
require("express-async-errors");
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send('Exercicios 26.3');
});
app.use(users_routes_1.default);
app.listen(PORT, () => {
    console.log(`On line na porta: ${PORT}`);
});
