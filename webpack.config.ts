import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import dotenv from "dotenv";
import { DefinePlugin } from 'webpack';

dotenv.config({ path: './.env.development' });

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
    },
    devtool: "source-map",
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js?$/, loader: "source-map-loader" },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader', "postcss-loader"],
            },

        ],
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new DefinePlugin({
            "process.env" : JSON.stringify(process.env),
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        open: true,
        historyApiFallback: true,
    },
}