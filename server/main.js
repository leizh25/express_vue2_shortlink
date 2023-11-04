//引入express
const express = require("express")
const app = express()
//引入config
const config = require("config")
//引入connectDB方法
const connectDB = require("./config/db")
//引入ejs模板库
const ejs = require("ejs")

//连接mongodb数据库
connectDB()
//中间件解析json, 配置了这个才可以使用req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//配置路由
app.use("/", require("./routes/index"))
app.use("/api/url", require("./routes/url"))

//配置html引擎
app.engine("html", ejs.__express)
//设置视图引擎
app.set("views", "./views")
app.set("view engine", "html")

//监听启动服务
const PORT = config.port
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
