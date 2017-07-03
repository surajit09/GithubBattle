var path=require('path');
var htmlWebpackPlugin=require("html-webpack-plugin");







module.exports={
	
	entry: ["babel-polyfill",'./app/index.js'],
	
	output:{
		
		path: path.resolve(__dirname,'dist'),
		filename:"index_bundle.js",
		publicPath:'/'
		
	},
	
	module:{
		
		loaders:[
			
			{test:/\.(js)$/,  use:"babel-loader"},
			{test:/\.css$/,  use:["style-loader","css-loader"]}
		]
		
	},
	
	devServer:{
		historyApiFallback:true
	},
	plugins:[new htmlWebpackPlugin({
		
		template:'app/index.html'
	})]
}
