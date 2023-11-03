//引入express
const express = require("express")
const app = express()

//连接mongodb数据库

//中间件解析json, 配置了这个才可以使用req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//配置路由

//监听启动服务
const PORT = 3000
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
