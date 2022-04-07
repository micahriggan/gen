module.exports = `{
  "name": "sample-backend",
  "version": "1.0.0",
  "description": "",
  "main": "ts_build/src/index.js",
  "scripts": {
    "test": "jest",
    "compile": "tsc",
    "start": "npm run compile && node ts_build/src/index.js",
    "lint": "tslint"
  },
  "keywords": [],
  "author": "Micah Riggan",
  "license": "MIT",
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/jest": "^27.4.1",
    "jest": "^27.5.1",
    "prettier": "2.6.2",
    "ts-jest": "^27.1.4",
    "ts-node": "^10.7.0",
    "tslint": "^6.1.3"
  },
  "dependencies": {
    "express": "^4.17.3",
    "morgan": "^1.10.0",
    "node-fetch": "^3.2.3",
    "typescript": "^4.6.3"
  }
}
`
