const path=require('path')
const HTMLWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev=process.env.NODE_ENV === 'development';
const isProd=!isDev;

const optimization=()=>{
    const config={
        splitChunks:{
            chunks:'all'
        }
    }
    if(isProd){
        config.minimizer=[
            new TerserWebpackPlugin()
        ]
    }
    return config
}
const babelOptions=(preset)=>{
    const opts={
        presets:['@babel/preset-env'],
        plugins:['@babel/plugin-proposal-class-properties']
    }
    if(preset){
        opts.presets.push(preset)
    }
    return opts
}
module.exports={
    mode:'development',
    entry:{
        main:['@babel/polyfill','./src/index.js']
    },
    output:{
        filename:'[name].[contenthash].js',
        path:path.resolve(__dirname,'build')
    },
    resolve:{
        extensions:['.js','.json'],
        alias:{
            '@':path.resolve(__dirname,'src')
        }
    },
    optimization:optimization(),
    devServer:{
        port:3000,
        open:true,
        hot:isDev
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: 'src/404.html', to: '404.html' }
            ]
          })
    ],
    module:{
        rules:[
            //Loading CSS
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            //Loading images
            {
                test:/\.jpg$|\.gif$|\.png|\.ico|\.svg$/,
                use:['file-loader']
            },
            //Loading fonts
            {
                test:/\.(ttf|otf|eot|woff|woff2)$/,
                use:['file-loader']
            },
            //Loading xml
            {
                test:/\.xml$/,
                use:['file-loader']
            },
             //Babel JS
             {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: babelOptions(),
                }
              },
            

        ],
    }
}