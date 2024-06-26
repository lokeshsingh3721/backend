"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("tiny"));
app.use("/api/v1", index_1.default);
app.listen(4000, () => {
    console.log("app is listening to the port 4000");
});
