const { default: mongoose, Schema, model, Model } = require("mongoose")

//创建数据表结构
const urlSchema = new Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now() },
})

//创建表模型  model
const UrlModel = model("Url", urlSchema)
module.exports = UrlModel
