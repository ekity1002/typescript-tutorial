const path = require('path');

module.exports = {
    
    devtool: 'eval-source-map',
    entry: './src/index.ts', //webpack のエントリポイントファイル。最初に見る？
    module: {
        rules: [
            {
                test: /\.ts$/,   //テストのときに使用する
                use: 'ts-loader', //使用するローダー
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    // ファイルの出力場所の設定
    output: {
        // publicPath: 'public',
        filename: 'bundle.js', //コンパイル後のファイル名
        path: path.resolve(__dirname, 'public') // 出力先：
    },
    resolve: {
        extensions: ['.js','.ts','.tsx']
    }
}