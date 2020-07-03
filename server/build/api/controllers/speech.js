"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpeech = void 0;
const axios_1 = require("@lib/axios");
/**
 * @param GET /
 * Speech Module
 */
exports.getSpeech = async (req, res) => {
    try {
        const response = await axios_1.fetchKakao.post("/v1/recognize");
        console.log("speech: ", response);
        return res.status(200).json(response);
    }
    catch (error) {
        console.error("error :", error);
    }
};
//# sourceMappingURL=speech.js.map