const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

const COMPONENTS_PATH = path.join(__dirname, '../');

module.exports = (baseConfig, env, config) => {
    // const config = genDefaultConfig(baseConfig, env);
    // Extend it as you need.
    // For example, add typescript loader:
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [COMPONENTS_PATH],
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
            }
        ]
    });

    config.plugins.push(new TSDocgenPlugin());
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.modules.push('./src');
    config.node = {
        __dirname: true
    };

    return config;
};