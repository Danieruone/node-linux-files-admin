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
exports.createFile = createFile;
const fs_1 = require("fs");
const path_1 = require("path");
/**
 * Creates a file in the file system
 * @param name - The name of the file to create, including extension
 * @param content - The content that the file will have
 * @returns Promise<void> - A promise that resolves when the file is created
 */
function createFile(name, content) {
    return __awaiter(this, void 0, void 0, function* () {
        const path = (0, path_1.join)(__dirname, '../../files', name); // Creates the file in the 'files' folder
        return new Promise((resolve, reject) => {
            (0, fs_1.writeFile)(path, content, 'utf8', (err) => {
                if (err) {
                    console.error('Error creating the file:', err);
                    reject(err); // Rejects the promise if an error occurs
                }
                else {
                    console.log(`File ${name} created successfully at ${path}.`);
                    resolve(); // Resolves the promise if the file is created successfully
                }
            });
        });
    });
}
//# sourceMappingURL=fileService.js.map