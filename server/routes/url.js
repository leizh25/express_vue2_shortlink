const express = require("express")
const router = express.Router()
const UrlModel = require("../models/Url")
const validUrl = require("valid-url")
const nanoid = require("nanoid")
const config = require("config")
// @route POST api/url/shorten
// @desc 创建短连接
router.post("/shorten", async (req, res) => {
  //1.获取长连接
  const { longUrl } = req.body

  //2.验证长链接

  if (!validUrl.isUri(longUrl)) {
    return res.status(401).json("无效的Url")
  }
  //3.生成url code
  const urlCode = nanoid(10)

  //4.生成短连接
  const shortUrl = config.get("baseUrl") + urlCode

  try {
    //检测长链接longUrl是否存在数据库
    const havaurl = await UrlModel.findOne({ longUrl })
    if (havaurl) return res.json(havaurl)

    //5.存入数据库
    const url = new UrlModel({
      longUrl,
      shortUrl,
      urlCode,
      date: new Date().toLocaleString(),
    })
    await url.save()

    //6.响应url对象
    res.json(url)
  } catch (error) {
    console.log("error: ", error)
    res.status(500).json("Server error")
  }
})

module.exports = router
