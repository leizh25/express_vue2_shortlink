const { default: mongoose } = require("mongoose")
const config = require("config")
const dbUrl = config.get("mongodbUrl")
//创建mongodb数据库连接
const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      user: config.get("user"),
      pass: config.get("password"),
    })
    console.log("mongoDB connected")
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}
module.exports = connectDB
