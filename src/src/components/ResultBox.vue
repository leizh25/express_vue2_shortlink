<template>
  <section class="content">
    <!-- 提示信息 -->
    <section class="message" v-show="status === 'error'">{{ message }}</section>
    <!-- loading 加载状态 -->
    <img src="images/loading.gif" class="loading-img" v-show="status === 'loading'" />
    <!-- 显示短连接和二维码 -->
    <section class="clink" v-show="status === 'success'">
      <div class="dc-link">
        短连接: <a :href="shortUrl" class="dc-link-text" target="_blank">{{ shortUrl }}</a>
      </div>
      <div class="dc-qrcode">
        <span>二维码: </span>
        <div id="qrcode"><canvas style="width: 200px; height: 200px"></canvas></div>
      </div>
    </section>
  </section>
</template>
<script>
import QRCode from "qrcode"
export default {
  data() {
    return {
      message: "提示信息",
      status: "success", //error loading success
      longUrl: "",
      shortUrl: "",
    }
  },
  methods: {
    init() {
      this.$bus.$on("sendLongUrl", config => {
        this.status = ""
        this.longUrl = config.link
        if (config.status === true) {
          //请求结构 带上长链接
          this.requestShortUrl()
        } else {
          this.status = "error"
          this.message = config.message
        }
      })
    },
    requestShortUrl() {
      //进入加载状态
      this.status = "loading"

      //请求短连接
      fetch("http://127.0.0.1/api/url/shorten", {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          longUrl: this.longUrl,
        }),
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          this.status = "success"
          this.shortUrl = res.shortUrl
          //生成二维码
          let qrcode = QRCode.toCanvas(document.querySelector("canvas"), res.shortUrl, function (error) {
            if (error) console.error(error)
            console.log("success!")
          })
        })
    },
  },
  mounted() {
    this.init()
  },
}
</script>
<style scoped>
.content {
  position: relative;
  top: 150px;
  left: 250px;
  width: 800px;
  overflow: hidden;
}
.clink {
  width: 800px;
  height: 400px;
  overflow: hidden;
}
.dc-link {
  color: rgb(207, 89, 89);
  font-size: 30px;
  margin-bottom: 50px;
}
.dc-qrcode {
  height: 200px;
  color: rgb(207, 89, 89);
}

#qrcode {
  width: 200px;
  height: 200px;
}
</style>
