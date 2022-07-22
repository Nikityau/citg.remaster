const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            src: path.resolve(__dirname, 'src'),
            components: path.resolve(__dirname, 'src', 'Components'),
            ui: path.resolve(__dirname, 'src', 'Components', 'UI'),
            assets: path.resolve(__dirname, 'src', 'assets'),
            slider_ui: path.resolve(__dirname, 'src', 'Components', 'UI', 'Slider.ui'),
            utils: path.resolve(__dirname, 'src', 'Utils'),
            utils_components: path.resolve(__dirname, 'src', 'Components', 'Utils.Components')
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].[contenthash].bundle.js",
        assetModuleFilename: "assets/images/[name][ext]",
        publicPath: "/",
        clean: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin()
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src')
        },
        historyApiFallback: true,
        compress: true,
        port: 3000,
        open: true,
        hot:true,
        client: {
            reconnect: true
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: path.resolve(__dirname, 'src', 'assets', 'icons', 'favicon', 'logo.svg'),
            minify: false
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].bundle.css'
        }),
    ]
}