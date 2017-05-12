var path = require("path")
module.exports = {
    entry: "./src/injectDOM.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module:
    {
        loaders: 
        [
            {test: /\.js$/, loader: "babel-loader", exclude: path.join(__dirname, "node_modules")},
            {test: /\.jsx$/, loader: "babel-loader", exclude: path.join(__dirname, "node_modules")},
        ]
    }
}