"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readConfigFromFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const yaml_1 = __importDefault(require("yaml"));
function readJsonConfig(filePath) {
    try {
        const data = fs_1.default.readFileSync(filePath, "utf8");
        const config = JSON.parse(data);
        return config;
    }
    catch (error) {
        console.error(`Error reading JSON config file: ${error.message}`);
        return null;
    }
}
function readYamlConfig(filePath) {
    try {
        const data = fs_1.default.readFileSync(filePath, "utf8");
        const config = yaml_1.default.parse(data);
        return config;
    }
    catch (error) {
        console.error(`Error reading YAML config file: ${error.message}`);
        return null;
    }
}
function readConfigFromFile(filePath) {
    const ext = path_1.default.extname(filePath).toLowerCase();
    if (ext === ".json") {
        return readJsonConfig(filePath);
    }
    else if (ext === ".yml" || ext === ".yaml") {
        return readYamlConfig(filePath);
    }
    else {
        console.error("Unsupported file type. Only JSON and YAML files are supported.");
        return null;
    }
}
exports.readConfigFromFile = readConfigFromFile;
