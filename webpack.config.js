const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    /**
     * The entry point from which Webpack start building the bundle
     */
    entry: {
        main: "./src/index.jsx"
    },
    resolve: {
        /**
         * An array of extensions that should be discoverable by the module loader
         */
        extensions: ['.js', '.jsx']
    },
    /**
     * The output directory and file name(s) of the bundle
     */
    output: {
        path: path.resolve(__dirname, 'dist'), //output directory
        chunkFilename:"[name].bundle.js",
        filename: "[name].bundle.js" // name of generated bundle
    },
    module: {
        /**
         * Different loader rules that makes webpack able to load other files types different from JavaScript
         */
        rules: [
            /**
             * css-loader: The css-loader loads css files and returns css code.
             * style-loader: The style-loader adds this css code as a style element to the DOM
             */
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            },

            {
                test: /\.jsx$/,
                exclude: /(node_modules|root_application.js)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['babel-preset-env', {"modules":false}], 'babel-preset-react']
                    }
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[hash].[ext]",
                    },
                },
            },
        ]
    },
    plugins: [
        /**
         * Clean dist directory befor new build
         */
        new CleanWebpackPlugin(['dist']),
        /**
         * Correctly inject complied budle JS files to HTML
         */
        new HtmlWebpackPlugin({
            template: "index.html",
            inject: "body",
        }),
        /**
         * An addon for HtmlWebpackPlugin that allows us to add styles and Scripts dynamically on the page
         */
        // new HtmlWebpackIncludeAssetsPlugin({
        //     assets: ['./src/style.css'],
        //     append: true
        // }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    /**
     * Instructs webpack to generate source-maps
     */
    devtool: "source-map",
    /**
     * Required when using webpack-dev-server with angular routing
     */
    devServer: {
        historyApiFallback: true,
        hot: true
    }
};
