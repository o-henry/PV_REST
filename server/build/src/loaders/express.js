"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var expressLoader = function (_a) {
    var app = _a.app;
    /* Health Check endpoints */
    app.get("/", function (req, res) {
        res.status(200).end("Good");
    });
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors_1.default());
};
exports.default = expressLoader;
