//Require the Path Nodejs module
let path = require("path");
//Make sure to export the config object as default export 
module.exports = {
    entry: path.resolve("./groupBy.js"),
    target: "node", //nodejs || web
    mode: "development", //development || production 
    output: {
        filename: "app.js",
        path: path.resolve("./dist"),
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
}