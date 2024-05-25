import fs from "fs";
import path from "path";
import YAML from "yaml";

interface BlinkConfig {
  every: string;
  duration: string;
}

function readJsonConfig(filePath: string): BlinkConfig | null {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const config: BlinkConfig = JSON.parse(data);
    return config;
  } catch (error: any) {
    console.error(`Error reading JSON config file: ${error.message}`);
    return null;
  }
}

function readYamlConfig(filePath: string): BlinkConfig | null {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const config: BlinkConfig = YAML.parse(data);
    return config;
  } catch (error: any) {
    console.error(`Error reading YAML config file: ${error.message}`);
    return null;
  }
}

export function readConfigFromFile(filePath: string): BlinkConfig | null {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".json") {
    return readJsonConfig(filePath);
  } else if (ext === ".yml" || ext === ".yaml") {
    return readYamlConfig(filePath);
  } else {
    console.error(
      "Unsupported file type. Only JSON and YAML files are supported."
    );
    return null;
  }
}
