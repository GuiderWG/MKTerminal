const path = require('path');

module.exports = {
    context: 'D:\\REPO\\mix-quick',
    mode: 'production',
    entry: {
        '/js/bundle': [
            'D:\\REPO\\mix-quick\\resources\\js\\app.js',
            'D:\\REPO\\mix-quick\\resources\\sass\\app.scss',
            'D:\\REPO\\mix-quick\\resources\\sass\\main.scss'
        ],
        '/js/main': ['D:\\REPO\\mix-quick\\resources\\js\\main.js'],
    },
    output: {
        path: 'D:\\REPO\\mix-quick\\public',
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: '/\\.html$/',
                loaders: ['html-loader'],
            },
            {
                test: '/(\\.(png|jpe?g|gif|webp)$|^((?!font).)*\\.svg$)/',
                loaders: [
                    { loader: 'file-loader', options: { publicPath: '../' } },
                    {
                        loader: 'img-loader',
                        options: { enabled: true, gifsicle: {}, mozjpeg: {}, optipng: {}, svgo: {} },
                    },
                ],
            },
            {
                test: '/(\\.(woff2?|ttf|eot|otf)$|font.*\\.svg$)/',
                loader: 'file-loader',
                options: { publicPath: '../' },
            },
            {
                test: '/\\.(cur|ani)$/',
                loader: 'file-loader',
                options: { name: '[name].[ext]?[hash]', publicPath: '../' },
            },
            {
                test: '/\\.jsx?$/',
                exclude: '/(node_modules|bower_components)/',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    'D:\\REPO\\mix-quick\\node_modules\\@babel\\preset-env\\lib\\index.js',
                                    {
                                        modules: false,
                                        forceAllTransforms: true,
                                    },
                                ],
                            ],
                            plugins: ['D:\\REPO\\mix-quick\\node_modules\\@babel\\plugin-syntax-dynamic-import\\lib\\index.js', 'D:\\REPO\\mix-quick\\node_modules\\@babel\\plugin-proposal-object-rest-spread\\lib\\index.js', ['D:\\REPO\\mix-quick\\node_modules\\@babel\\plugin-transform-runtime\\lib\\index.js', { helpers: false }]],
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: 'D:\\REPO\\mix-quick\\resources\\sass\\app.scss',
                use: [
                    {
                        loader: 'D:\\REPO\\mix-quick\\node_modules\\extract-text-webpack-plugin\\dist\\loader.js',
                        options: { id: 1, omit: 1, remove: true },
                    },
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: { url: true, sourceMap: false, importLoaders: 1 },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, ident: 'postcss0', plugins: [null, null] },
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: { sourceMap: true, engine: 'rework' },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: { precision: 8, outputStyle: 'expanded' },
                            implementation: {
                                info: 'dart-sass\t1.26.10\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                                types: {},
                                NULL: {},
                                TRUE: { value: true },
                                FALSE: { value: false },
                            },
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: 'D:\\REPO\\mix-quick\\resources\\sass\\main.scss',
                use: [
                    {
                        loader: 'D:\\REPO\\mix-quick\\node_modules\\extract-text-webpack-plugin\\dist\\loader.js',
                        options: { id: 2, omit: 1, remove: true },
                    },
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: { url: true, sourceMap: false, importLoaders: 1 },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, ident: 'postcss1', plugins: [null, null] },
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: { sourceMap: true, engine: 'rework' },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: { precision: 8, outputStyle: 'expanded' },
                            implementation: {
                                info: 'dart-sass\t1.26.10\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]',
                                types: {},
                                NULL: {},
                                TRUE: { value: true },
                                FALSE: { value: false },
                            },
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: '/\\.css$/',
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 },
                    },
                    { loader: 'postcss-loader', options: { plugins: [null, null] } },
                ],
            },
            {
                test: '/\\.scss$/',
                exclude: ['D:\\REPO\\mix-quick\\resources\\sass\\app.scss', 'D:\\REPO\\mix-quick\\resources\\sass\\main.scss'],
                loaders: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: { plugins: [null, null] },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sassOptions: { precision: 8, outputStyle: 'expanded' } },
                    },
                ],
            },
            {
                test: '/\\.sass$/',
                exclude: ['D:\\REPO\\mix-quick\\resources\\sass\\app.scss', 'D:\\REPO\\mix-quick\\resources\\sass\\main.scss'],
                loaders: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: { plugins: [null, null] },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sassOptions: { precision: 8, outputStyle: 'expanded', indentedSyntax: true } },
                    },
                ],
            },
            {
                test: '/\\.less$/',
                exclude: [],
                loaders: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: { plugins: [null, null] },
                    },
                    'less-loader',
                ],
            },
            {
                test: '/\\.styl(us)?$/',
                exclude: [],
                loaders: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: { plugins: [null, null] },
                    },
                    'stylus-loader',
                ],
            },
            {
                test: '/\\.twig$/',
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minify: true,
                            attrs: [':srcset', 'img:src', 'audio:src', 'video:src', 'video:poster', 'track:src', 'embed:src', 'source:src', 'input:src', 'object:data'],
                        },
                    },
                    { loader: 'twig-html-loader', options: { autoescape: true, functions: {} } },
                ],
            },
            {
                test: 'D:\\REPO\\mix-quick\\resources\\js\\main.js',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    'D:\\REPO\\mix-quick\\node_modules\\@babel\\preset-env\\lib\\index.js',
                                    {
                                        modules: false,
                                        forceAllTransforms: true,
                                    },
                                ],
                            ],
                            plugins: [],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        {
            compilationSuccessInfo: {},
            shouldClearConsole: true,
            formatters: [null, null, null],
            transformers: [null, null, null],
        },
        { definitions: { 'process.env.NODE_ENV': '"production"' } },
        {},
        {},
        {},
        {
            filename: '/css/bundle.css',
            id: 1,
            options: {},
        },
        { filename: '/css/main.css', id: 2, options: {} },
        {
            options: {
                template: 'resources/twig/index.twig',
                templateContent: false,
                filename: 'index.html',
                hash: true,
                inject: false,
                scriptLoading: 'blocking',
                compile: true,
                favicon: false,
                minify: { collapseWhitespace: false, removeComments: true },
                cache: true,
                showErrors: true,
                chunks: 'all',
                excludeChunks: [],
                chunksSortMode: 'auto',
                meta: {},
                base: false,
                title: 'Webpack App',
                xhtml: false,
            },
            version: 4,
        },
        {},
    ],
    stats: {
        hash: false,
        version: false,
        timings: false,
        children: false,
        errorDetails: false,
        entrypoints: false,
        performance: true,
        chunks: false,
        modules: false,
        reasons: false,
        source: false,
        publicPath: false,
        builtAt: false,
    },
    performance: {
        hints: false,
    },
    optimization: {
        minimizer: [
            {
                options: {
                    test: '/\\.m?js(\\?.*)?$/i',
                    extractComments: false,
                    cache: true,
                    parallel: true,
                    exclude: '/main\\.js(\\?.*)?$/i',
                    terserOptions: { output: { comments: false } },
                },
            },
            {
                pluginDescriptor: { name: 'OptimizeCssAssetsWebpackPlugin' },
                options: {
                    assetProcessors: [
                        {
                            phase: 'compilation.optimize-chunk-assets',
                            regExp: '/(?<!main)\\.css(\\?.*)?$/i',
                        },
                    ],
                    assetNameRegExp: '/\\.css(\\?.*)?$/i',
                    cssProcessorOptions: {},
                    cssProcessorPluginOptions: { preset: ['default', { discardComments: { removeAll: true } }] },
                },
                phaseAssetProcessors: {
                    'compilation.optimize-chunk-assets': [
                        {
                            phase: 'compilation.optimize-chunk-assets',
                            regExp: '/(?<!main)\\.css(\\?.*)?$/i',
                        },
                    ],
                    'compilation.optimize-assets': [],
                    'emit': [],
                },
                deleteAssetsMap: {},
            },
        ],
    },
    devtool: false,
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        contentBase: 'D:\\REPO\\mix-quick\\public',
        historyApiFallback: true,
        noInfo: true,
        compress: true,
        quiet: true,
    },
    resolve: {
        extensions: ['*', '.wasm', '.mjs', '.js', '.jsx', '.json', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.common.js',
        },
    },
};
