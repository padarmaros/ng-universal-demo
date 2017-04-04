var webpack = require('webpack'),
    path = require('path');

module.exports = function()
{
    var distPath = "wwwroot/dist";

    var config =
    {
        entry:
        {
            "dependencies":
            [
                "./webpack.config.dev.imports"
            ]
        },
        output:
        {
            path: path.join(__dirname, distPath),
            filename: '[name].js',
            library: '[name]_[hash]'
        },
        resolve:
        {
            extensions: ['.ts', '.js'],
            alias:
            {
                "numeral-languages": path.join(__dirname, "node_modules/numeral/locales.js"),
                "handlebars": path.join(__dirname, "node_modules/handlebars/dist/handlebars.js"),
                "typeahead": path.join(__dirname, "node_modules/typeahead.js/dist/typeahead.jquery.js"),
                "moment": path.join(__dirname, "node_modules/moment/min/moment-with-locales.js"),
                "./locale": path.join(__dirname, "node_modules/moment/locale"),
                "app": path.join(__dirname, "app")
            }
        },
        module:
        {
            rules:
            [
                {
                    test: require.resolve("jquery"),
                    use:
                    [
                        {
                            loader: 'expose-loader',
                            options: '$'
                        },
                        {
                            loader: 'expose-loader',
                            options: 'jQuery'
                        }
                    ]
                },
                {
                    test: require.resolve("numeral"),
                    use:
                    [
                        {
                            loader: 'expose-loader',
                            options: 'numeral'
                        }
                    ]
                }
            ]
        },
        plugins:
        [
            new webpack.DllPlugin(
            {
                path: path.join(__dirname, distPath + '/[name]-manifest.json'),
                name: '[name]_[hash]'
            })
        ]
    };

    return config;
};