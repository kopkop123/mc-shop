var path = require("path");
//console.log(__dirname)
module.exports = {
    entry: "./src/frontend/root.js",
    output: {
        path: __dirname + '/dist',
        publicPath: "/dist",
        filename: "build.js"
    },
    mode : 'development',
    devServer: {
        contentBase : path.join(__dirname, '/'),
        port : 3000,
        //inline: true,
        //hot: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use : {
                    loader: "babel-loader",
                    options : {
                        plugins: [
                            ["transform-react-jsx"],
                            ["transform-class-properties"]
                        ]
                    }
                },
                exclude: [/node_modules/, /public/],
            },
            {
                test: /.\sass$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'auto-prefixer'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'auto-prefixer'}
                ],
                //loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'auto-prefixer'},
                    {loader: 'less-loader'}
                ],
                //loader: "style-loader!css-loader!autoprefixer-loader!less-loader",
                exclude: [/node_modules/, /public/]
            },

            {
                test: /\.(jpe?g|gif|png|svg|ttf|eot|woff|woff2)$/,
                use:[
                    {loader : 'file-loader'}
                ]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ]
    }
};