# Monorepository with npm

This is a basic implementation using npm workspaces to handle monorepos

## Folder structure

```bash
├── apps
│   ├── blog
│   └── dashboard
└── libs
    └── utils
```

## Useful commands

### Create new package/lib/app

```bash
mkdir my-package
cd my-package
npm init -y
```

open `package.json` and change the package name using the following pattern
`@monorepo/my-package`

### Installing packages

for specific packages we have to use the flag `-w`

```bash
npm install lodash -w @monorepo/my-package
```

to install in all of the packages we have to use the flag `-ws`

```bash
npm install lodash -ws
```

### Running commands from root folder

I've implemented [concurrently](https://www.npmjs.com/package/concurrently) in order to run multiple script in parrallel

```bash
npm run build
npm run check
```
