const path = require('path');

const LAMBDA_FILE_LOC = path.join(__dirname, './build/lambda.js');
const LAMBDA_DIR = path.join(__dirname, './build');
const LAMBDA_FILE_PROD = './lambda_prod.js'

module.exports = {
    entry: LAMBDA_FILE_LOC,
    externals: ['aws-sdk'],
    output: {
        libraryTarget: 'commonjs',
        filename: LAMBDA_FILE_PROD,
        path: LAMBDA_DIR
    },
    target: 'node',
    node: {
        __filename: false,
        __dirname: false
    },
    mode: 'production'
};