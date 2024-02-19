const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/hello-world.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        },
        output: {
            filename: "hello-world.js",
            path: path.resolve(__dirname, "dist"),
        },
}


