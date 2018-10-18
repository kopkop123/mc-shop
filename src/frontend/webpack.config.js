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
        contentBase : path.join(__dirname, '/src'),
        port : 3000,
        //inline: true,
        //hot: true
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
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
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