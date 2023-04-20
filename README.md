# Setting up

## Initilization
First, `npm init` to initilize the project

## Installing Dependencies
In this project, we will use babel for running Jest using TypeScript. In order to install bebel dependencies, input the following commands in the terminal:
```
npm install --save sequelize pg pg-hstore
npm install --save-dev typescript ts-node jest babel-jest @types/sequelize @types/jest @babel/preset-typescript @babel/preset-env @babel/core
```

## Create tsconfig.json
We need `tsconfig.json` in order to transcript TypeScript files from src to dist folders.
```
{
    "compilerOptions": {
        "module": "commonjs",
        "moduleResolution": "node",
        "target": "es2017",
        "rootDir": "./src",
        "outDir": "./dist",
        "esModuleInterop": false,
        "strict": true,
        "baseUrl": ".",
        "typeRoots": ["node_modules/@types"]
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "**/*.test.ts"]
}
```

## Create babel.config.js
```
module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript',
    ],
};
```

# Execution the test
The following scripts will be added into our package.json so that we can run the test.
```
...
"scripts": {
    "build": "tsc",
    "build-watch": "tsc -w",
    "test": "jest --coverage ./src"
},
...
```

In order to execute the test, use the command `npm test` in the terminal.
