"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("@config/index"));
const index_2 = require("@api/index");
const expressLoader = ({ app }) => {
    /* Health Check endpoints */
    app.get("/", (req, res) => {
        res.status(200).end("Good");
    });
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors_1.default());
    // Middleware that transforms the raw string of req.body into json
    app.use(body_parser_1.default.json());
    app.use(index_1.default.api.prefix, index_2.getFood);
};
exports.default = expressLoader;
