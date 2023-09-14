# Fake Install

A utility module for simulating the installation of npm packages.

## Installation

You can install this package using npm:

```bash
npm install fake-install
```

## Usage

In your Node.js project, you can use this module to simulate the installation of an npm package. Here's how you can use it:

```javascript
const { fakeInstall } = require('fake-install');

const packageName = 'example-package'; // Replace with the name of the package you want to simulate the installation of
const targetPath = process.cwd(); // You can specify the target directory where the package should be installed

try {
  fakeInstall(packageName, targetPath);
  console.log(`Successfully simulated installation of '${packageName}'`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
```

This code will simulate the installation of the specified package in the target directory.

## API

### `fakeInstall(packageName: string, targetPath: string = process.cwd()): void`

- `packageName` (string): The name of the npm package you want to simulate the installation of.
- `targetPath` (string, optional): The target directory where the package should be installed. Defaults to the current working directory.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
