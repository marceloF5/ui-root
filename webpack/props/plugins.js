const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const pluginsBase = [
        new MiniCssExtractPlugin({
            filename: `main.${env.production ? '"[hash]"' : ''}.css`,
        }),
        new ManifestPlugin({
            fileName: 'manifest.json',
            map: (file) => {
                file.name = file.name.replace(/\./g, '');
                return file;
            },
        }),
    ];

    const pluginProd = [...pluginsBase, new CleanWebpackPlugin()];

    const pluginsCustom = [
        ...pluginsBase,
        new HtmlWebpackPlugin({
            chunks: ['main'],
            filename: 'index.html',
            template: path.resolve(__dirname, 'template.html'),
        }),
    ];

    return { pluginsBase, pluginProd, pluginsCustom };
};
