
// Configuración webPack

const path = require('path');


// Inyección de archivo js a html con plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Extrae el archivo css del bundle
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const autoprefixer = require('autoprefixer');


module.exports = {


    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js"
    },

    devtool: 'source-map',


    // Reglas

    module: {
        rules: [
            { // Regla para transpilar jsModerno a js2015
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader'
            },
            // {  // Regla para  Inyección de JS en HTML
            //     test: /\.html$/i,
            //     use: [
            //         {
            //             loader: "html-loader",
            //             options: { minimize: true },
            //         },
            //     ],
            // },
            { // Regla para extraer el css del dist
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'sass-loader',
                ],
            },
            { // Regla para el manejo de imagenes
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/img/',
                            useRelativePath: true
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ],

            },
        ]
    },

    // Plugins Generales

    plugins: [
        new HtmlWebpackPlugin({ // Plugin para Inyección de JS en HTML
            template: "./src/index.handlebars",
            filename: "./index.html",
            minify: {
                html5: true,
                collapseWhitespace: true,
                caseSensitive: true,
                removeComments: true,
                removeEmptyElements: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: "./styles/[name].css",
        }),
    ],
}