import path from 'path';
import fs from 'fs';

function getPackagePath(packageName: string) {
  try {
    return path.dirname(require.resolve(`${packageName}/package.json`));
  } catch (error) {
    return path.resolve(
      require.resolve(packageName).split(packageName)[0],
      packageName,
    );
  }
}

export function fakeInstall(packageName: string, targetPath = process.cwd()) {
  const packagePath = getPackagePath(packageName);
  if (!packagePath) {
    throw new Error(`Cannot find module '${packageName}'`);
  }
  const targetNodeModulesPath = path.resolve(targetPath, 'node_modules');
  if (!fs.existsSync(targetNodeModulesPath)) {
    throw new Error(`Cannot find 'node_modules' in target path: ${targetPath}`);
  }
  const targetPackagePath = path.resolve(targetNodeModulesPath, packageName);
  if (!fs.existsSync(targetPackagePath)) {
    fs.symlinkSync(packagePath, targetPackagePath, 'dir');
  }
}

export default fakeInstall;
