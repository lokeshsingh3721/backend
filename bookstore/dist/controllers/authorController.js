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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorById = exports.allAuthorDetails = void 0;
const client_1 = require("@prisma/client");
function allAuthorDetails(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        const author = yield prisma.author.findMany();
        if (!author) {
            return res.json({
                message: "authors not found",
            });
        }
        res.json({
            message: "authors found",
            author,
        });
    });
}
exports.allAuthorDetails = allAuthorDetails;
function authorById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        const { id } = req.params;
        const author = yield prisma.author.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        if (!author) {
            return res.json({
                message: "author not found",
            });
        }
        res.json({
            message: "author found",
            author,
        });
    });
}
exports.authorById = authorById;