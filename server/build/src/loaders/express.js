"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("@config/index"));
// Controllers ( route handlers )
const foodsController = __importStar(require("@controllers/food"));
const speechController = __importStar(require("@controllers/speech"));
const expressLoader = async ({ app }) => {
    /* Health Check endpoints */
    app.get("/", async (req, res) => {
        res.status(200).end("Good");
    });
    // Middleware that transforms the raw string of req.body into json
    app.use(body_parser_1.default.json());
    app.use(index_1.default.api.food, foodsController.getFood);
    app.use(index_1.default.api.speech, speechController.getSpeech);
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors_1.default());
};
exports.default = expressLoader;
//# sourceMappingURL=express.js.map