require('dotenv').config();

const webpack = require('webpack');
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withMDX = require('@zeit/next-mdx')()
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const nextConfig = {
  target: 'serverless',
  webpack: (config) => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/build/],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )

    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )

    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop')
    )

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })

    return config
  }
};

module.exports = withPlugins([withMDX, withCSS], nextConfig)
