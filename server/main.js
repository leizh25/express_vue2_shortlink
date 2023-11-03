//引入express
const express = require("express")
const app = express()
//引入config
const config = require("config")
//引入connectDB方法
const connectDB = require("./config/db")
//连接mongodb数据库
connectDB()
//中间件解析json, 配置了这个才可以使用req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//配置路由
app.use("/",require("./routes/index"))
app.use("/api/url",require("./routes/url"))

//监听启动服务
const PORT = config.port
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
