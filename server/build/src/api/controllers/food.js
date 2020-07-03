"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFood = void 0;
const axios_1 = require("@lib/axios");
/**
 * @param GET /
 * fetch To Food DB
 */
exports.getFood = async (req, res) => {
    try {
        const response = await axios_1.fetchFood.get("/json/1/5");
        return res.status(200).json(response);
    }
    catch (error) {
        console.error("error", error);
    }
};
//# sourceMappingURL=food.js.map