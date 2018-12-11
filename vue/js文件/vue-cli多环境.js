//1.引入npm install --save cross-env
// 2.在package.json 中 script 标签里加上一句
// "build:pre": "cross-env NODE_ENV=pre env_config=pre node build/build.js"
//3. webpack.prod.conf.js文件：
// const env = require ('../config/' + process.env.env_config + '.env')
//4.package.json中修改biuld：
// "cross-env NODE_ENV=production env_config=prod node build/build.js"
// 5.build.js中有一段描述：
//const spinner = ora('building for ' + process.env.env_config)
