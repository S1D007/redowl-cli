Creating a proper README file that is informative and SEO-friendly can help improve the visibility of your project on Google. Here's a sample README for your CLI tool, "RedOwl," that aims to be comprehensive and optimized for search engines.

---

# RedOwl CLI

RedOwl CLI is a productivity tool designed to help users take regular breaks and blink their eyes to prevent eye strain. With customizable intervals and durations, RedOwl ensures you maintain healthy eye habits while working on your computer.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
   - [Using the Script](#using-the-script)
   - [Manual Installation](#manual-installation)
3. [Usage](#usage)
4. [Configuration](#configuration)
   - [JSON Configuration](#json-configuration)
   - [YAML Configuration](#yaml-configuration)
5. [Contributing](#contributing)
6. [License](#license)

## Features

- Set reminders to blink your eyes at regular intervals.
- Customize the duration of breaks.
- Supports JSON and YAML configuration files.
- Plays a sound to alert you when it's time to take a break and when the break ends.
- Logs the number of completed sessions and the time remaining for the next break.

## Installation

### Using the Script

You can easily install RedOwl CLI using the following command. This script will check for Node.js and Yarn, clone the repository, install dependencies, and set up the CLI tool.

```sh
curl -sSL https://raw.githubusercontent.com/S1D007/redowl-cli/main/install.sh | bash
```

### Manual Installation

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/your-username/redowl-cli.git
   cd redowl-cli
   ```

2. **Install Dependencies:**

   ```sh
   pnpm install
   ```

3. **Compile TypeScript Files:**

   ```sh
   pnpm build
   ```

4. **Link the CLI Globally:**

   ```sh
   pnpm run link-cli
   ```

## Usage

Once installed, you can use the `redowl` command to start the CLI tool. Here are some basic commands:

- **Start the CLI:**

  ```sh
  redowl start --every 20m --for 20s
  ```

  This command sets a reminder to blink every 20 minutes for 20 seconds.

- **Show Help:**

  ```sh
  redowl --help
  ```

## Configuration

RedOwl CLI supports both JSON and YAML configuration files for setting up custom intervals and durations.

### JSON Configuration

Create a `config.json` file with the following structure:

```json
{
  "every": "20m",
  "for": "20s"
}
```

### YAML Configuration

Create a `config.yaml` file with the following structure:

```yaml
every: "20m"
for: "20s"
```

## Contributing

We welcome contributions from the community! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Open a pull request to the `main` branch of the original repository.

Please ensure your code follows our coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
